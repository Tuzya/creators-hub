export type QuestionModelType = {
    id: number,
    question: string,
    course_id: number // заменила на course_id, т. к. будем удалять из БД Тест
};

export type AnswerModelType = {
    id: number,
    answer: string,
    isCorrect: boolean,
    question_id: number
}
export type QuestionFormType = Omit<QuestionModelType, 'id' | 'test_id'>;

export type AnswerFormType = Omit<AnswerModelType, 'id' | 'question_id'>;

export type QuestionAnswerType = {
    question: string,
    answers: AnswerModelType[]
}

