// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Importando o JwtModule
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module'; // Seu módulo de usuários
import { JwtStrategy } from './jwt.strategy'; // (Se você tiver uma estratégia de JWT)

@Module({
  imports: [
    UsuarioModule, // Importando o módulo de usuários
    JwtModule.register({
      secret: 'secretKey', // Defina uma chave secreta para o JWT
      signOptions: { expiresIn: '60m' }, // Token expira após 10 segundos
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // Adicione a estratégia JWT, se estiver usando
})
export class AuthModule {}
