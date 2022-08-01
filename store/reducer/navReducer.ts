import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface navState {
	origin: number | null;
	destination: number | null;
	travelTimeInformation: number | null;
}

const initialState = {
	origin: null,
	destination: null,
	travelTimeInformation: null,
} as navState;

const navReducer = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setOrigin(state, action: PayloadAction<number>) {
			state.origin = action.payload;
		},
		setDestination(state, action: PayloadAction<number>) {
			state.destination = action.payload;
		},
		setTravelTimeInformation(state, action: PayloadAction<number>) {
			state.travelTimeInformation = action.payload;
		},
	},
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navReducer.actions;
export default navReducer.reducer;
