import { Controller, Post, Body, Get, Query, Param, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreatePacientDto } from './dto/create-pacient-dto';
import { PacientService } from './services/pacient/pacient.service';
import { Response } from 'express';

@Controller('pacients')
export class PacientsController {
  constructor(private pacientService: PacientService) {}
  @Post()
  create(@Body() createPacientDto: CreatePacientDto, @Res() response: Response): any {
    this.pacientService.create(createPacientDto).then( pacient => {
      response.status(HttpStatus.CREATED).json(pacient)
    }).catch(() => {
      response.status(HttpStatus.FORBIDDEN).json({mesage:'error al crear el paciente'});
    })
  }

  @Get()
  findAll(@Res() response: Response): any {
    this.pacientService.findAll().then(pacientsList => {
      response.status(HttpStatus.OK).json(pacientsList)
    }).catch(()=>{
      response.status(HttpStatus.FORBIDDEN).json({mesage:'error'});
    })
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Res() response: Response): any {
    this.pacientService.getOne(id).then(pacientsList => {
      response.status(HttpStatus.OK).json(pacientsList)
    }).catch(()=>{
      response.status(HttpStatus.FORBIDDEN).json({mesage:'error'});
    })
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePacientDto: CreatePacientDto, @Res() response: Response): any {
    this.pacientService.update(id, updatePacientDto).then(pacient => {
      response.status(HttpStatus.OK).json(pacient)
    }).catch(() => {
      response.status(HttpStatus.FORBIDDEN).json({mesage:'error al actualizar el paciente'});
    })
  }

  @Delete(':id')
  remove(@Res() response: Response, @Param('id') id: number): any {
    this.pacientService.delete(id).then(res =>{
      response.status(HttpStatus.OK).json(res);
    }).catch(() =>{
      response.status(HttpStatus.FORBIDDEN).json({mesage:'error al eliminar el paciente'});
    })
  }

}

