# Guia de publicação

O projeto usa Next.js 14 e é publicado na **Vercel**. Também funciona no Netlify.

## Vercel

1. Envie o código para o GitHub.
2. Na Vercel: **Add New → Project** e escolha o repositório.
3. Mantenha as configurações padrão (a Vercel detecta o Next.js sozinha):
   - Build command: `npm run build`
   - Node.js: 20.x (em **Settings → General → Node.js Version**, se precisar)
4. Clique em **Deploy**.

A cada `git push` na branch `main`, a Vercel publica uma nova versão. Os Security Headers do
`next.config.js` são aplicados automaticamente, sem configuração extra.

## Domínio próprio

Em **Settings → Domains**, adicione o seu domínio e siga as instruções de DNS.

## Testar antes de publicar

```bash
npm install
npm run build
npm run start
```

## Netlify (alternativa)

1. No Netlify: **Add new site → Import an existing project** e escolha o repositório.
2. Build command: `npm run build`, com Node 20.
3. Clique em **Deploy**.

## Observações

- Não use `output: "export"` no `next.config.js` se quiser manter os headers de segurança por ele.
- Se o build travar na geração de páginas, confira se algum componente de cliente está recebendo funções ou ícones como props.
- Erros de sintaxe no build quase sempre são vírgula faltando em `config/site.ts`.
