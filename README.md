# Activity #3: Forms

## Descrição

Este projeto consiste na criação de um formulário web estruturado, estilizado e validado, realizado para a unidade curricular de Programação Web.

O formulário é composto por 4 secções principais:
1. **Personal Information** – Dados pessoais (nome, email, título)

2. **Address** – Morada, código postal e país (com seleção 
dinâmica de países)

3. **Payment Details** – Dados de pagamento, cartão, validade e CVV

4. **Terms and Conditions** – Aceitação dos termos


### Funcionalidades implementadas

- **Estrutura HTML semântica** usando `<form>`, `<fieldset>`, `<legend>`, `<label>` e inputs adequados

- **Estilos CSS personalizados** para visual moderno, organizado e responsivo

- **Validação de formulário com JavaScript**: impede o envio e mostra mensagens de erro caso os dados estejam incompletos ou errados

- **Campo “Country” preenchido dinamicamente** com recurso a ficheiros `loc.json` (lista de países) e `loadloc.js`

- **Totalmente funcional localmente ou em GitHub Pages**


## Como testar localmente

1. **Clonar o repositório:**
   
   git clone:
   https://antonio1canelas.github.io/trabalhoPW3/

2. **Abrir a pasta do projeto.**

3. **Abrir um servidor local (recomendado):**

    - Com VS Code: botão direito > “Open with Live Server”

    - Ou com outro servidor local da tua preferência

4. Preenche o formulário para testar validações e seleção dinâmica de países.

## Estrutura dos ficheiros

- index.html - Estrutura do formulário

- styles.css — Estilos do formulário

- validation.js — Validação dos campos

- loc.json — Lista de países em formato JSON

- loadloc.js — Script para preencher o campo Country automaticamente

## Deploy

O projeto pode ser visto publicamente via GitHub Pages em:
https://antonio1canelas.github.io/trabalhoPW3/

## Autor

Antonio Canelas 31834 

Escola Superior de Tecnologia e Gestão

Instituto Politécnico de Viana do Castelo

## Notas finais

- Todos os campos obrigatórios são validados no lado do cliente.

- O formulário não envia dados para nenhum servidor — é apenas demonstrativo.

- O campo "Country" pode ser facilmente atualizado adicionando mais países ao ficheiro loc.json.

