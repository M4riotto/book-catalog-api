import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Livro } from './livro.entity';

@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  @Get()
  findAll(): Promise<Livro[]> {
    return this.livroService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Livro> {
    return this.livroService.findById(Number(id));
  }

  @Post()
  create(@Body() livro: Livro): Promise<Livro> {
    return this.livroService.create(livro);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() livro: Partial<Livro>): Promise<void> {
    return this.livroService.update(Number(id), livro);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.livroService.remove(Number(id));
  }
}
