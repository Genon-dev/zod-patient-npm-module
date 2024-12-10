import { z } from 'zod';

export const FactorScalarFieldEnumSchema = z.enum(['id','name','code','order','createdAt','updatedAt','deletedAt']);

export default FactorScalarFieldEnumSchema;
