import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private prismaServce: PrismaService) {}

  create(createCarDto: Prisma.CarUncheckedCreateInput) {
    return this.prismaServce.car.create({
      data: createCarDto,
    });
  }

  findAll() {
    return this.prismaServce.car.findMany();
  }

  findOne(id: string) {
    return this.prismaServce.car.findFirst({
      where: { id: id },
    });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
