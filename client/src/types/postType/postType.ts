export type PostType = {
   id: number;
   title: string;
   body: string;
   img: string[];
   company_id: number;
}

export type PostInfoType = Omit<PostType, 'id'>