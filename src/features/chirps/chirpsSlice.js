import { createSlice } from '@reduxjs/toolkit';

const chirpsSlice = createSlice({
	name: 'chirps',
	initialState: [],
	reducers: {
		addChirp(state, action) {
			const { username, message, created_at } = action.payload;
			const id = Math.random() * 100000;
			state.push({ id, username, message, created_at });
		}
	}
});

export const { addChirp } = chirpsSlice.actions;

export default chirpsSlice.reducer;