import { z } from 'zod';

export const SymptomScalarFieldEnumSchema = z.enum(['id','name','code','order','createdAt','updatedAt','deletedAt']);

export default SymptomScalarFieldEnumSchema;
