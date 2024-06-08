import { Injectable } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';

@Injectable()
export class BuyersService {
  private buyers = [];

  create(createBuyerDto: CreateBuyerDto) {
    this.buyers.push(createBuyerDto);
    return createBuyerDto;
  }
}
