export interface IAuth {
  codigo: string;
  nome: string;
  email: string;
  senha: string;
  role: 'USER' | 'ROOT';
  dataCompra: Date;
  dataExpiracao: Date;
}

export class Auth {
  readonly props: IAuth;

  constructor(props: IAuth) {
    this.props = props;
  }
}
