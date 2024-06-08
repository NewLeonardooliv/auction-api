import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateBidDto } from './dto/create-bid.dto';

@Injectable()
export class BidsService {
  private bids = [];
  private items = []; // This should be replaced with actual item fetching logic

  create(createBidDto: CreateBidDto) {
    const item = this.items.find((i) => i.id === createBidDto.item_id);

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
