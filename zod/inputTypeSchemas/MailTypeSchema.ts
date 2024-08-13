import { z } from 'zod';

export const MailTypeSchema = z.enum(['RegularMail','LetterPack','NoDelivery']);

export type MailTypeType = `${z.infer<typeof MailTypeSchema>}`

export default MailTypeSchema;
