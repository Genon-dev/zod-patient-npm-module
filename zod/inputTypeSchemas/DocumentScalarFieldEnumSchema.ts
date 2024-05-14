import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','filePath','userId','category','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
