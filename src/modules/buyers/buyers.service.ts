import { Injectable } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';

@Injectable()
export class BuyersService {
  private buyers = [];

  create(createBuyerDto: CreateBuyerDto) {
    const buyer = {
      id: this.buyers.length,
      ...createBuyerDto,
    };
    this.buyers.push(buyer);

    return buyer;
  }
}
