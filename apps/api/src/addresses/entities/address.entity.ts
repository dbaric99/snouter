import { ApiProperty } from '@nestjs/swagger';
import { Address } from '@prisma/client';

export class AddressEntity implements Address {
  @ApiProperty()
  id: number;

  @ApiProperty()
  street: string;

  @ApiProperty()
  streetNumber: number;

  @ApiProperty()
  cityId: number;
}
