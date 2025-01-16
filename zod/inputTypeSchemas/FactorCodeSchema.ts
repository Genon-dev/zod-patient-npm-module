import { z } from 'zod';

export const FactorCodeSchema = z.enum(['FOOD','EXERCISE_SWEAT','CLOTHING_MASK','COSMETICS_DETERGENTS','SLEEP','MEDICATION','STRESS','PETS_ANIMALS','DUST_MITES_HOUSE_DUST','OTHER']);

export type FactorCodeType = `${z.infer<typeof FactorCodeSchema>}`

export default FactorCodeSchema;
