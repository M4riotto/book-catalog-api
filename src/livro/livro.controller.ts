import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Livro } from './livro.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  

@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  
  @Get()
  @UseGuards(JwtAuthGuard)  
  findAll(): Promise<Livro[]> {
    return this.livroService.findAll();
  }

  
  @Get(':id')
  @UseGuards(JwtAuthGuard)  
  findById(@Param('id') id: string): Promise<Livro> {
    return this.livroService.findById(Number(id));
  }

  
  @Post()
  @UseGuards(JwtAuthGuard)  
  create(@Body() livro: Livro): Promise<Livro> {
    return this.livroService.create(livro);
  }

  
  @Put(':id')
  @UseGuards(JwtAuthGuard)  
  update(@Param('id') id: string, @Body() livro: Partial<Livro>): Promise<void> {
    return this.livroService.update(Number(id), livro);
  }

  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)  
  remove(@Param('id') id: string): Promise<void> {
    return this.livroService.remove(Number(id));
  }
}
