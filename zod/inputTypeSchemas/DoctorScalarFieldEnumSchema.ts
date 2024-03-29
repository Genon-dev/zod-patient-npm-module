import { z } from 'zod';

export const DoctorScalarFieldEnumSchema = z.enum(['id','firstName','lastName','email','emailVerified','hashedPassword','createdAt','updatedAt']);

export default DoctorScalarFieldEnumSchema;
