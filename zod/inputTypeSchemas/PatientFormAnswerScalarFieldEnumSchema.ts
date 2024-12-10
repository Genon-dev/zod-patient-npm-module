import { z } from 'zod';

export const PatientFormAnswerScalarFieldEnumSchema = z.enum(['id','patientFormId','question','answer','inputType','key','choices','order','createdAt']);

export default PatientFormAnswerScalarFieldEnumSchema;
