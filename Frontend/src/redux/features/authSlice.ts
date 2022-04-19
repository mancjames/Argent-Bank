import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../userAPI';

interface AuthState {
	isSuccess: boolean;
	isFetching: boolean;
	isError: string | null | unknown;
}

const initialState: AuthState = {
	isSuccess: false,
	isFetching: false,
	isError: null,
};

export const fetch = createAsyncThunk(
	'auth/request',
	async ({ email, password }: { email: string; password: string }) => {
		const res = await userAPI.post('/login', { email, password });
		return res.data;
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			localStorage.setItem('token', '');
			return (state = initialState);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetch.fulfilled, (state, { payload }) => {
			state.isSuccess = true;
			state.isFetching = false;
			state.isError = null;
			localStorage.setItem('token', payload.body.token);
		});
		builder.addCase(fetch.rejected, (state, { error }) => {
			state.isFetching = false;
			state.isError = error.message;
		});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;