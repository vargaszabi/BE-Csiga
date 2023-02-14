import { Param } from '@nestjs/common';
import { Body, Controller, Get, Post, Render, Delete } from '@nestjs/common';
import { isDefined } from 'class-validator';
import { DataSource, EntityNotFoundError } from 'typeorm';
import { AppService } from './app.service';
import Csiga from './csiga.entity';
import NewCsigaDto from './newCsiga.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/register')
  async newCsiga(@Body() csiga: NewCsigaDto) {
    isDefined(csiga.nev);

    const csigaRepo = this.dataSource.getRepository(Csiga);
    if (csiga.sebbeseg == null) {
      csiga.sebbeseg = 3;
    }
    await csigaRepo.save(csiga);
    return csiga;
  }

  @Delete('/csiga/:id')
  deleteCsiga(@Param('id') id: number) {
    const csigaRepo = this.dataSource.getRepository(Csiga);
    csigaRepo.delete(id);
  }

  @Get('/csiga')
  allCsiga() {
    const csigaRepo = this.dataSource.getRepository(Csiga);
    return csigaRepo.find();
  }
}
