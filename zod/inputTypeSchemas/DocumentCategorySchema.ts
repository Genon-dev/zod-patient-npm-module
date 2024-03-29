import { z } from 'zod';

export const DocumentCategorySchema = z.enum(['PublicExpenseCertificate','MedicalCertificate','TestResults','Other']);

export type DocumentCategoryType = `${z.infer<typeof DocumentCategorySchema>}`

export default DocumentCategorySchema;
