import { z } from 'zod';

export const DlqiScalarFieldEnumSchema = z.enum(['id','question','choicesPoint','order','createdAt']);

export default DlqiScalarFieldEnumSchema;
