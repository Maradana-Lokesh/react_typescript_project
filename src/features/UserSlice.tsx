import {createApi,fetchBaseQuery,retry } from "@reduxjs/toolkit/query/react";


const staggeredBaseQuery = retry(fetchBaseQuery({baseUrl:"https://freetestapi.com/api/v1/studens/"}))
export const usersApi = createApi({
    baseQuery:staggeredBaseQuery,
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=>({url:"1"}),
            extraOptions: { maxRetries: 1 }
        }),
        // getPost: builder.query({
        //     query: (id) => ({ url: `/${id}` }),
        //    extraOptions: { maxRetries: 5 }, // You can override the retry behavior on each endpoint
        //   }),
        // addStudent:builder.mutation<void,users>({
        //     query:(users)=>({
        //         url:"",
        //         method:"POST",
        //         body:users
        //     })
        // })
    }),
});
export const{useGetUsersQuery} = usersApi;
// fetchBaseQuery({baseUrl:'https://freetestapi.com/api/v1/students'}),