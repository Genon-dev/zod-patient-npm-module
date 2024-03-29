import { z } from 'zod';

export const HokenshouScalarFieldEnumSchema = z.enum(['id','frontURL','backURL','userId','createdAt','updatedAt']);

export default HokenshouScalarFieldEnumSchema;
