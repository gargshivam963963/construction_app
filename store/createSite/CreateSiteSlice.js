
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { parseCookies } from 'nookies';
import 'react-toastify/dist/ReactToastify.css';

export const createSiteAsync = createAsyncThunk("createsitecallback", async (values) => {
    try {
        const {token} = parseCookies();
        const {currentOrganizationId} = parseCookies();
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/site/add?organization=${currentOrganizationId}`, values, 
        { headers: { Authorization: `Bearer ${token}` } });
        const userData = response?.data;
        return userData;
    } catch (error) {
        console.error("An error occurred. Please try again.");
        throw error;
    }
});

const initialState = {
    status: 'idle',
    error: null,
}

const authSlice = createSlice({
    name: 'createsite',
    initialState: initialState,
    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
            .addCase(createSiteAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createSiteAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { response} = action.payload;

               
            })
            .addCase(createSiteAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setFormData } = authSlice.actions;
export default authSlice.reducer;