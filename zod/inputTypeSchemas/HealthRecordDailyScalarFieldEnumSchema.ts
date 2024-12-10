import { z } from 'zod';

export const HealthRecordDailyScalarFieldEnumSchema = z.enum(['id','date','userId','createdAt','updatedAt','deletedAt','skinPain']);

export default HealthRecordDailyScalarFieldEnumSchema;
