import { z } from 'zod';

export const PatientFormScalarFieldEnumSchema = z.enum(['id','patientId','reservationId','type','createdAt']);

export default PatientFormScalarFieldEnumSchema;
