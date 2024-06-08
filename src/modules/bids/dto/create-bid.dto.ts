import { ApiProperty } from '@nestjs/swagger';

export class CreateBidDto {
  @ApiProperty({ description: 'ID do item' })
  item_id: number;

  @ApiProperty({ description: 'ID do comprador' })
  buyer_id: number;

  @ApiProperty({ description: 'Valor do lance' })
  bid_amount: number;
}
