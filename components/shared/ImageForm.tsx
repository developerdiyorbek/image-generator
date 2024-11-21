"use client";

import { formValidation } from "@/lib/validation";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import ImageComponent from "./ImageComponent";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";

function ImageForm() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (values: { title: string }) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://image.pollinations.ai/prompt/${values.title}`,
        { responseType: "arraybuffer" }
      );
      const blob = new Blob([data], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ title: "" }}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-y-3">
            <div>
              <Field
                name="title"
                type="text"
                as={Textarea}
                placeholder="Describe image clearly"
              />
              <ErrorMessage
                name={"title"}
                component="span"
                className="mt-1 block text-red-400 max-md:text-[12px] absolute -bottom-[26px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="md:max-w-[150px] w-full md:ml-auto md:block text-center"
              aria-label="Submit login form"
            >
              {loading && <Loader2 className="animate-spin" />}
              {!loading && <span>Submit</span>}
            </Button>
          </Form>
        )}
      </Formik>

      {imageUrl && !loading && <ImageComponent imageUrl={imageUrl} />}
    </div>
  );
}

export default ImageForm;
