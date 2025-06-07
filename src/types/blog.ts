export interface BlogAdmin {
  first_name: string;
  last_name: string;
  profile_photo: string | null;
}

export interface Blog {
  id?: string;
  admin?: BlogAdmin;
  title: string;
  category: string;
  message: string;
  image: string;
  date_created?: string;
  date_updated?: string;
}
