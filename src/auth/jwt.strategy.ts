// src/auth/jwt.strategy.ts
import { UnauthorizedException } from '@nestjs/common'; // Importando o UnauthorizedException
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usuarioService: UsuarioService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: { email: string; sub: number }): Promise<Usuario> {
    const user = await this.usuarioService.findById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
