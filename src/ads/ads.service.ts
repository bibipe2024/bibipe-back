import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdsService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.adContent.findMany();
  }
}
