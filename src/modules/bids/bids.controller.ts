import { Controller, Post, Body } from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('bids')
@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post()
  @ApiOperation({ summary: 'Efetuar um lance' })
  @ApiResponse({ status: 201, description: 'O lance foi criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createBidDto: CreateBidDto) {
    return this.bidsService.create(createBidDto);
  }
}
