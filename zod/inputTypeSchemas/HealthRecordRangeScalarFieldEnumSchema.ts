import { z } from 'zod';

export const HealthRecordRangeScalarFieldEnumSchema = z.enum(['id','startAt','endAt','userId','createdAt','updatedAt','deletedAt']);

export default HealthRecordRangeScalarFieldEnumSchema;
