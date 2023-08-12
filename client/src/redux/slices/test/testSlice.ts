import { createSlice } from "@reduxjs/toolkit";
import 
{ addAnswersThunk, 
addQuestionsThunk, 
getAllQuestionsThunk, 
getQuestionsAnswersThunk } 
from "./testThunk";


const initialState = {
questions: [],    
questionsAnswers: []
}

export const testSlice =  createSlice({
    name: 'questionsAnswers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addQuestionsThunk.fulfilled, (state, { payload }) => [payload, ...state]);
        builder.addCase(addQuestionsThunk.rejected, (state) => state);

        builder.addCase(getAllQuestionsThunk.fulfilled, (state, {payload}) => payload);
        builder.addCase(getAllQuestionsThunk.rejected, (state) => state);

        builder.addCase(addAnswersThunk.fulfilled, (state, { payload }) => [payload, ...state]);
        builder.addCase(addAnswersThunk.rejected, (state) => state)

        builder.addCase(getQuestionsAnswersThunk.fulfilled, (state, {payload}) => payload);
        builder.addCase(getQuestionsAnswersThunk.rejected, (state) => state);


    }
})

export default testSlice.reducer;