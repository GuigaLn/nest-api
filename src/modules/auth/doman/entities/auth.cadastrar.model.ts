export interface IAuthModelCadastrar {
  codigo: string;
  nome: string;
  email: string;
  senha: string;
}

export class AuthModelCadastrar {
  readonly props: IAuthModelCadastrar;

  constructor(props: IAuthModelCadastrar) {
    this.props = props;
  }
}
