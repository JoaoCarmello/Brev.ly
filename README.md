# 🔗 Brev.ly — Encurtador de Links (Full Stack)

O **Brev.ly** é um encurtador de links robusto desenvolvido como projeto acadêmico na pós-graduação *Tech Developer 360 – Rocketseat*. A aplicação permite criar, gerenciar e acompanhar links encurtados com métricas em tempo real e exportação de dados.

---

## 🖼️ Demonstração

![Interface da aplicação](https://github.com/user-attachments/assets/a320cd57-90f0-47ac-879a-fccbb458177d)

---

## 🧠 Sobre o Projeto

O objetivo foi desenvolver uma aplicação completa, cobrindo desde a infraestrutura até a interface do usuário, focando em:
- **Backend:** Estruturado, performático e seguro.
- **Frontend:** Moderno, responsivo e acessível.
- **Integração:** Uso de serviços externos como Cloudflare R2 para persistência de arquivos.
- **Arquitetura:** Separação clara de responsabilidades e código limpo.

---

## 🚀 Funcionalidades

### 🔙 Backend
- [x] Criação de links encurtados com hashes únicos.
- [x] Redirecionamento de URLs com contabilização de acessos.
- [x] Listagem e exclusão de links.
- [x] Exportação de dados em CSV via CDN (Cloudflare R2).
- [x] Atualização de métricas em tempo real via **SSE (Server-Sent Events)**.

### 🖥️ Frontend
- [x] Dashboard de gestão com validações e estados de loading.
- [x] Sistema de cópia rápida para o clipboard.
- [x] Contador de acessos atualizado dinamicamente.
- [x] Download de relatórios CSV.
- [x] Páginas de Redirecionamento e Erro (404).
- [x] Layout responsivo (Mobile & Desktop).

---

## 🧱 Tecnologias Utilizadas

**Backend:** Node.js, TypeScript, Fastify, Drizzle ORM, PostgreSQL, Docker, Cloudflare R2.  
**Frontend:** React, TypeScript, Vite, React Router, TanStack Query, Tailwind CSS, Axios.

---

## 📁 Estrutura do Projeto

```txt
brevly/
├── server/              # Camada de API e Banco de Dados
│   ├── src/
│   │   ├── db/          # Migrations e Schemas
│   │   ├── routes/      # Endpoints da aplicação
│   │   ├── storage/     # Lógica S3/R2
│   │   └── server.ts    # Entry point
│   ├── docker-compose.yml
│   └── drizzle.config.ts
├── web/                 # Camada de Interface (React)
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   └── services/    # Integração com a API
│   └── vite.config.ts
└── docs/                # Ativos de documentação
```
⚙️ Configuração do Ambiente
Backend (/server/.env)
Snippet de código
DATABASE_URL=postgresql://user:password@localhost:5432/brevly
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_ACCESS_KEY_ID=
CLOUDFLARE_SECRET_ACCESS_KEY_ID=
CLOUDFLARE_BUCKET=
CLOUDFLARE_PUBLIC_URL=
Frontend (/web/.env)
Snippet de código
VITE_BACKEND_URL=http://localhost:3333
VITE_FRONTEND_URL=http://localhost:5173
▶️ Como Executar
1. Backend
Bash
cd server
docker-compose up -d
npm install
npx drizzle-kit migrate
npm run dev
2. Frontend
Bash
cd web
npm install
npm run dev
👨‍💻 Autor
Desenvolvido por Matheus Carmello.

