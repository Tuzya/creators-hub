export type CoursesOneType = {
   id: number;
   title: string;
   body: string;
   downloadLink: string;

}

export type CoursesOneFormType = Omit<CoursesOneType, 'id'>