import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk('fetchNews', async (url) => {
    const res = await fetch(url)
    return res.json()
})

export const revertAll = createAction('REVERT_ALL')

const initialState = {
    loading: false,
    data: [],
    error: false
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchNews.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(fetchNews.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
        })

        builder.addCase(fetchNews.rejected, (state,action) => {
            state.error = true
            console.log(action.payload)
        })

        builder.addCase(revertAll, () => initialState)
    },
    reducers: {
        reset: () => initialState
    }
})


export default newsSlice.reducer