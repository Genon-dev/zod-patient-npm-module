import { z } from 'zod';

export const PatientOperationHistoryScalarFieldEnumSchema = z.enum(['id','patientId','content','type','extra','createdAt']);

export default PatientOperationHistoryScalarFieldEnumSchema;
