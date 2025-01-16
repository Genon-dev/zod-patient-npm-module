import { z } from 'zod';

export const TreatmentScalarFieldEnumSchema = z.enum(['id','reservationId','patientId','nextRecommendOption','nextRecommendAt','previousTreatmentId','proactiveInflammationStage','createdAt','updatedAt']);

export default TreatmentScalarFieldEnumSchema;
