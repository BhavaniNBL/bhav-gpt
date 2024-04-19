import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
         // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes.
//       // Also, no return statement is required from these functions.
        addUser: (state, action) => {
           return  action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;