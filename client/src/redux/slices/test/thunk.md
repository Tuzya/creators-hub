import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {
QuestionFormType,
QuestionModelType,
AnswerFormType,
QuestionAnswerType,
AnswerModelType,
} from '../../../types/testTypes';
import { addQuestionService, getAllQuestionsService } from '../../../services/apiQustionService';
import { getAllAnswerService } from '../../../services/apiAnswerService';

//
export const addQuestionsThunk = createAsyncThunk(
'questions/addQuestions',
async ({ courseId, input }: { courseId: number; input: QuestionFormType }) =>
addQuestionService(courseId, input),
);

export const getAllQuestionsThunk = createAsyncThunk(
'questions/getAllQuestions',
async ({ courseId }: { courseId: number }) => getAllQuestionsService(courseId),
);

export const getAnswersThunk = createAsyncThunk(
'questionsanswers/getAnswers',
async ({ courseId }: { courseId: number }) => getAllAnswerService(courseId),
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
`/company/allcourses/${courseId}/allquestions/${questionId}`,
input,
);
return data;
},
);
