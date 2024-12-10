import { z } from 'zod';

export const AffectedAreaCodeSchema = z.enum(['HANDS','ARMS','LEGS','NECK','BACK','HEAD','FACE_EARS','ABDOMEN','CHEST','GENITALS_DELICATE_ZONE','BODY','FACE','EARS']);

export type AffectedAreaCodeType = `${z.infer<typeof AffectedAreaCodeSchema>}`

export default AffectedAreaCodeSchema;
