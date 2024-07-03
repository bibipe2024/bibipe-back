import { CarDetail } from '@prisma/client';

export class CreateCarDto {
  carDetail: CarDetail;
  images: string;
  carReservation: string;
  user: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  carReservationId: string;
}
