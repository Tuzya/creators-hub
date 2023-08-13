import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {
  QuestionFormType,
  QuestionModelType,
  AnswerFormType,
  QuestionAnswerType,
  AnswerModelType,
} from '../../../types/testTypes';

//
export const addQuestionsThunk = createAsyncThunk(
  'questions/addQuestions',
  async ({ courseId, input }: { courseId: number; input: QuestionFormType }) => {
    const { data } = await axios.post<QuestionModelType>(
      `/company/allcourses/${courseId}/addQuestion`,
      input,
    );
    return data;
  },
);
export const getAllQuestionsThunk = createAsyncThunk(
  'questions/getAllQuestions',
  async ({ courseId }: { courseId: number }) => {
    const { data } = await axios<QuestionModelType[]>(
      `/company/allcourses/${courseId}/allquestions`,
    );
    return data;
  },
);

export const addAnswersThunk = createAsyncThunk(
  'questions/addAnswers',
  async ({
    courseId,
    questionId,
    input,
  }: {
    courseId: number;
    questionId: number;
    input: AnswerFormType;
  }) => {
    const { data } = await axios.post<AnswerModelType>(
      `/company/allcourses/${courseId}/allquestions/${questionId}/addAnswers`,
      input,
    );
    return data;
  },
);

export const getAllAnswerThunk = createAsyncThunk(
  'questions/getAllAnswer',
  async ({ courseId, questionId }: { courseId: number; questionId: number }) => {
    const { data } = await axios<AnswerModelType[]>(
      `/company/allcourses/${courseId}/allquestions/${questionId}`,
    );

    return data;
  },
);

export const getQuestionsAnswersThunk = createAsyncThunk(
  'questionsanswers/getQuestionsAnswers',
  async ({ courseId }: { courseId: number }) => {
    // Ensure courseId is a number

    const { data } = await axios<QuestionAnswerType[]>(
      `/company/allcourses/${courseId}/question-all-answers`,
    );
    console.log('Thunk getQuestionsAnswers: ', data);
    return data;
  },
);
