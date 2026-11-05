# Guia de personalização

Tudo que aparece no site vem de `config/site.ts`. Você não precisa mexer na interface
para trocar o conteúdo.

## O que trocar (obrigatório)

Se você não é da Hyper Squad, substitua **todo** o conteúdo da CNV:

| O que | Onde |
|-------|------|
| Nome da comunidade | `siteConfig.name` e `siteConfig.shortName` |
| Descrição | `siteConfig.description` |
| Link do Discord | `siteConfig.discordUrl` |
| História | `storyConfig.paragraphs` (um texto por item, separados por vírgula) |
| Sistemas | `systemsConfig.systems` |
| Regras | `rulesConfig.rules` e `rulesConfig.safeZones` |
| Leis | `lawsConfig.laws` |
| Logo | arquivo `public/logo.png` |
| Título e textos do Hero | `app/page.tsx` (seção Hero) |

## Adicionar uma regra, sistema ou lei

Copie um item existente e mude os campos. Cada item tem um ícone do
[lucide-react](https://lucide.dev/icons/): importe o ícone no topo do arquivo e use-o em `icon`.

```ts
import { Shield } from "lucide-react";

{
  icon: Shield,
  title: "Nova regra",
  description: "Explique a regra aqui.",
},
```

## Cores

As cores ficam em `tailwind.config.ts` (`cnv.red`, `cnv.neon`) e em `app/globals.css`.

## O que NÃO pode mudar

- `components/Signature.tsx` e `config/author.ts` (assinatura "eljoaogg").
- O arquivo `LICENSE`.

Veja o [`BRAND.md`](../BRAND.md).

## Erros comuns

- **"Expected ','"** no build: faltou vírgula entre dois itens de um array ou objeto.
- **"Functions cannot be passed directly to Client Components"**: não passe ícones ou funções como props para componentes com `"use client"`. Importe os dados direto do `config/site.ts`.
