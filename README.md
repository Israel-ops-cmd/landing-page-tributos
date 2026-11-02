# Tributos Contabilidade

Landing page do escritório Tributos Contabilidade (Natal/RN). Página estática em um único arquivo, `index.html`, com CSS e JS embutidos.

## Como editar

O `index.html` é gerado a partir de `_build/`:

- `_build/template.html`: estrutura, estilos e animações
- `_build/data.json`: endereço do site (para a prévia do link), WhatsApp e horário
- `_build/map_br.py`: gera o mapa do Brasil em pontos
- `_build/og.html`: arte da prévia do link (`og.png`, 1200x630)

A página não usa fotos: os visuais (celular com WhatsApp, painéis, mapa) são feitos em HTML/CSS/SVG.

Link para a bio do Instagram: `?utm_source=instagram` no fim do endereço faz as mensagens do WhatsApp dizerem "Vim pelo Instagram".

Depois de editar, gere a página de novo:

```
cd _build && python3 build.py ../index.html
```

Requer apenas Python 3.

## Deploy

Vercel, sem etapa de build (`vercel.json`). Cada push na `main` publica o site.
