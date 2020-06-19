import { Controller, Post, Body, Get, Query, Param, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreatePacientDto } from './dto/create-pacient-dto';
import { PacientService } from './services/pacient/pacient.service';

@Controller('pacients')
export class PacientsController {
  constructor(private pacientService: PacientService) {}
  @Post()
  create(@Body() createPacientDto: CreatePacientDto) {
    return 'hola'
  }
  @Get()
  findAll(@Res() response) {
    this.pacientService.findAll().then(pacientsList => {
      response.status(HttpStatus.OK).json(pacientsList)
    }).catch(()=>{
      response.status(HttpStatus.FORBIDDEN).json({mesage:'error'});
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePacientDto: CreatePacientDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

}

