import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientsController } from './pacients/pacients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pacient } from './pacients/entities/pacient.entity';
import { PacientService } from './pacients/services/pacient/pacient.service';
// mongodb://localhost:27017/PacientsDB
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'PacientsDB',
      entities: ["dist/**/*.entity{.ts,.js}"],
      useNewUrlParser: true
    }),
    TypeOrmModule.forFeature([Pacient])
  ],
  controllers: [AppController, PacientsController],
  providers: [AppService, PacientService],
})
export class AppModule {}
