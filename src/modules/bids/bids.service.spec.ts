import { Test, TestingModule } from '@nestjs/testing';
import { BidsService } from './bids.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { ItemsService } from '../items/items.service';
import { CreateItemDto } from '../items/dto/create-item.dto';

describe('BidsService', () => {
  let service: BidsService;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BidsService, ItemsService],
    }).compile();

    itemsService = module.get<ItemsService>(ItemsService);
    service = module.get<BidsService>(BidsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should add a bid to the bids array', async () => {
      const createItemDto: CreateItemDto = {
        description: 'Item 1',
        initial_bid: 100,
        auction_time: new Date(),
      };
      itemsService.create(createItemDto);

      const createBidDto: CreateBidDto = {
        item_id: 1,
        buyer_id: 1,
        bid_amount: 100,
      };
      const result = service.create(createBidDto);

      expect(result).toEqual(createBidDto);
      expect(service['bids']).toContain(createBidDto);
    });

    it('should throw an error if the bid amount is not higher than the current highest bid', async () => {
      const createItemDto: CreateItemDto = {
        description: 'Item 1',
        initial_bid: 100,
        auction_time: new Date(),
      };
      itemsService.create(createItemDto);

      service['bids'] = [{ item_id: 1, buyer_id: 2, bid_amount: 150 }];
      const createBidDto: CreateBidDto = {
        item_id: 1,
        buyer_id: 1,
        bid_amount: 100,
      };

      await expect(service.create(createBidDto)).rejects.toThrow(
        'Bid amount must be higher than the current highest bid',
      );
    });

    it('should throw an error if the item does not exist', async () => {
      const createBidDto: CreateBidDto = {
        item_id: 2,
        buyer_id: 1,
        bid_amount: 100,
      };

      await expect(service.create(createBidDto)).rejects.toThrow(
        'Item not found',
      );
    });
  });
});
