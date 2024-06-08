import { Test, TestingModule } from '@nestjs/testing';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';

describe('BuyersController', () => {
  let controller: BuyersController;
  let service: BuyersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyersController],
      providers: [
        {
          provide: BuyersService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BuyersController>(BuyersController);
    service = module.get<BuyersService>(BuyersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call BuyersService.create with the correct parameters', async () => {
      const createBuyerDto: CreateBuyerDto = {
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      const result: CreateBuyerDto = { ...createBuyerDto };

      jest.spyOn(service, 'create').mockResolvedValue(result as never);

      expect(await controller.create(createBuyerDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createBuyerDto);
    });
  });
});
