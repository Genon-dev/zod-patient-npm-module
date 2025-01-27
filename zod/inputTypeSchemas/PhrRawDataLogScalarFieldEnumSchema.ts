import { z } from 'zod';

export const PhrRawDataLogScalarFieldEnumSchema = z.enum(['id','patientId','adminUserId','outputFilePath','outputFileSize','status','startDate','endDate','errorMessage','createdAt','updatedAt']);

export default PhrRawDataLogScalarFieldEnumSchema;
