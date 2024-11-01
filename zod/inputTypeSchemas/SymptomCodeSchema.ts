import { z } from 'zod';

export const SymptomCodeSchema = z.enum(['ROUGH_DRY','SWELLING','REDNESS','BUMPS','BLISTERS','CRACKING_BLEEDING','OOZING_FLUID','OTHER']);

export type SymptomCodeType = `${z.infer<typeof SymptomCodeSchema>}`

export default SymptomCodeSchema;
