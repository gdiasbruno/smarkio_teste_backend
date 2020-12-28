# :star: SMARKIO TESTE FRONTEND

#### Back-end desenvolvido em Node.js da aplicação web desenvolvida para o teste prático de programação da SMARKIO.

---

## Requerimentos para instalação em ambiente local

Você precisa do Node.js, o node global package yarn e o MySQL (recomendo uso da imagem docker) na porta 3306:

## Instalação

    $ git clone https://github.com/gdiasbruno/smarkio_teste_backend.git
    $ cd smarkio_teste_backend
    $ yarn install
    $ yarn typeorm migration:run

## Configure app

Abra `src\routes\ibm.routes.ts` e coloque uma chave api válida para URL de serviço. 
Você precisará de credencial para usar o serviço 'Text to Speech' IMB Watson

## Inicializando o servidor

    $ yarn dev:server

