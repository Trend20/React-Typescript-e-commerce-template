import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";

export const store:ToolkitStore<{auth: any}> = configureStore({
  reducer:{
    auth: authSlice,
  }
})