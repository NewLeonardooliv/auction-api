import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call ItemsService.create with the correct parameters', async () => {
      const createItemDto: CreateItemDto = {
        description: 'Item 1',
        initial_bid: 100,
        auction_time: new Date(),
      };
      const result: CreateItemDto = { ...createItemDto };

      jest.spyOn(service, 'create').mockResolvedValue(result as never);

      expect(await controller.create(createItemDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createItemDto);
    });
  });

  describe('findAll', () => {
    it('should call ItemsService.findAll and return the result', async () => {
      const result: CreateItemDto[] = [
        {
          description: 'Item 1',
          initial_bid: 100,
          auction_time: new Date(),
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(result as never);
      expect(await controller.findAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
