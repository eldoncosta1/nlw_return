# Backend Nodejs

## Criando projeto backend

```javascript
npm init -y

npm i typescript @types/node ts-node-dev -D

npx tsc --init

npm i express

npm i cors @types/cors
```

## Configuração do Banco de Dados

```jsx
npm i prisma -D
npm i @prisma/client

npx prisma init
```

Ganhos de utilizar o prisma

- Abstração na comunicação entre bancos de dados

## Biblioteca para envio de e-mail

```jsx
npm i nodemailer
npm i --save-dev @types/nodemailer
```

## Serviço de e-mail

```jsx
Mailtrap;
```

## Teste unitários

```jsx
npm i jest @types/jest -D

npx jest --init

npm i ts-node -D

swc (https://swc.rs/) compilar ts para rodas testes
npm i -D @swc/jest
```

### SOLID

1. Single Responsability Principle

- Cada classe/função tem uma responsabilidade única;

2. Open/Closed Principle

- As classes da aplicação devem ser abertas para extensão mas fechadas para modificação;

3. Liskov Substitution Principle

- Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;

4. Interface Segregation Principle

5. Dependency Inversion Principle
