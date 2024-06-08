import { Module } from '@nestjs/common';
import { ItemsModule } from './modules/items/items.module';
import { BuyersModule } from './modules/buyers/buyers.module';
import { BidsModule } from './modules/bids/bids.module';

@Module({
  imports: [ItemsModule, BuyersModule, BidsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
