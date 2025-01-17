import { z } from 'zod';

export const LineNotificationScalarFieldEnumSchema = z.enum(['id','lineId','type','status','message','toId','by','sentAt','createdAt','extra']);

export default LineNotificationScalarFieldEnumSchema;
