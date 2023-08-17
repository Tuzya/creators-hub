export type CoursesUserType = {
  user_id: number;
  courses_id: number;
  status: boolean;
};

export type EditCoursesUserType = Pick<CoursesUserType, 'status'>;
