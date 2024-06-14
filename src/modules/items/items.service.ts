import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  private items = [];

  create(createItemDto: CreateItemDto) {
    const item = {
      id: this.items.length + 1,
      ...createItemDto,
    };
    this.items.push(item);

    return item;
  }

  findAll() {
    return this.items;
  }

  find(id: number) {
    return this.items.find((i) => i.id === id);
  }
}
