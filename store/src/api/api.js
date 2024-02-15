import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API that connects with back end
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3000",
  }),

  // PRODUCTS
  //Fetching all products
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/product",
    }),
    //Fetching product by ID
    getProduct: builder.query({
      query: (id) => `/api/product/${id}`,
    }),

    // USER
    //Fetching User by ID
    getUser: builder.query({
      query: (token) => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      // Register User "mutation" registers a new user 
      // ask LUKE about query: (should it be user or userDatat)
      register: builder.mutation({
        query: (userData) => ({
          url: "auth/register",
          method: "POST",
          body: userData,
        }),
      }),
      // Log in user
      login: builder.mutation({
        query: (user) => ({
          url: "/auth/login",
          method: "POST",
          body: user,
        }),
      }),

      // ORDER
      //Fetch Create new order
      newOrder: builder.mutation({
        query: (orderDetails) => ({
          url: "/api/order",
          method: "POST",
          body: orderDetails,
        }),
      }),
      // Fetch updateOrder by ID
      updateOrder: builder.mutation({
        query: (id, ...newOrderData) => ({
          url: `/api/order/${id}`,
          method: "PUT",
          body: newOrderData,
        }),
      }),
      // Fetch get user by ID
      getByUserId: builder.query({
        query: (orderId) => ({
          url: `/api/order/${orderId}`,
          method: "GET",
          body: orderId,
        }),
      }),
      // Fetch get order by ID
      getOrderById: builder.query({
        query: (id) => ({
          url: `/api/order/${id}`,
          method: "GET",
          body: id,
        }),
      }),
      // Fetch delete order by ID
      deleteOrder: builder.mutation({
        query: (id) => ({
          url: `api/order/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetUserByIdQuery,
  useRegisterMutation,
  useLoginMutation,
  useNewOrderMutation,
} = api;