import { z } from 'zod';

export const MedicineCategoryCodeSchema = z.enum(['TOPICAL_MEDICINE','ORAL_MEDICINE','MOISTURIZER','INJECTION','OTHER']);

export type MedicineCategoryCodeType = `${z.infer<typeof MedicineCategoryCodeSchema>}`

export default MedicineCategoryCodeSchema;
