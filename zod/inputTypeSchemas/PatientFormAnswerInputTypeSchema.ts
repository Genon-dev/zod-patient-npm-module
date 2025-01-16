import { z } from 'zod';

export const PatientFormAnswerInputTypeSchema = z.enum(['Textarea','Check','Radio','File']);

export type PatientFormAnswerInputTypeType = `${z.infer<typeof PatientFormAnswerInputTypeSchema>}`

export default PatientFormAnswerInputTypeSchema;
