import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LinkService from './linkService';

export const fetchLinks = createAsyncThunk('links/fetch', LinkService.getLinks);
export const createLink = createAsyncThunk('links/create', LinkService.createLink);
export const fetchAnalytics = createAsyncThunk('links/analytics', LinkService.getAnalytics);

const linkSlice = createSlice({
  name: 'links',
  initialState: { links: [], analytics: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLinks.fulfilled, (state, action) => {
        state.links = action.payload;
      })
      .addCase(createLink.fulfilled, (state, action) => {
        state.links.push(action.payload);
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.analytics = action.payload;
      });
  },
});

export default linkSlice.reducer;