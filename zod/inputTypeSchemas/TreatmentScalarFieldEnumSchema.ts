import { z } from 'zod';

export const TreatmentScalarFieldEnumSchema = z.enum(['id','reservationId','nextRecommendOption','nextRecommendAt','previousTreatmentId','proactiveInflammationStage','createdAt','updatedAt']);

export default TreatmentScalarFieldEnumSchema;
