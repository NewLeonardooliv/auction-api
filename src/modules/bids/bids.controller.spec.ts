import { Test, TestingModule } from '@nestjs/testing';
import { BidsController } from './bids.controller';
import { BidsService } from './bids.service';
import { CreateBidDto } from './dto/create-bid.dto';

describe('BidsController', () => {
  let controller: BidsController;
  let service: BidsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BidsController],
      providers: [
        {
          provide: BidsService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BidsController>(BidsController);
    service = module.get<BidsService>(BidsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call BidsService.create with the correct parameters', async () => {
      const createBidDto: CreateBidDto = {
        item_id: 1,
        buyer_id: 1,
        bid_amount: 100,
      };
      const result = { ...createBidDto };

      jest.spyOn(service, 'create').mockReturnValue(result);

      expect(controller.create(createBidDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createBidDto);
    });
  });
});
