import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar novo item de leilão' })
  @ApiResponse({ status: 201, description: 'O item foi criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens de leilão' })
  @ApiResponse({
    status: 200,
    description: 'Lista de itens retornada com sucesso.',
  })
  findAll() {
    return this.itemsService.findAll();
  }
}
