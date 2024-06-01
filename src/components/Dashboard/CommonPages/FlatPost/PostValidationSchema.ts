import { z } from "zod";

export const postFlatValidationSchema = z.object({
  location: z.string({ message: "Location is required" }),
  rentAmount: z.number().positive({ message: "Rent amount must be positive" }),
  bedrooms: z
    .number()
    .min(1, "Bedrooms must be at least 1")
    .max(20, "Maximum 20 bedrooms"),
  amenities: z.array(z.string()).optional(),
  description: z.string({ message: "Description is required" }),
  photos: z.array(z.string().url({ message: "Invalid photo URL" })),
});
