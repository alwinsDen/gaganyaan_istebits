import {createSlice} from "@reduxjs/toolkit"

export const audioControl = createSlice({
    name:"audiocontrol",
    initialState:{
        value: true
    },
    reducers:{
        switcher:(state)=>{
            state.value = !state.value
        },
    },
});

export const {switcher} = audioControl.actions;

export default audioControl.reducer;