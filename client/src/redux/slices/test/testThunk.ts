import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AnswerFormType, AnswerModelType, QuestionAnswerType, QuestionFormType, QuestionModelType } from "../../../types/testTypes";


// 
export const addQuestionsThunk = createAsyncThunk<QuestionModelType, QuestionFormType>(
    'questions/addQuestions',
    async(companyId, courseId, formData) => {
        const {data} = await axios.post<QuestionFormType>
        (`/company/${companyId}/allcourses/${courseId}/addQuestions`, formData);
        return data;
    }
)
export const getAllQuestionsThunk = createAsyncThunk<QuestionModelType[]>(
    'questions/getAllQuestions',
    async(companyId, courseId) => {
        const {data} = await axios<QuestionModelType[]>
        (`/company/${companyId}/allcourses/${courseId}/allquestions`);
        return data
    }
)

export const addAnswersThunk = createAsyncThunk<AnswerModelType, AnswerFormType>(
    'questions/addAnswers',
    async(companyId, courseId, questionId, formData) => {
        const {data} = await axios.post<AnswerFormType>
        (`/company/${companyId}/allcourses/${courseId}/allquestions/${questionId}`, formData);
        return data;
    }
)

export const getQuestionsAnswersThunk = createAsyncThunk<QuestionAnswerType[]>(
    'questionsanswers/getQuestionsAnswers',
    async (courseId) => {
        const {data} = await axios<QuestionAnswerType[]>
        (`/company/${companyId}/allcourses/${courseId}/questionsanswers`);
        return data
    }
)