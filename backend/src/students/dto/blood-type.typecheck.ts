import type { BloodType } from '../dto/create-student.dto';

const valid: BloodType = 'A-';

// @ts-expect-error 'Z' is not a blood type
const invalid: BloodType = 'Z';