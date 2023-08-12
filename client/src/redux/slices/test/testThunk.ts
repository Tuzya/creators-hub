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
    async({companyId, courseId, formData}: 
        {companyId: number, courseId: number, formData: QuestionFormType}) => {
        const {data} = await axios.post<QuestionModelType>
        (`/company/${companyId}/allcourses/${courseId}/addQuestions`, formData);
        return data;
    }
)
export const getAllQuestionsThunk = createAsyncThunk(
    'questions/getAllQuestions',
    async({companyId, courseId}: 
        {companyId: number, courseId: number}) => {
        const {data} = await axios<QuestionModelType[]>
        (`/company/${companyId}/allcourses/${courseId}/allquestions`);
        return data
    }
)

export const addAnswersThunk = createAsyncThunk(
    'questions/addAnswers',
    async({companyId, courseId, questionId, formData}: 
        {companyId: number, courseId: number, questionId: number, formData: AnswerFormType}) => {
        const {data} = await axios.post<AnswerModelType>
        (`/company/${companyId}/allcourses/${courseId}/allquestions/${questionId}`, formData);
        return data;
    }
)

export const getQuestionsAnswersThunk = createAsyncThunk(
    'questionsanswers/getQuestionsAnswers',
    async ({companyId, courseId}: 
        {companyId: number, courseId: number}) => {
        const {data} = await axios<QuestionAnswerType[]>
        (`/company/${companyId}/allcourses/${courseId}/questionsanswers`);
        return data
    }
)