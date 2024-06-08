import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateBidDto } from './dto/create-bid.dto';
import { ItemsService } from '../items/items.service';

@Injectable()
export class BidsService {
  private bids = [];

  constructor(private readonly itemsService: ItemsService) {}

  create(createBidDto: CreateBidDto) {
    const item = this.itemsService.find(createBidDto.item_id);

    if (!item) {
      throw new BadRequestException('Item not found');
    }

    const highestBid = this.bids
      .filter((bid) => bid.item_id === createBidDto.item_id)
      .sort((a, b) => b.bid_amount - a.bid_amount)[0];

    if (highestBid && createBidDto.bid_amount <= highestBid.bid_amount) {
      throw new BadRequestException(
        'Bid amount must be higher than the current highest bid',
      );
    }

    this.bids.push(createBidDto);
    return createBidDto;
  }
}
