import { Injectable } from '@nestjs/common';

import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(email: string) {
    return this.prismaService.user.findFirst({
      where: { email },
    });
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { email },
      data: updateUserDto,
    });
  }

  remove(email: string) {
    return this.prismaService.user.delete({
      where: { email },
    });
  }
}
