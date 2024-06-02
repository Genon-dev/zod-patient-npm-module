import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','filePath','userId','title','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
