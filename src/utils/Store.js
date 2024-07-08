import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./ListSlice";
const store= configureStore({
    reducer: {
        List: ListSlice
        // Define your reducers here
    }
});
export default store;