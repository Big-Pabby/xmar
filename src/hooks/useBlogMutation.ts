import { useMutation } from "react-query";
import { create_blog, file_upload } from "@/services/apiService";
import { Blog } from "@/types/blog";

export const useBlogMutation = () => {
  const uploadMutation = useMutation({
    mutationFn: (file: FormData) => file_upload(file),
  });

  const blogMutation = useMutation({
    mutationFn: (blog: Blog) => create_blog(blog),
  });

  return {
    uploadMutation,
    blogMutation,
  };
};
