import { z } from 'zod';

export const HealthRecordRangeUserMedicineFrequencySchema = z.enum(['NONE','ONE_TO_TWO_DAYS','THREE_TO_FOUR_DAYS','FIVE_TO_SIX_DAYS','EVERYDAY_ONE','EVERYDAY_TWO','EVERYDAY_THREE_OR_MORE']);

export type HealthRecordRangeUserMedicineFrequencyType = `${z.infer<typeof HealthRecordRangeUserMedicineFrequencySchema>}`

export default HealthRecordRangeUserMedicineFrequencySchema;
