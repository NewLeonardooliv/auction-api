import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ description: 'Descrição detalhada do item' })
  description: string;

  @ApiProperty({ description: 'Valor inicial do lance' })
  initial_bid: number;

  @ApiProperty({ description: 'Tempo de duração do leilão' })
  auction_time: Date;
}
