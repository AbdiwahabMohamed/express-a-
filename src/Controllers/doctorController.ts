import { db } from "../../config/db";
import { createDoctorSchema } from "../utils/doctorValidation";
import { Doctordto } from "../utils/dtos";

const creaeDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const body: Doctordto = req.body;
    const validation = createDoctorSchema.safeParse(body);
    if (!validation.success) {
      return res.json({ message: validation.error.errors[0].message });
    }

    const doctor = await db.doctor.findUnique({
      where: {
        id: id,
      },
    });
    if (!doctor) {
      return res.json({ message: "Doctor not found" });
    }

    const newDoctor = await db.doctor.create({
      data: {
        speciality: body.speciality,
        bio: body.bio,
        jobTitle: body.jobTitle,
        phone: body.phone,
        profilePhoto: body.profilePhoto,
        ticketPrice: body.ticketPrice,
        certificate: body.certificate,
      },
    });
    return res.json({
      message: "Doctor successfully registered",
    });
  } catch (error) {
    console.log(error);
  }
};
