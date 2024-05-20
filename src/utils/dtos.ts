import { Decimal } from "@prisma/client/runtime/library";

export interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
  gender: string;
  address: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface Doctordto {
  speciality: string;
  bio: string;
  jobTitle: string;
  profilePhoto: string;
  phone: string;
  ticketPrice: Decimal;
  certificate: string;
}
