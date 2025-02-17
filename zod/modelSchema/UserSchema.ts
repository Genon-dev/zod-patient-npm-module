import { z } from 'zod';
import type { UserProfileWithRelations } from './UserProfileSchema'
import type { HokenshouWithRelations } from './HokenshouSchema'
import type { DocumentWithRelations } from './DocumentSchema'
import type { ReservationWithRelations } from './ReservationSchema'
import type { HealthRecordRangeWithRelations } from './HealthRecordRangeSchema'
import type { HealthRecordDailyWithRelations } from './HealthRecordDailySchema'
import type { UserMedicineWithRelations } from './UserMedicineSchema'
import type { PatientFormWithRelations } from './PatientFormSchema'
import type { PatientOperationHistoryWithRelations } from './PatientOperationHistorySchema'
import type { TreatmentWithRelations } from './TreatmentSchema'
import type { FollowUpRecordWithRelations } from './FollowUpRecordSchema'
import type { LineNotificationWithRelations } from './LineNotificationSchema'
import type { PhrRawDataLogWithRelations } from './PhrRawDataLogSchema'
import { UserProfileWithRelationsSchema } from './UserProfileSchema'
import { HokenshouWithRelationsSchema } from './HokenshouSchema'
import { DocumentWithRelationsSchema } from './DocumentSchema'
import { ReservationWithRelationsSchema } from './ReservationSchema'
import { HealthRecordRangeWithRelationsSchema } from './HealthRecordRangeSchema'
import { HealthRecordDailyWithRelationsSchema } from './HealthRecordDailySchema'
import { UserMedicineWithRelationsSchema } from './UserMedicineSchema'
import { PatientFormWithRelationsSchema } from './PatientFormSchema'
import { PatientOperationHistoryWithRelationsSchema } from './PatientOperationHistorySchema'
import { TreatmentWithRelationsSchema } from './TreatmentSchema'
import { FollowUpRecordWithRelationsSchema } from './FollowUpRecordSchema'
import { LineNotificationWithRelationsSchema } from './LineNotificationSchema'
import { PhrRawDataLogWithRelationsSchema } from './PhrRawDataLogSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  lineId: z.string().nullable(),
  profileImage: z.string().nullable(),
  phoneNo: z.string(),
  isProfileCreated: z.boolean(),
  isHokenshouRegistered: z.boolean(),
  isMobileVerified: z.boolean(),
  hasPaymentMethod: z.boolean(),
  gmoPgMemberId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  userProfile?: UserProfileWithRelations | null;
  hokenshous: HokenshouWithRelations[];
  documents: DocumentWithRelations[];
  reservations: ReservationWithRelations[];
  healthRecordRanges: HealthRecordRangeWithRelations[];
  healthRecordDailys: HealthRecordDailyWithRelations[];
  userMedicines: UserMedicineWithRelations[];
  patientForms: PatientFormWithRelations[];
  patientOperationHistories: PatientOperationHistoryWithRelations[];
  treatments: TreatmentWithRelations[];
  followUpRecords: FollowUpRecordWithRelations[];
  lineNotifications: LineNotificationWithRelations[];
  phrRawDataLogs: PhrRawDataLogWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  userProfile: z.lazy(() => UserProfileWithRelationsSchema).nullable(),
  hokenshous: z.lazy(() => HokenshouWithRelationsSchema).array(),
  documents: z.lazy(() => DocumentWithRelationsSchema).array(),
  reservations: z.lazy(() => ReservationWithRelationsSchema).array(),
  healthRecordRanges: z.lazy(() => HealthRecordRangeWithRelationsSchema).array(),
  healthRecordDailys: z.lazy(() => HealthRecordDailyWithRelationsSchema).array(),
  userMedicines: z.lazy(() => UserMedicineWithRelationsSchema).array(),
  patientForms: z.lazy(() => PatientFormWithRelationsSchema).array(),
  patientOperationHistories: z.lazy(() => PatientOperationHistoryWithRelationsSchema).array(),
  treatments: z.lazy(() => TreatmentWithRelationsSchema).array(),
  followUpRecords: z.lazy(() => FollowUpRecordWithRelationsSchema).array(),
  lineNotifications: z.lazy(() => LineNotificationWithRelationsSchema).array(),
  phrRawDataLogs: z.lazy(() => PhrRawDataLogWithRelationsSchema).array(),
}))

export default UserSchema;
