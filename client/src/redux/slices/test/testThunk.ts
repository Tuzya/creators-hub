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
      `/company/bbbb/allcourses/${courseId}/addQuestion`,
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
    const { data } = await axios<QuestionAnswerType[]>(
      `/company/allcourses/${courseId}/question-all-answers`,
    );
    return data;
  },
);

export const changeStatusAnswerThunk = createAsyncThunk(
  'questions/changeStatusAnswer',
  async ({ courseId, questionId, answerId }: { courseId: number; questionId: number, answerId: number }) => {
    const { data } = await axios.put<AnswerModelType>(
      `/company/hhhh/allcourses/${courseId}/allquestions/${questionId}/answer/${answerId}`,
    );
    return data;
  },
);

export const deleteAnswerThunk = createAsyncThunk(
  'questions/deleteAnswer',
  async ({ courseId, questionId, answerId }: { courseId: number; questionId: number, answerId: number }) => {
    await axios.delete<AnswerModelType ['id']>(`/company//hhhh/allcourses/${courseId}/allquestions/${questionId}/answer/${answerId}`);
    
    return answerId;
  },
);