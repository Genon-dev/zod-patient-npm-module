import { z } from 'zod';

export const PatientFormTypeSchema = z.enum(['FirstVisit','FirstVisitAddition','FollowUpWithinSixMonth','FollowUpOverSixMonth']);

export type PatientFormTypeType = `${z.infer<typeof PatientFormTypeSchema>}`

export default PatientFormTypeSchema;
