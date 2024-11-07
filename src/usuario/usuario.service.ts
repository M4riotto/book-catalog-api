// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findById(id: number): Promise<Usuario | null> {
    const user = await this.usuarioRepository.findOne({ where: { id } });
    console.log('Found user by ID:', user);  // Log para depuração
    return user;
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    console.log("Procurando usuário com e-mail:", email);
    const user = await this.usuarioRepository.findOne({ where: { email } });
    console.log('Usuário encontrado:', user);  // Verifique o que está sendo retornado aqui
    return user;
  }
  
}
