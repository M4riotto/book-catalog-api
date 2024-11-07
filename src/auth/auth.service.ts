// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service'; // Serviço de usuários
import { Usuario } from '../usuario/usuario.entity'; // Modelo de usuário (ajuste conforme necessário)

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService, // Serviço de usuário
    private readonly jwtService: JwtService, // Injetando o JwtService
  ) {}

  async validateUser(email: string, senha: string): Promise<Usuario | null> {
    console.log(email)
    console.log(senha)
    const user = await this.usuarioService.findByEmail(email);
    console.log(user)
    if (user && user.senha === senha) { 
      return user;
    }
    return null;
  }

  async login(user: Usuario) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload), // Gerando o JWT
    };
  }
}
