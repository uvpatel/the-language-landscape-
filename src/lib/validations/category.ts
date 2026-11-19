import { z } from "zod";

export const CreateCategorySchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(100),
  slug: z.string().optional(),
  subtitle: z.string().max(150).optional().default(""),
  description: z.string().max(500).optional().default(""),
  accentColor: z.string().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, "Must be a valid hex color code").default("#B32526"),
});

export const UpdateCategorySchema = CreateCategorySchema.partial();

export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof UpdateCategorySchema>;
