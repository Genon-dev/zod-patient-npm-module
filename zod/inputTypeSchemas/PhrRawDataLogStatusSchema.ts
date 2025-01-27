import { z } from 'zod';

export const PhrRawDataLogStatusSchema = z.enum(['Ready','InProgress','Successed','Failed']);

export type PhrRawDataLogStatusType = `${z.infer<typeof PhrRawDataLogStatusSchema>}`

export default PhrRawDataLogStatusSchema;
