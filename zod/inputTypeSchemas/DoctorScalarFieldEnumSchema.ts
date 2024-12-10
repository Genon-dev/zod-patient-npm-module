import { z } from 'zod';

export const DoctorScalarFieldEnumSchema = z.enum(['id','lineId','firstName','lastName','email','emailVerified','hashedPassword','createdAt','updatedAt']);

export default DoctorScalarFieldEnumSchema;
