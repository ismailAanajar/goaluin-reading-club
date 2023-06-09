
type UserInfo = {
    name: string | null;
  email: string | null;
  posts: Post[]
} 
type User = {
  userInfo: UserInfo;
   loading: boolean,
  token: string | null | undefined;
  error: string | null | undefined;
}

type Post = {
  id: number | null;
  title: string | null;
  description: string | null;
  created_at: string | number | Date;
 
}