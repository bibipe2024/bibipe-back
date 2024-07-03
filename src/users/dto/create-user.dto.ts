import { Prisma, Role } from '@prisma/client';

export class CreateUserDto {
  email: string;
  name: string;
  role: Role;
  cars: Prisma.CarCreateNestedManyWithoutUserInput;
}
