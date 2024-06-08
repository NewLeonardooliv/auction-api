import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  private items = [];

  create(createItemDto: CreateItemDto) {
    this.items.push({
      id: this.items.length + 1,
      ...createItemDto,
    });

    return createItemDto;
  }

  findAll() {
    return this.items;
  }

  find(id: number) {
    return this.items.find((i) => i.id === id);
  }
}
