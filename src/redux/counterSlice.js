import { createSlice} from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count : 0
    },
    reducers:{
        INCREMENT:(state)=>{
            state.count++
        },
        DECREMENT:(state)=>{
            state.count--
        },
        RESET:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,actionByCounter)=>{
            state.count+=actionByCounter.payload
        }
    }
})
export const {INCREMENT,DECREMENT,RESET,incrementByAmount}=counterSlice.actions
export default counterSlice.reducer