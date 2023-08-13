import { createSlice } from '@reduxjs/toolkit';
import {
  addAnswersThunk,
  addQuestionsThunk,
  getAllAnswerThunk,
  getAllQuestionsThunk,
  getQuestionsAnswersThunk,
} from './testThunk';
import type {
  AnswerModelType,
  QuestionAnswerType,
  QuestionModelType,
} from '../../../types/testTypes';

type InitialStateType = {
  questions: QuestionModelType[];
  questionsAnswers: QuestionAnswerType[];
  answers: AnswerModelType[];
};
const initialState: InitialStateType = {
  questions: [],
  questionsAnswers: [],
  answers: [],
};

export const testSlice = createSlice({
  name: 'questionsAnswers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addQuestionsThunk.fulfilled, (state, { payload }) => {
      state.questions = [payload, ...state.questions];
    });
    builder.addCase(addQuestionsThunk.rejected, (state) => state);

    builder.addCase(getAllQuestionsThunk.fulfilled, (state, { payload }) => {
      state.questions = payload;
    });
    builder.addCase(getAllQuestionsThunk.rejected, (state) => state);

    builder.addCase(addAnswersThunk.fulfilled, (state, { payload }) => {
      state.answers = [payload, ...state.answers];
    });
    builder.addCase(addAnswersThunk.rejected, (state) => state);

    builder.addCase(getAllAnswerThunk.fulfilled, (state, { payload }) => {
      state.answers = payload;
    });
    builder.addCase(getAllAnswerThunk.rejected, (state) => state);

    builder.addCase(getQuestionsAnswersThunk.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.questionsAnswers = payload;
    });
    builder.addCase(getQuestionsAnswersThunk.rejected, (state) => state);
  },
});

export default testSlice.reducer;
