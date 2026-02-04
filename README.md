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

