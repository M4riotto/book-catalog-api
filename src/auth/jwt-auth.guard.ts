// src/auth/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // Importando o AuthGuard do Passport

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
