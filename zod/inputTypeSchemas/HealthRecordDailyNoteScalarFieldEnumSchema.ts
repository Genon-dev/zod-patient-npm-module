import { z } from 'zod';

export const HealthRecordDailyNoteScalarFieldEnumSchema = z.enum(['id','text','healthRecordDailyId','factorId','createdAt','updatedAt','deletedAt']);

export default HealthRecordDailyNoteScalarFieldEnumSchema;
