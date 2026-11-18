
import cloudinary from "@/lib/cloudinary";

interface UploadImageOptions {
  folder?: string;
  publicId?: string;
}

export async function uploadImage(
  file: string,
  options: UploadImageOptions = {}
) {
  const result = await cloudinary.uploader.upload(file, {
    folder: options.folder || "the-language-landscape/blogs",
    public_id: options.publicId,
    resource_type: "image",
    transformation: [
      {
        quality: "auto",
        fetch_format: "auto",
      },
    ],
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    format: result.format,
    bytes: result.bytes,
  };
}
