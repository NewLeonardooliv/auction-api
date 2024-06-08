import { Module } from '@nestjs/common';
import { BidsController } from './bids.controller';
import { BidsService } from './bids.service';
import { ItemsService } from '../items/items.service';

@Module({
  controllers: [BidsController],
  providers: [BidsService, ItemsService],
})
export class BidsModule {}
