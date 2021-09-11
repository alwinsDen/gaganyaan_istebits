import {createSlice} from "@reduxjs/toolkit"

export const windowConSlice = createSlice({
    name: "windowCloseControl",
    initialState: {
        value: false
    },
    reducers:{
        windContrl:(state)=>{
            state.value = !state.value
        },
    },
});

export const {windContrl} = windowConSlice.actions;

export default windowConSlice.reducer;