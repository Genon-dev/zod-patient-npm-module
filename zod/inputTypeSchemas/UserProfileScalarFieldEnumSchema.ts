import { z } from 'zod';

export const UserProfileScalarFieldEnumSchema = z.enum(['id','userId','firstName','lastName','firstNameKana','lastNameKana','year','month','day','gender','postcode','prefecture','city','buildingName','hokenshouRegisteredDate','createdAt','updatedAt']);

export default UserProfileScalarFieldEnumSchema;
