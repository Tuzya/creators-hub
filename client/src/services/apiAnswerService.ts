/* eslint-disable import/prefer-default-export */
import type { AnswerFormType, AnswerModelType, QuestionAnswerType } from '../types/testTypes';
import { apiService } from './apiServiceConfig';

export const getAllAnswerService = async (courseId: number): Promise<AnswerModelType[]> => {
  const { data } = await apiService.get<AnswerModelType[]>(
    `/company/allcourses/${courseId}/question-all-answers`,
  );
  console.log('bug');
  return data;
};

// export const addAnswerService = async (
//   courseId: number,
//   questionId: number,
//   input: AnswerFormType,
// ): Promise<AnswerModelType> => {
//   const { data } = await apiService.get<AnswerModelType>(
//     `/company/allcourses/${courseId}/addQuestions/${questionId}/addAnswers`,
//     input,
//   );
//   console.log('bug');
//   return data;
// };
