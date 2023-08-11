export type TestModelType = {
id: number,
theme: string, 
courses_id: number
};

export type QuestionModelType = {
    id: number,
    question: string,
    test_id: number
};

export type AnswerModelType = {
    id: number,
    answer: string,
    isCorrect: boolean,
    question_id: number
}