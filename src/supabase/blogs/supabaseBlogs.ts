import { supabase } from "../supabaseClient";

export const getBlogs = async () => {
  try {
    const { data } = await supabase.from("blogs").select("*").throwOnError();
    return data;
  } catch (err) {
    console.error("Error during get blogs data:", err);
    throw err;
  }
};
export const getSingleBlog = async (id: string) => {
  try {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single()
      .throwOnError();

    return data;
  } catch (err) {
    console.error("Error during single blog data:", err);
    throw err;
  }
};
export type writeBlogFormValues = {
  title_ka: string | null;
  title_en: string | null;
  description_ka: string | null;
  description_en: string | null;
  // image_url: null | File;
};

export const updateBlog = async ({
  formValues,
  blogId,
}: {
  formValues: writeBlogFormValues;
  blogId: string;
}) => {
  console.log("Updating blog with ID:", blogId);
  try {
    const { data, error } = await supabase
      .from("blogs")
      .update({
        title_ka: formValues.title_ka,
        title_en: formValues.title_en,
        description_en: formValues.description_en,
        description_ka: formValues.description_ka,
        // image_url: formValues.image_url,
      })
      .eq("id", blogId);

    if (error) {
      throw new Error(`Blog update failed: ${error.message}`);
    }

    console.log("Updated blog:", data);
    return data;
  } catch (err) {
    console.error("Error during update blog:", err);
    throw err;
  }
};

export const postBlogs = async ({
  formValues,
  id,
}: {
  formValues: writeBlogFormValues;
  id: string;
}) => {
  console.log(formValues);
  try {
    // const imageRes = await supabase.storage
    //   .from("blog_images")
    //   .upload(
    //     formValues.image_url?.name as string,
    //     formValues?.image_url as File
    //   );

    // if (imageRes.error) {
    //   throw new Error(`Image upload failed: ${imageRes.error.message}`);
    // }

    const { data, error } = await supabase.from("blogs").insert({
      title_ka: formValues.title_ka,
      title_en: formValues.title_en,
      description_en: formValues.description_en,
      description_ka: formValues.description_ka,
      // image_url: imageRes.data?.fullPath,
      user_id: id,
    });

    if (error) {
      throw new Error(`Blog insertion failed: ${error.message}`);
    }
    console.log("Created blog", data);
  } catch (err) {
    console.error("Error during post blog:", err);
    throw err;
  }
};
