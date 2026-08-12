import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import { blood_type_enum } from 'src/db/schema';
import type { BloodType } from './create-student.dto';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsIn(blood_type_enum.enumValues)
  blood_type?: BloodType;

  @IsOptional()
  @IsString()
  school_degree?: string;

  @IsOptional()
  @IsString()
  certificate?: string;

  @IsOptional()
  @IsString()
  national_id?: string;

  @IsOptional()
  @IsString()
  year?: string;
}