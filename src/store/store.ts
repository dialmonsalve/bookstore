import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice';
import { userSlice } from './user';


export const store = configureStore({

	reducer: {
		auth: authSlice.reducer,
		user: userSlice.reducer
	},
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {auth: authSlice.reducer, }
export type AppDispatch = typeof store.dispatch;