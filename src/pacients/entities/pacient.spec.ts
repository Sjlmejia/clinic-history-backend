import { Pacient } from './pacient.entity';

describe('Pacient', () => {
  it('should be defined', () => {
    expect(new Pacient()).toBeDefined();
  });
});
