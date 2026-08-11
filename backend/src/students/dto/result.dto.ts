import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { letter_grade_enum } from 'src/db/schema';

export type LetterGrade = (typeof letter_grade_enum)['enumValues'][number];

export class ResultDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  grade?: string;

  @IsOptional()
  @IsIn(letter_grade_enum.enumValues)
  letter_grade?: LetterGrade;
}