import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: [],
  submit: [],
  index: 0,
  data: []
}

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setActive: (state, action) => {
      //action payload is index
      var off = [false,false,false,false,false,false,false];
      off[action.payload] = true;
      state.index = action.payload;
      state.active = off;
    },setSubmit: (state, action) => {
      state.submit[action.payload] = true;
      state.index = action.payload;
    }
  },setIndex: (state, action) => {
    state.index = action.payload;
  },setData: (state, action) => {
    //[index,data]
    state.data[action.payload[0]] = action.payload[1];
  }
})

// Action creators are generated for each case reducer function
export const { setActive, setSubmit, setIndex, setData } = statusSlice.actions

export default statusSlice.reducer