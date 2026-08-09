import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCurriculumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  year: string;
}