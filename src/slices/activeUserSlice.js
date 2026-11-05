import { createSlice } from '@reduxjs/toolkit'

export const activeUserSlice = createSlice({
    name: 'active',
    initialState: {
        value: localStorage.getItem("userinfo")? JSON.parse(localStorage.getItem("userinfo")) : null
    },
    reducers: {
        activeuser: (state,action) => {
            state.value=action.payload
            
           
            
        },
    }
})
export const { activeuser } = activeUserSlice.actions
export default activeUserSlice.reducer