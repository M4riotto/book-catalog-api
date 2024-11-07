import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Livro } from './livro.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Importando o JwtAuthGuard

@Controller('livros')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}

  // Rota protegida que retorna todos os livros
  @Get()
  @UseGuards(JwtAuthGuard)  // Protege essa rota com JWT
  findAll(): Promise<Livro[]> {
    return this.livroService.findAll();
  }

  // Rota protegida que retorna um livro específico
  @Get(':id')
  @UseGuards(JwtAuthGuard)  // Protege essa rota com JWT
  findById(@Param('id') id: string): Promise<Livro> {
    return this.livroService.findById(Number(id));
  }

  // Rota protegida que cria um novo livro
  @Post()
  @UseGuards(JwtAuthGuard)  // Protege essa rota com JWT
  create(@Body() livro: Livro): Promise<Livro> {
    return this.livroService.create(livro);
  }

  // Rota protegida que atualiza um livro existente
  @Put(':id')
  @UseGuards(JwtAuthGuard)  // Protege essa rota com JWT
  update(@Param('id') id: string, @Body() livro: Partial<Livro>): Promise<void> {
    return this.livroService.update(Number(id), livro);
  }

  // Rota protegida que remove um livro
  @Delete(':id')
  @UseGuards(JwtAuthGuard)  // Protege essa rota com JWT
  remove(@Param('id') id: string): Promise<void> {
    return this.livroService.remove(Number(id));
  }
}
