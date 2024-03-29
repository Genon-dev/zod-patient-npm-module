import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','fileUrl','userId','category','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
