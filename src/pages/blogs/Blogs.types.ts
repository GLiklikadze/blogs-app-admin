export type blogsData = {
  created_at: string;
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
};

export type BlogsCreateUpdateFormProps = {
  singleBlogData?: blogsData;
  handleSubmit: (values: {
    description_en: string | null;
    description_ka: string | null;

    title_en: string | null;
    title_ka: string | null;
  }) => void;
  error: Error | null;
  isError: boolean;
  isSuccess: boolean;
};

export type writeBlogFormValues = {
  description_en: string | null;
  description_ka: string | null;
  title_en: string | null;
  title_ka: string | null;
  // image_url: null | File;
};
