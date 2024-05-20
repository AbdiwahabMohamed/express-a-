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
