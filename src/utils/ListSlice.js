import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "lists",
  initialState:{
    lists:[],
    username: "Mannan Baidi"
  },
  reducers:
  {
    getList: (state)=>{
        state.lists?.push(    {
            "id": 1,
            "name": "ABC Corporation",
            "address": "123 Main St",
          })
    }

  }

})

export const { getList } = listSlice.actions;
export default listSlice.reducer;