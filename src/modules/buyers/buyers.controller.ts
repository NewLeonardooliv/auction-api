import { Controller, Post, Body } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('buyers')
@Controller('buyers')
export class BuyersController {
  constructor(private readonly buyersService: BuyersService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar novo comprador' })
  @ApiResponse({
    status: 201,
    description: 'O comprador foi criado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createBuyerDto: CreateBuyerDto) {
    return this.buyersService.create(createBuyerDto);
  }
}
