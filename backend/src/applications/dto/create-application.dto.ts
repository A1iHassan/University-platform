import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import { blood_type_enum, status_enum } from 'src/db/schema';

export type BloodType = (typeof blood_type_enum)['enumValues'][number];
export type StatusType = (typeof status_enum)['enumValues'][number];

export class CreateApplicationDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

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
  @IsInt()
  national_id?: number;

  @IsOptional()
  @IsString()
  year?: string;

  @IsString()
  @IsOptional()
  @IsIn(status_enum.enumValues)
  status: StatusType;
}
