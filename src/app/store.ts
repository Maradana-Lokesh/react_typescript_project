import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/UserSlice";

export const store = configureStore({
    reducer:{
        [usersApi.reducerPath]:usersApi.reducer,    
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(usersApi.middleware),
}); 