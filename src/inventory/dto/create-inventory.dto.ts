import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
  @ApiProperty()
  cheeseType: string;

  @ApiProperty()
  stock: number;
}
