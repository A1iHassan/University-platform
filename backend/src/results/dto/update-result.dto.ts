import { IsIn, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { letter_grade_enum } from 'src/db/schema';
import type { LetterGrade } from './create-result.dto';

export class UpdateResultDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  grade?: string;

  @IsOptional()
  @IsIn(letter_grade_enum.enumValues)
  letter_grade?: LetterGrade;
}