import { z } from 'zod';

export const AffectedAreaScalarFieldEnumSchema = z.enum(['id','name','code','order','createdAt','updatedAt','deletedAt']);

export default AffectedAreaScalarFieldEnumSchema;
