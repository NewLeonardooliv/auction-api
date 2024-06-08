import { Test, TestingModule } from '@nestjs/testing';
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';

describe('BuyersService', () => {
  let service: BuyersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyersService],
    }).compile();

    service = module.get<BuyersService>(BuyersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should add a new buyer to the buyers array and return it', () => {
      const createBuyerDto: CreateBuyerDto = {
        name: 'John Doe',
        email: 'john.doe@example.com',
      };

      const result = service.create(createBuyerDto);

      expect(result).toEqual(createBuyerDto);
      expect(service['buyers']).toContain(createBuyerDto);
    });
  });
});
