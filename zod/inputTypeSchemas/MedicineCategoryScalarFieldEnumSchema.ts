import { z } from 'zod';

export const MedicineCategoryScalarFieldEnumSchema = z.enum(['id','name','code','order','createdAt','updatedAt','deletedAt']);

export default MedicineCategoryScalarFieldEnumSchema;
