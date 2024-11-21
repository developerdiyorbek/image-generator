import Image from "next/image";
import { Button } from "../ui/button";
import { ImageDown } from "lucide-react";
import { saveAs } from "file-saver";

function ImageComponent({ imageUrl }: { imageUrl: string }) {
  const handleDownload = () => {
    saveAs(imageUrl, "generated_image.jpg");
  };

  return (
    <div className="relative size-[420px] max-md:size-[300px] mt-4 mx-auto">
      <Image src={imageUrl} alt="Generated Image" fill className="rounded" />
      <Button className="absolute bottom-0 right-0" onClick={handleDownload}>
        <ImageDown />
      </Button>
    </div>
  );
}

export default ImageComponent;
