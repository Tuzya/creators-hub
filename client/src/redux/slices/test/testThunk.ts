import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { 
    QuestionFormType, 
    QuestionModelType, 
    AnswerFormType, 
    QuestionAnswerType, 
    AnswerModelType} from "../../../types/testTypes";


// 
export const addQuestionsThunk = createAsyncThunk(
    'questions/addQuestions',
    async({courseId, input}: 
        {courseId: number, input: QuestionFormType}) => {
        const {data} = await axios.post<QuestionModelType>
        (`/company/allcourses/${courseId}/addQuestions`, input);
        return data;
    }
)
export const getAllQuestionsThunk = createAsyncThunk(
    'questions/getAllQuestions',
    async({courseId}: 
        {courseId: number}) => {
        const {data} = await axios<QuestionModelType[]>
        (`/company/allcourses/${courseId}/allquestions`);
        return data
    }
)

export const addAnswersThunk = createAsyncThunk(
    'questions/addAnswers',
    async({courseId, questionId, input}: 
        {courseId: number, questionId: number, input: AnswerFormType}) => {
        const {data} = await axios.post<AnswerModelType>
        (`/company/allcourses/${courseId}/allquestions/${questionId}`, input);
        return data;
    }
)

export const getQuestionsAnswersThunk = createAsyncThunk(
    'questionsanswers/getQuestionsAnswers',
    async ({courseId}: 
        {courseId: number}) => {
        const {data} = await axios<QuestionAnswerType[]>
        (`/company/allcourses/${courseId}/questionsanswers`);
        return data
    }
)