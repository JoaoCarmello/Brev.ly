<<<<<<< HEAD
# 🔗 Brev.ly — Backend

Backend da aplicação **Brev.ly**, um encurtador de links desenvolvido como projeto acadêmico FullStack.  
Essa API é responsável pelo gerenciamento dos links, redirecionamento, contagem de acessos e exportação de dados em CSV.

---

## 🧠 Sobre o projeto

O objetivo deste backend é fornecer uma API simples, performática e bem estruturada para:

- criar links encurtados
- listar links cadastrados
- redirecionar URLs encurtadas
- contabilizar acessos
- remover links
- exportar os dados para CSV acessível via CDN

O projeto foi desenvolvido seguindo boas práticas de organização, validação de dados e separação de responsabilidades.

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Drizzle ORM**
- **PostgreSQL**
- **Docker**
- **Cloudflare R2 (compatível com S3)**

---

## 📁 Estrutura do projeto

```txt
server/
├── src/
│   ├── db/
│   │   ├── migrations/
│   │   └── schemas/
│   ├── routes/
│   │   └── links/
│   ├── storage/
│   ├── env.ts
│   └── server.ts
├── docker-compose.yml
├── Dockerfile
├── drizzle.config.ts
├── .env.example
└── package.json
```

⚙️ Funcionalidades
 Criar link encurtado

 Listar links cadastrados

 Deletar link

 Redirecionar link encurtado

 Incrementar contagem de acessos

 Exportar links em CSV

 Disponibilizar CSV via CDN (Cloudflare R2)

📌 Observações

O backend foi desenvolvido de forma independente do frontend.

O frontend será documentado separadamente em outro README.

A aplicação segue os requisitos definidos no desafio.

=======
🔗 Brev.ly — Encurtador de Links (Full Stack)

O Brev.ly é um encurtador de links desenvolvido como projeto acadêmico Full Stack na pós-graduação Tech Developer 360 – Rocketseat.

A aplicação permite criar, gerenciar e acompanhar links encurtados, com contagem de acessos em tempo real e exportação de dados em CSV via CDN.

🧠 Sobre o projeto

O objetivo do projeto foi desenvolver uma aplicação completa, cobrindo:

Backend estruturado, performático e seguro

Frontend moderno, responsivo e acessível

Integração com serviços externos (Cloudflare R2)

Boas práticas de código e arquitetura

O projeto foi dividido em duas camadas:

Backend (/server) → API responsável pela lógica e persistência

Frontend (/web) → Interface do usuário

🖼️ Demonstração
Interface da aplicação

![alt text](image.png)


🚀 Funcionalidades
🔙 Backend

Criar links encurtados

Listar links cadastrados

Deletar links

Redirecionar URLs encurtadas

Contabilizar acessos

Exportar links em CSV

Disponibilizar CSV via CDN (Cloudflare R2)

Atualização de acessos via SSE

🖥️ Frontend

Criar link com validações e loading

Listar links encurtados

Copiar link encurtado

Excluir link com confirmação

Contador de acessos atualizado

Download de CSV

Página de redirecionamento

Página 404

Layout responsivo (desktop e mobile)

🧱 Tecnologias utilizadas
Backend

Node.js

TypeScript

Fastify

Drizzle ORM

PostgreSQL

Docker

Cloudflare R2 (S3 compatible)

Server-Sent Events (SSE)

Frontend

React

TypeScript

Vite

React Router

TanStack Query

Tailwind CSS + CSS global

Axios

📁 Estrutura do projeto
brevly/
├── server/
│   ├── src/
│   │   ├── db/
│   │   ├── routes/
│   │   ├── storage/
│   │   ├── env.ts
│   │   └── server.ts
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── drizzle.config.ts
│   ├── .env.example
│   └── package.json
│
├── web/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── hooks/
│   │   └── App.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── docs/
│   ├── banner.png
│   ├── home-desktop.png
│   └── home-mobile.png
│
└── README.md

⚙️ Variáveis de ambiente
Backend (/server/.env)
DATABASE_URL=postgresql://user:password@localhost:5432/brevly

CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_ACCESS_KEY_ID=
CLOUDFLARE_SECRET_ACCESS_KEY_ID=
CLOUDFLARE_BUCKET=
CLOUDFLARE_PUBLIC_URL=

Frontend (/web/.env)
VITE_BACKEND_URL=http://localhost:3333
VITE_FRONTEND_URL=http://localhost:5173

▶️ Como executar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/brevly.git
cd brevly

2️⃣ Backend
cd server
docker-compose up -d
npm install
npx drizzle-kit migrate
npm run dev


Backend disponível em:

http://localhost:3333

3️⃣ Frontend
cd web
npm install
npm run dev


Frontend disponível em:

http://localhost:5173

📌 Observações

O projeto foi desenvolvido seguindo os requisitos do desafio

Backend e frontend estão desacoplados, mas versionados juntos

CSV é gerado dinamicamente e servido via Cloudflare R2

Projeto pensado para escala, clareza e manutenção

👨‍💻 Autor

Desenvolvido por Matheus Carmello
>>>>>>> e03bb8f (commit frontend)
