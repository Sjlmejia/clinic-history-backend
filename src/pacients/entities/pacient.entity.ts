import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('pacients')
export class Pacient {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() heightPacient?: string;
  @Column() weightPacient?: string;
  @Column() bloodType?: string;
  @Column() genre?: string;
  @Column() dni?: string;
  @Column() date?: string;
  @Column() imagePath?: string;
  constructor(pacient?: Partial<Pacient>) {
    Object.assign(this, pacient);
  }
}
