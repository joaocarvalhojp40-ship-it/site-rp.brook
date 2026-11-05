# Cidade Nova Roleplay (CNV) - Landing Page

Landing page para comunidades de roleplay, feita com **Next.js (App Router)**,
**Tailwind CSS** e **lucide-react**. Todo o conteúdo (Discord, história,
sistemas, regras e leis) fica em `config/site.ts`.

## Como usar

```bash
npm install
npm run dev
```

1. Edite `config/site.ts` com o link do Discord, a história, as regras e as leis da **sua** comunidade (substitua o conteúdo da CNV).
2. Coloque o logo da **sua** comunidade em `public/logo.png`.
3. Publique no Netlify ou na Vercel.

## Termos de uso (leia antes de usar)

Este projeto é público, mas **não é MIT puro**. Ele usa a licença do arquivo
[`LICENSE`](./LICENSE), que exige:

- **A assinatura "eljoaogg" do rodapé não pode ser removida nem alterada.**
  Isso vale para `components/Signature.tsx`, `config/author.ts` e o link para o
  GitHub do autor, em qualquer cópia, fork ou versão derivada que seja publicada.
- **Você pode modificar o código** e usar o conteúdo da sua própria comunidade (textos, regras, leis, cores, logo).
- **O nome "Cidade Nova Roleplay" (CNV), o logo, as imagens e os textos da CNV são de uso exclusivo da Hyper Squad.**
  Eles não são licenciados, e não podem ser usados nem copiados sem autorização
  por escrito da Hyper Squad. Troque tudo isso pelo conteúdo da sua comunidade.
- **Contribuições ao repositório oficial exigem aprovação manual do autor.**
  Envie um Pull Request; nada é incorporado sem revisão.

Quem remover ou alterar a assinatura perde o direito de usar o projeto.

## Contribuindo

Abra um Pull Request. Alterações na assinatura, na licença e na pasta `.github/`
não são aceitas. Todas as demais passam por revisão do autor.
