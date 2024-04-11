import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IAuth } from '../../doman/entities/auth.model';
import { IAuthModelCadastrar } from '../../doman/entities/auth.cadastrar.model';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaCliente: PrismaClient) {}

  async procurarPeloEmail(email: string): Promise<IAuth | null> {
    return await this.prismaCliente.usuario.findUnique({
      where: { email },
    });
  }

  async cadastrar(auth: IAuthModelCadastrar): Promise<IAuth> {
    return await this.prismaCliente.usuario.create({
      data: {
        codigo: auth.codigo,
        nome: auth.nome,
        email: auth.email,
        senha: auth.senha,
      },
    });
  }
}
