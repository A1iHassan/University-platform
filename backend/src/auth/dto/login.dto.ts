import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class loginDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'username must be numeric' })
  username: string;
  @IsString()
  @IsNotEmpty()
  @Matches(/^\S+$/, { message: 'password must not contain spaces' })
  password: string;
}
