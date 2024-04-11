# Fluxo Básico
- Cliente chama API;
- Cai no controller;
- Controller chama o service;

# Controllers
Os controladores são responsáveis por lidar com solicitações recebidas e retornar respostas ao cliente;

Basicamente o cara que vai receber as requisições HTTP e realizar algo;

Aqui definimos nossas rotas (Get, Post, Put, Patch, Delete) atráves de decorators.


# Services
No NestJs, service seria basciamente o próprio caso de uso (apenas mudando o nome);

Lugar aonde fica a regra de negócio.

# Inversão de Dependências
Em teoria, seria basicamente tirar a responsabilidade de algo, exemplo, se tivermos um useCase que precisa de um Reposity, nos não instânciamos ele dentro do useCase, mas sim recebemos no construtor, e na última camada injetamos. No Nest, não tem isso.

# Injeção de Dependências
Com Nest não precisamos fazer a "injeção na mão", ele faz automaticamente essas injeções através das definições de exportação e importação nos módulos;

Exemplo.: const new UserService(new UserRepository(), new BankRespotiroy());

# Modules
Um módulo é uma classe anotada com um decorador;

Server para deixar o código organizado, inicialmente os módulos não se interagem entre si. Exemplo.: O módulo users não tem acesso direto ao módulo banks. Porém, é possível importar e exportar para usar em outros.

    @Module({
        imports: [],
        controllers: [AppController],
        providers: [AppService],
    })
    export class AppModule {}


# Decorators
Para um controler funcionar, precisamos passar o decorator de controller:

    @Controller() | @Controller('users')

Métodos HTTP:

    @Get()
    @Post()
    @Put()
    @Patch()
    @Delete()

Decorator para módulos:

    @Module()

Decorator para injeção de dependência:

    @Injectable()


# Pipes
Vai ficar no meio do caminho entre o cliente e a rota. Servem para duas coisas, para transformar e validar os dados. Exemplo.: Se foi me fornecido e-mail e senha.

    Request -> Pipes -> Controller.create -> Service.create
    Request -> Pipes = False = BadRequest
