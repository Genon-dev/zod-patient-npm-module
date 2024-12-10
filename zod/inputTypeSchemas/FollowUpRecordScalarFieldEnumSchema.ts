import { z } from 'zod';

export const FollowUpRecordScalarFieldEnumSchema = z.enum(['id','treatmentId','patientId','condition','createdAt','updatedAt']);

export default FollowUpRecordScalarFieldEnumSchema;
