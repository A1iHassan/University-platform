import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCurriculumDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  year?: string;
}