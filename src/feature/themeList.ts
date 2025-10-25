import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '../models/theme'
import { themes } from '../styles/themes'

export interface ThemeState {
	theme: Theme
}

const initialState: ThemeState = {
	theme: themes['light'],
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleThemeAction: (state) => {
            state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light']
		},
	},
})

// Action creators are generated for each case reducer function
export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer
