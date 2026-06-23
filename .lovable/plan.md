## Contexto

A ferramenta já está 100% em um único arquivo `public/certificado.html` (HTML + CSS + JS puro, com libs via CDN). O "React" que mencionaram é só a casca do projeto Lovable (TanStack Start) que atualmente faz um redirect de `/` para `/certificado.html` — isso causa um flash feio ao publicar e parece que "tem React no meio".

Não dá pra remover totalmente a casca (a plataforma Lovable precisa dela pra buildar e publicar), mas dá pra fazer a ferramenta aparecer direto em `/` sem redirect e sem React renderizando UI. O JavaScript da ferramenta precisa continuar existindo — é ele que gera PDF, PNG e o ZIP em lote. Sem JS, não tem como baixar nada.

## O que vou fazer

1. **Remover o redirect** em `src/routes/index.tsx`. No lugar, a rota `/` vai renderizar um `<iframe>` ocupando 100% da tela apontando para `/certificado.html`. Resultado: ao abrir o site publicado, o usuário já vê a ferramenta direto, sem flash nem clique.

2. **Atualizar o `<title>` e meta description** da rota `/` para refletir a ferramenta (melhora o compartilhamento e o SEO da URL publicada).

3. **Manter `public/certificado.html` intacto** — é o arquivo único HTML/CSS/JS que faz todo o trabalho. Continua acessível também em `/certificado.html` direto.

## O que NÃO muda

- A ferramenta continua client-side, sem backend, sem banco.
- Continua usando jsPDF, html2canvas, JSZip e PapaParse via CDN (necessários para PDF/PNG/CSV — não dá pra fazer essas três coisas só com HTML/CSS).
- Layout 1920×1080, cores por tempo de casa, preview responsivo, upload CSV e ZIP em lote: tudo preservado.

## Resultado

Ao publicar, a URL pública abre direto na ferramenta. Nenhuma página React visível pro usuário final.