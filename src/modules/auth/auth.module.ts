import { Module } from '@nestjs/common';
import { AuthController } from './interfaces/controllers/auth.controller';
import { AuthService } from './application/services/auth.service';
import { PrismaClient } from '@prisma/client';
import { ULID } from 'src/core/ulid/ULID';
import { AuthRepository } from './infrastructure/repositories/auth.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaClient, AuthRepository, ULID],
})
export class AuthModule {}
