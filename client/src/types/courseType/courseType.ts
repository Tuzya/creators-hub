export type CourseType = {
    id: number;
    title: string;
    body: string;
    downloadLink: string;
    company_id: number;
}



export type SearchParams = {
    query: string;
    filterBy: string;
};