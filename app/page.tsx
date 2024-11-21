import ImageForm from "@/components/shared/ImageForm";

function Page() {
  return (
    <section className="container mx-auto max-md:px-5">
      <h1 className="text-gray-600 text-5xl my-10 max-md:text-3xl text-center font-bold">
        Image generator
      </h1>
      <ImageForm />
    </section>
  );
}

export default Page;
