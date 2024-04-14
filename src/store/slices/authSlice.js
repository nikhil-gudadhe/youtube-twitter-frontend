import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast"

const initialState = {
    loading: false,
    status: false,
    userData: null,
}

export const createAccount = createAsyncThunk("register", async (data) => { 
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullName", data.fullName);
    if (data.coverImage) {
        formData.append("coverImage", data.coverImage[0]);
    }

    try {
        const response = await axiosInstance.post("/users/register", formData);
        console.log(response.data);
        toast.success("Registered successfully!!!");
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAccount.pending, (state) => {
            state.loading = true;
        });
    }
})

//export const {login, logout} = authSlice.actions

export default authSlice.reducer