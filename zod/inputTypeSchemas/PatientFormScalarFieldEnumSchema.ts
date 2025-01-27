import { z } from 'zod';

export const PatientFormScalarFieldEnumSchema = z.enum(['id','patientId','reservationId','beautyProductBuyScheduleId','type','createdAt']);

export default PatientFormScalarFieldEnumSchema;
