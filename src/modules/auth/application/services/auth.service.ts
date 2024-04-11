import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { CreateAuthDto } from 'src/modules/auth/interfaces/dto/create-auth.dto';
import { ULID } from 'src/core/ulid/ULID';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly ulid: ULID,
  ) {}

  async cadastrar(createAuthDto: CreateAuthDto) {
    const emailEmUso = await this.authRepository.procurarPeloEmail(
      createAuthDto.email,
    );

    if (emailEmUso) {
      throw new ConflictException('E-mail de usuário já está cadastrado');
    }

    const senhaCriptografada = await hash(createAuthDto.senha, 12);
    const usuario = await this.authRepository.cadastrar({
      codigo: this.ulid.get(),
      nome: createAuthDto.nome,
      email: createAuthDto.email,
      senha: senhaCriptografada,
    });

    return {
      ...usuario,
      senha: null,
    };
  }
}
