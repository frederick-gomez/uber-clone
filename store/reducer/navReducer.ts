import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type locationType = {
	location: {
		lat: number;
		lng: number;
	};
	name?: string;
} | null;
interface navState {
	origin: locationType;
	destination: locationType;
	travelTimeInformation: number | null;
}

const initialState: navState = {
	origin: null,
	destination: null,
	travelTimeInformation: null,
};

const navReducer = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setOrigin(state, action: PayloadAction<locationType>) {
			state.origin = action.payload;
		},
		setDestination(state, action: PayloadAction<locationType>) {
			state.destination = action.payload;
		},
		setTravelTimeInformation(state, action: PayloadAction<number>) {
			state.travelTimeInformation = action.payload;
		},
	},
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navReducer.actions;
export default navReducer.reducer;
