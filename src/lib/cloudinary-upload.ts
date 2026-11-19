import cloudinary from "@/lib/cloudinary";

export type BlogUploadType = "covers" | "content" | "thumbnails";

export interface UploadImageOptions {
  type?: BlogUploadType;
  publicId?: string;
  width?: number;
  height?: number;
}

export const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export async function uploadImageBuffer(
  buffer: Buffer,
  options: UploadImageOptions = {}
) {
  const type = options.type || "covers";
  const folder = `the-language-landscape/blogs/${type}`;

  return new Promise<{
    url: string;
    publicId: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
  }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: options.publicId,
        resource_type: "image",
        transformation: [
          {
            quality: "auto",
            fetch_format: "auto",
          },
        ],
      },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Cloudinary upload failed"));
        }
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        });
      }
    );

    uploadStream.end(buffer);
  });
}

export async function deleteImage(publicId: string): Promise<boolean> {
  if (!publicId || typeof publicId !== "string") {
    return false;
  }

  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
    });
    return result.result === "ok";
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return false;
  }
}
