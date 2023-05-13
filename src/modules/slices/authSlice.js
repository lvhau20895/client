import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	loading: false,
	error: null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {}
});

export default authSlice.reducer;
