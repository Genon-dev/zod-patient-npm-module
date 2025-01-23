import { z } from 'zod';

export const BeautyProductScalarFieldEnumSchema = z.enum(['id','name','price','thumbnailPath','isActive','createdAt','updatedAt']);

export default BeautyProductScalarFieldEnumSchema;
