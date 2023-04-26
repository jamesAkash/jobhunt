const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const allJobs = createSlice({
  initialState,
  name: "allJobs",
  reducers: {},
});

// export const {} = allJobs.actions;

export default allJobs.reducer;
