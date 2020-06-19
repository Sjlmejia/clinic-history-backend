import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pacient } from 'src/pacients/entities/pacient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientService {
  constructor(
    @InjectRepository(Pacient)
    private pacientsRepository: Repository<Pacient>,
  ){}

  findAll(): Promise<Pacient[]> {
    return this.pacientsRepository.find();
  }
}
