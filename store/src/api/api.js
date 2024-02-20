import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API that connects with back end
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:5670",
  }),

  // PRODUCTS
  //Fetching all products
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/product",
    }),
    //Fetching product by ID
    getProductById: builder.query({
      query: (id) => `/api/product/${id}`,
    }),
    // USER
    //Fetching User
    getUser: builder.query({
      query: (token) => ({
        url: `/auth/me`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    // Register User "mutation" registers a new user
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
    //Fetch View Customer Orders & OrderDetails by ID
    getOrderDetails: builder.mutation({
      query: ({ id, token }) => ({
        url: "/customer",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: { id },
      }),
    }),
    //Fetch "CREATE" new order / add cart
    newOrder: builder.mutation({
      query: ({ token, data }) => ({
        url: "/api/order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bear ${token}`,
        },
        body: data,
      }),
    }),
    // Fetch "UPDATE" Order by ID
    updateOrder: builder.mutation({
      query: (id, ...newOrderData) => ({
        url: `/api/order/${id}`,
        method: "PUT",
        body: newOrderData,
      }),
    }),
    // Fetch "GET" all orders by user ID
    getOrderByUserId: builder.query({
      query: (userId) => ({
        url: `/api/order/user/${userId}`,
        method: "GET",
      }),
    }),
    // Fetch "GET" a Single order by ID
    getOrderById: builder.query({
      query: (id) => ({
        url: `/api/order/${id}`,
        method: "GET",
        body: id,
      }),
    }),
    // Fetch "DELETE" order by ID
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `api/order/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetUserQuery,
  useRegisterMutation,
  useLoginMutation,
  useNewOrderMutation,
  useUpdateOrderMutation,
  useGetOrderByUserIdQuery,
  useGetOrderByIdQuery,
  useDeleteOrderMutation,
} = api;

export default api;
