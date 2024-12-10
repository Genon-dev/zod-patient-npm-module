import { z } from 'zod';

export const NextRecommendedOptionSchema = z.enum(['TwoWeeksLater','OneMonthLater']);

export type NextRecommendedOptionType = `${z.infer<typeof NextRecommendedOptionSchema>}`

export default NextRecommendedOptionSchema;
