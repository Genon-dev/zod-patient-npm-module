import { z } from 'zod';

export const MedicalReportScalarFieldEnumSchema = z.enum(['id','fileUrl','createdAt','updatedAt','reservationId']);

export default MedicalReportScalarFieldEnumSchema;
