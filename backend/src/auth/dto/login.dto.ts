import { IsNotEmpty, IsString, Matches } from 'class-validator'

export class loginDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'uni_number must be numeric' })
  uni_number: string

  @IsString()
  @IsNotEmpty()
  @Matches(/^\S+$/, { message: 'password must not contain spaces' })
  password: string
}
