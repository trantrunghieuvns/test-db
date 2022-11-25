import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	text: '',
	picture: '',
};

export const cardSlice = createSlice({
	name: 'cardLogistic',
	initialState,
	reducers: {
		editContent: (state) => {
			state.value += 1;
		},
		deleteCard: (state) => {
			state.value -= 1;
		},
		undo: (state, action) => {
			state.value += action.payload;
		},
		redo: (state, action) => {
			state.value += action.payload;
		},
		addPic: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { undo, redo, addPic, editContent, deleteCard } =
	cardSlice.actions;
