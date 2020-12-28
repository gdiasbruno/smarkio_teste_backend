# :star: SMARKIO TESTE FRONTEND

#### Back-end desenvolvido em Node.js da aplicação web desenvolvida para o teste prático de programação da SMARKIO.

---

## Requerimentos para instalação em ambiente local

Você precisa do Node.js, o node global package yarn e o Docker com uma imagem do MYSQL:

## Instalação imagem do MYSQL Docker :

Certifique-se que a porta '3306' está desocupada, caso não esteja use uma outra parte no primeiro número depois da flag -p. Exemplo: '3307?3306' ou '3308:3306'. A segunda porta constitui a porta que o container vai utilizar, deve ser '3306'

    $ docker run --name smarkio -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql

Depois acesso o CLI do MySQL através do Docker:
    
     $ mysql -u root -p
 A senha é: 'docker'
 
     $ ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'docker'
     $ CREATE DATABASE comments

## Instalação da aplicação

    $ git clone https://github.com/gdiasbruno/smarkio_teste_backend.git
    $ cd smarkio_teste_backend
    $ yarn install
    $ yarn typeorm migration:run

## Configure app

Abra `src\routes\ibm.routes.ts` e coloque uma chave api válida para URL de serviço. 
Você precisará de credencial para usar o serviço 'Text to Speech' IMB Watson

## Inicializando o servidor

    $ yarn dev:server

