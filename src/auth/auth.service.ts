// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service'; 
import { Usuario } from '../usuario/usuario.entity'; 

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService, 
    private readonly jwtService: JwtService, 
  ) {}

  async validateUser(email: string, senha: string): Promise<Usuario | null> {
    const user = await this.usuarioService.findByEmail(email);
    if (user && user.senha === senha) { 
      return user;
    }
    return null;
  }

  async login(user: Usuario) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload), 
    };
  }
}
