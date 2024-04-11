import { Controller, Post, Body } from '@nestjs/common';

import { CreateAuthDto } from '../dto/create-auth.dto';
import { AuthService } from 'src/modules/auth/application/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  cadastrar(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.cadastrar(createAuthDto);
  }
}
