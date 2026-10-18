# Tributos Contabilidade

Landing page do escritório Tributos Contabilidade (Natal/RN). Página estática em um único arquivo, `index.html`, com CSS e JS embutidos.

## Como editar

O `index.html` é gerado a partir de `_build/`:

- `_build/template.html`: estrutura, estilos e animações
- `_build/data.json`: WhatsApp, endereço, horário e depoimentos
- `_build/imagens/`: imagens originais (são convertidas para WebP e embutidas)

Depois de editar, gere a página de novo:

```
cd _build && python3 build.py ../index.html
```

Requer Python 3 com Pillow (`pip install pillow`).

## Deploy

Vercel, sem etapa de build (`vercel.json`). Cada push na `main` publica o site.
