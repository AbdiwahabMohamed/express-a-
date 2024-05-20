import { db } from "../../config/db";
import { LoginUserDto, RegisterUserDto } from "../utils/dtos";
import { registerSchema } from "../utils/validationSchema";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const body: RegisterUserDto = req.body;
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return res.json({ message: validation.error.errors[0].message });
    }
    const user = await db.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (user) {
      return res.json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(body.password, salt);
    const newUser = await db.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: passwordHash,
        bio: body.bio,
        jobTitle: body.jobTitle,
        gender: body.gender,
        address: body.address,
        profilePhoto: body.profilePhoto,
      },
    });
    return res.json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const body: LoginUserDto = req.body;
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return res.json({ message: validation.error.errors[0].message });
    }
    const user = await db.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      return res.json({ message: "User already exists" });
    }
    const isPasswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPasswordMatch) {
      return res.json({ message: "invalid email or password" });
    }
    return res.json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
  }
};
