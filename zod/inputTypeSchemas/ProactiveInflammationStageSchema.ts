import { z } from 'zod';

export const ProactiveInflammationStageSchema = z.enum(['First','Second','Third']);

export type ProactiveInflammationStageType = `${z.infer<typeof ProactiveInflammationStageSchema>}`

export default ProactiveInflammationStageSchema;
