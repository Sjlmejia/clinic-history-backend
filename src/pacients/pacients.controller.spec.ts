import { Test, TestingModule } from '@nestjs/testing';
import { PacientsController } from './pacients.controller';

describe('Pacients Controller', () => {
  let controller: PacientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacientsController],
    }).compile();

    controller = module.get<PacientsController>(PacientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
