/* eslint-disable import/prefer-default-export */
import type { QuestionFormType, QuestionModelType } from '../types/testTypes';
import { apiService } from './apiServiceConfig';

export const addQuestionService = async (
  courseId: number,
  inputs: QuestionFormType,
): Promise<QuestionModelType> => {
  const { data } = await apiService.post<QuestionModelType>(
    `/company/allcourses/${courseId}/addQuestions`,
    inputs,
  );
  console.log('bug');
  return data;
};

export const getAllQuestionsService = async (
  courseId: QuestionModelType['id'],
): Promise<QuestionModelType[]> => {
  const { data } = await apiService.get<QuestionModelType[]>(
    `/company/allcourses/${courseId}/allquestions`,
  );
  console.log('bug');
  return data;
};
