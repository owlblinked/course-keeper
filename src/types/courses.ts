export interface INewCourse {
  name: string;
  url: string;
  duration: number;
  startDate: string;
  expireDate: string;
}

export interface ICourse extends INewCourse {
  id: string;
  priority: string;
}
