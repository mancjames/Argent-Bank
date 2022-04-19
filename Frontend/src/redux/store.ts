import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: AuthState, user: UserState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;