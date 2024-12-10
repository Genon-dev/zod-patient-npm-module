import { z } from 'zod';

export const PatientOperationHistoryTypeSchema = z.enum(['HEALTH_RECORD_SAVE','PATIENT_FORM_SAVE']);

export type PatientOperationHistoryTypeType = `${z.infer<typeof PatientOperationHistoryTypeSchema>}`

export default PatientOperationHistoryTypeSchema;
