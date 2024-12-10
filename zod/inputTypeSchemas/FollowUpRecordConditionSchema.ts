import { z } from 'zod';

export const FollowUpRecordConditionSchema = z.enum(['Good','Same','Worse']);

export type FollowUpRecordConditionType = `${z.infer<typeof FollowUpRecordConditionSchema>}`

export default FollowUpRecordConditionSchema;
