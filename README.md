# 🚀 Fluxo - Delivery de Moda Masculina

App de delivery de moda tipo iFood, onde clientes escolhem peças, recebem em casa, provam e pagam só o que ficam.

## 🌐 Site em Produção

**Acesse aqui:** https://fashiondlvr-puhffzea.manus.space/

## 📋 Como Funciona

1. **Cliente escolhe** - Seleciona as peças que acha bonito no catálogo
2. **Recebe em casa** - Entrega em até 2 horas em Uberaba
3. **Prova e paga** - Testa tudo e paga só o que ficar

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 + Tailwind CSS 4 + TypeScript
- **Backend:** Express 4 + tRPC 11
- **Banco de Dados:** MySQL
- **Autenticação:** Manus OAuth
- **Storage:** S3 (CDN)

## 📦 Estrutura do Projeto

```
├── client/              # Frontend React
│   ├── src/
│   │   ├── pages/      # Páginas principais
│   │   ├── components/ # Componentes reutilizáveis
│   │   └── lib/        # Utilitários e tRPC
│   └── public/         # Assets estáticos
├── server/             # Backend Express + tRPC
│   ├── routers.ts      # Endpoints tRPC
│   ├── db.ts           # Query helpers
│   └── _core/          # Framework core
├── drizzle/            # Schema e migrações
└── shared/             # Tipos compartilhados
```

## 🚀 Como Começar

### Requisitos
- Node.js 22+
- pnpm 10+
- MySQL (ou TiDB)

### Instalação

```bash
# Instalar dependências
pnpm install

# Configurar banco de dados
pnpm db:push

# Rodar em desenvolvimento
pnpm dev

# Rodar testes
pnpm test
```

## 📝 Catálogo de Produtos

O catálogo está em `client/src/pages/Home.tsx` com 10 peças:

- Camiseta Branca (R$ 89.90)
- Jaqueta Preta Premium (R$ 349.90)
- Calça Jogador (R$ 169.90)
- Hoodie Cinza (R$ 129.90)
- Sapato Branco (R$ 249.90)
- Camisa Preta (R$ 119.90)
- Calça Cinza Chino (R$ 139.90)
- Jaqueta Bomber (R$ 279.90)
- Jordan Red & Black (R$ 299.90)
- Camiseta Preta Gráfica (R$ 99.90)

## 💬 WhatsApp Integration

Todos os pedidos são enviados para WhatsApp: **5534984148067**

A mensagem inclui:
- SKU de cada produto
- Quantidade selecionada
- Preço unitário e total
- Links das imagens dos produtos

## 🧪 Testes

```bash
# Rodar testes vitest
pnpm test

# Testes incluem:
# - auth.logout.test.ts (autenticação)
# - orders.create.test.ts (criação de pedidos)
```

## 📊 Banco de Dados

### Tabela de Pedidos

```sql
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  items JSON NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status ENUM('pending', 'confirmed', 'delivered') DEFAULT 'pending',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 Design

- **Tema:** Dark UI (Cyberpunk Noir)
- **Cores:** Preto (#0a0a0a), Neon Orange (#ff6b00), Ouro (#ffd700)
- **Tipografia:** Space Grotesk (display), Inter (body)
- **Animações:** Fade-in, glow effects, smooth transitions

## 🔄 Fluxo de Desenvolvimento

1. **Faça alterações no código**
2. **Teste localmente:** `pnpm dev`
3. **Rode testes:** `pnpm test`
4. **Commit e push** para GitHub
5. **Manus publica automaticamente** no site

## 📞 Contato

WhatsApp: **5534984148067**

---

**Made with ❤️ by Manus**
