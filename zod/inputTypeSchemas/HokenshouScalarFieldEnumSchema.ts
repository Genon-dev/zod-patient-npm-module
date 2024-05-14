import { z } from 'zod';

export const HokenshouScalarFieldEnumSchema = z.enum(['id','frontPath','backPath','userId','createdAt','updatedAt']);

export default HokenshouScalarFieldEnumSchema;
