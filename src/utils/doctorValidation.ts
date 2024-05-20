import { z } from "zod";

// Create a new doctor
export const createDoctorSchema = z.object({
  speciality: z
    .string({
      required_error: "speciality is required",
      invalid_type_error: "speciality should be of type string",
    })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(20, { message: "title should be less than 200 characters" }),
  bio: z
    .string({
      required_error: "bio is required",
      invalid_type_error: "bio should be of type string",
    })
    .min(3)
    .max(200),
  jobTitle: z.string().min(6),
  phone: z.string().min(7),
});
