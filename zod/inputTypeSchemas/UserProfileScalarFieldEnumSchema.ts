import { z } from 'zod';

export const UserProfileScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'email',
  'lineName',
  'firstName',
  'lastName',
  'firstNameKana',
  'lastNameKana',
  'year',
  'month',
  'day',
  'gender',
  'postcode',
  'prefecture',
  'city',
  'buildingName',
  'createdAt',
  'updatedAt',
]);

export default UserProfileScalarFieldEnumSchema;
