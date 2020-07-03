import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pacient } from 'src/pacients/entities/pacient.entity';
import { Repository } from 'typeorm';
import { CreatePacientDto } from 'src/pacients/dto/create-pacient-dto';

@Injectable()
export class PacientService {
  constructor(
    @InjectRepository(Pacient)
    private pacientsRepository: Repository<Pacient>,
  ){}

  async findAll(): Promise<Pacient[]>  {
    return await this.pacientsRepository.find();
  }

  async create(newPacient: CreatePacientDto): Promise<Pacient> {
    const pacient = new Pacient();
    pacient.firstName = newPacient.firstName;
    pacient.lastName = newPacient.lastName;
    pacient.bloodType = newPacient.bloodType;
    pacient.date = newPacient.date;
    pacient.dni = newPacient.dni;
    pacient.genre = newPacient.genre;
    pacient.heightPacient = newPacient.heightPacient;
    pacient.imagePath = newPacient.imagePath;
    pacient.weightPacient = newPacient.weightPacient;
    return this.pacientsRepository.save(pacient)
  }

  async update(id: number, pacient: CreatePacientDto): Promise<Pacient> {
    const updatePacient = await this.pacientsRepository.findOne(id);
    updatePacient.firstName = pacient.firstName;
    updatePacient.lastName = pacient.lastName;
    updatePacient.bloodType = pacient.bloodType;
    updatePacient.date = pacient.date;
    updatePacient.dni = pacient.dni;
    updatePacient.genre = pacient.genre;
    updatePacient.heightPacient = pacient.heightPacient;
    updatePacient.imagePath = pacient.imagePath;
    updatePacient.weightPacient = pacient.weightPacient;
    return await this.pacientsRepository.save(updatePacient);
  }

  async getOne(id:number): Promise<Pacient> {
    return await this.pacientsRepository.findOne(id);
  }

  async delete(id: number): Promise<any> {
    return await this.pacientsRepository.delete(id);
  }
}
