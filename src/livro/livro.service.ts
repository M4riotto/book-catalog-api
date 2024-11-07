import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from './livro.entity';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro)
    private livroRepository: Repository<Livro>,
  ) {}

  findAll(): Promise<Livro[]> {
    return this.livroRepository.find();
  }

  findById(id: number): Promise<Livro> {
    return this.livroRepository.findOneBy({ id });
  }

  create(livro: Livro): Promise<Livro> {
    return this.livroRepository.save(livro);
  }

  update(id: number, livro: Partial<Livro>): Promise<void> {
    return this.livroRepository.update(id, livro).then(() => {});
  }

  remove(id: number): Promise<void> {
    return this.livroRepository.delete(id).then(() => {});
  }
}
