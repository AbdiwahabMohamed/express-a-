export interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
  bio: string;
  jobTitle: string;
  gender: string;
  profilePhoto: string;
  address: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}
