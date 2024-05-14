import { z } from 'zod';

export const MedicalReportScalarFieldEnumSchema = z.enum(['id','filePath','fileName','createdAt','updatedAt','reservationId']);

export default MedicalReportScalarFieldEnumSchema;
