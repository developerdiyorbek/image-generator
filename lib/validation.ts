import * as Yup from "yup";

export const formValidation = Yup.object({
  title: Yup.string().min(2).required("title is required"),
});
