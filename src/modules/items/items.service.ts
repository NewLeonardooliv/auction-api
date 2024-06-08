import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  private items = [];

  create(createItemDto: CreateItemDto) {
    this.items.push(createItemDto);
    return createItemDto;
  }

  findAll() {
    return this.items;
  }
}
