import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','lineId','reservaUid','profileImage','phoneNo','isProfileCreated','isHokenshouRegistered','isMobileVerified','hasPaymentMethod','gmoPgMemberId','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
