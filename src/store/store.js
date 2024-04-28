import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slice/index"; // Import your root reducer

const store = configureStore({
    reducer: rootReducer,
});

export default store;
