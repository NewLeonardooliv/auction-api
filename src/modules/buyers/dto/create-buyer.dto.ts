import { ApiProperty } from '@nestjs/swagger';

export class CreateBuyerDto {
  @ApiProperty({ description: 'Nome do comprador' })
  name: string;

  @ApiProperty({ description: 'Email do comprador' })
  email: string;
}
