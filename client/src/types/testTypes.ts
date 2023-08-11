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
export type QuestionFormType = {
    question: string
}
export type AnswerFormType = {
    answer: string
}
export type QuestionAnswerType = {
    question: string,
    answers: []
}

export type AnswerModelType = {
    id: number,
    answer: string,
    isCorrect: boolean,
    question_id: number
}