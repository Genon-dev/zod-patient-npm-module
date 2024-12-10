import { z } from 'zod';

export const MedicineFrequencyCodeSchema = z.enum(['None','OneToTwoDays','ThreeToFourDays','FiveToSixDays','EverydayOne','EverydayTwo','EverydayThreeOrMore','Worse']);

export type MedicineFrequencyCodeType = `${z.infer<typeof MedicineFrequencyCodeSchema>}`

export default MedicineFrequencyCodeSchema;
