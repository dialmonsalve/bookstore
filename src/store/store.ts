import { configureStore } from '@reduxjs/toolkit'
import { adminSlice } from './admin/adminSlice';
import { authSlice } from './auth/authSlice';
import { userSlice } from './user/userSlice';

export const store = configureStore({

	reducer:{
		auth:authSlice.reducer,
		admin:adminSlice.reducer,
		user:userSlice.reducer
	},
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {auth: authSlice.reducer, }
export type AppDispatch = typeof store.dispatch