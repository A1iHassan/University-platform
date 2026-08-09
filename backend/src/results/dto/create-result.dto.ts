import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { letter_grade_enum } from 'src/db/schema';

export type LetterGrade = (typeof letter_grade_enum)['enumValues'][number];

export class CreateResultDto {
  @IsInt()
  student_id: number;

  @IsInt()
  curriculum_id: number;

  @IsString()
  @IsNotEmpty()
  grade: string;

  @IsOptional()
  @IsIn(letter_grade_enum.enumValues)
  letter_grade?: LetterGrade;
}