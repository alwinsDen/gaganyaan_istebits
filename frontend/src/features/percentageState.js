import {createSlice} from "@reduxjs/toolkit"

export const percentageStateSlice=createSlice({
    name:"percentageState",
    initialState:{value:{
        model1per:0,
        model2per:0,
        model3per:0
    }},
    reducers:{
        model1ACT:(state,action)=>{
            state.value.model1per = action.payload
        },
        model2ACT:(state,action)=>{
            state.value.model2per = action.payload
        },
        model3ACT:(state,action)=>{
            state.value.model3per = action.payload
        }
    }
});
export const {model1ACT,model2ACT,model3ACT} = percentageStateSlice.actions;

export default percentageStateSlice.reducer;