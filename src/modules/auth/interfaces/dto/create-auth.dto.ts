import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  senha: string;
}
