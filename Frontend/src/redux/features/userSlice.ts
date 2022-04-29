import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../userAPI';

interface userState{
    firstName: string;
    lastName: string;
    error: string | null | unknown;
}

const initialState: userState = {
    firstName: '',
    lastName: '',
    error: null,
}
const token = localStorage.getItem('token');

export const getUserName = createAsyncThunk(
	'user/getUserName',
	async () => {
		const res = await userAPI.post('/profile', {},
        {headers: { Authorization: `Bearer ${token}`}});
		return res.data;
	}
);

export const editUserName = createAsyncThunk(
	'user/editUserName',
	async ({
		firstName,
		lastName,
	}: {
		firstName: string;
		lastName: string;
	}) => {
		await userAPI.put(
			'/profile',
			{ firstName, lastName },
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		return { firstName, lastName };
	}
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUserName.fulfilled, (state, {payload}) => {
            state.firstName = payload.body.firstName;
            state.lastName = payload.body.lastName;
        })
        builder.addCase(getUserName.rejected, (state, { error }) => {
            state.error = error.message;
        })
        builder.addCase(editUserName.fulfilled, (state, { payload }) => {
			state.firstName = payload.firstName;
			state.lastName = payload.lastName;
		});
		builder.addCase(editUserName.rejected, (state, { error }) => {
			state.error = error.message;
		});
    }
})

export default userSlice.reducer