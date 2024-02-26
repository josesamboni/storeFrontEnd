import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API that connects with back end
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:3080",
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
      query: ({ id, token }) => ({
        url: "/auth/" + id,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    // Register User "mutation" registers a new user
    register: builder.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body: body,
      }),
    }),
    // Log in user
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
    }),
    // ORDER
    //Fetch View Customer Orders & OrderDetails by ID
    getOrderDetail: builder.query({
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
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
    // Fetch "UPDATE" Order by ID
    updateOrder: builder.mutation({
      query: ({ id, ...newOrderData }) => ({
        url: `/api/order/${id}`,
        method: "PUT",
        body: newOrderData,
      }),
    }),
    // Fetch "GET" all orders by user ID
    getOrderByUserId: builder.query({
      query: (userId) => ({
        url: `/api/order/${userId}`,
        method: "GET",
      }),
    }),
    // Fetch "GET" a Single order by ID
    getCartOrder: builder.query({
      query: ({ token }) => ({
        url: `/api/order/getCartOrder`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    // Fetch "DELETE" order by ID
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `api/order/${id}`,
        method: "DELETE",
      }),
    }),

    // Fetch Cart
    getCart: builder.query({
      query: ({ token }) => ({
        url: "/api/cart",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addToCart: builder.mutation({
      query: ({ productid, token }) => ({
        url: "/api/cart",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          productid,
        },
      }),
    }),
    deleteCart: builder.mutation({
      //delete one item in cart
      query: ({ id, token }) => ({
        url: "/api/cart",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          productid: id,
        },
      }),
    }),
    sessionAddToCart: builder.mutation({
      query: ({ token, cart }) => ({
        url: "/api/cart/sessionCart",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          cart,
        },
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
  useGetCartOrderQuery,
  useDeleteOrderMutation,
  useGetOrderDetailQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useDeleteCartMutation,
  useSessionAddToCartMutation,
} = api;

export default api;
