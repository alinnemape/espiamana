# IGARITÉ — site do projeto

Site estático (HTML + CSS), pronto pra hospedar de graça. Sem necessidade de programação avançada — as instruções abaixo cobrem tudo que você precisa pra editar e publicar.

## O que tem nesta pasta

```
site/
├── index.html          → Home
├── no-video.html        → Tô no Vídeo
├── catalogo.html         → Catálogo
├── realizadores.html     → Realizadores
├── discussoes.html       → Discussões
├── noticias.html          → Notícias
├── na-midia.html          → Tô na Mídia
├── contato.html           → Fale com a Gente
├── style.css               → todo o visual do site (cores, fontes, layout)
├── script.js                → só o menu do celular
```

Todas as páginas puxam o mesmo `style.css`, então qualquer mudança de cor ou fonte que você fizer nesse arquivo muda o site inteiro de uma vez.

---

## PASSO A PASSO — publicar de graça no GitHub Pages

**1. Crie uma conta no GitHub**
Vá em [github.com](https://github.com) → "Sign up" → e-mail, senha, nome de usuário.

**2. Crie um repositório novo**
- Clique no `+` no canto superior direito → "New repository"
- Nome do repositório: escreva algo como `site-igarite` (ou o nome que você escolher pro projeto)
- Deixe como **Public**
- Não marque nenhuma caixa (nem README, nem .gitignore) — sua pasta já tem tudo
- Clique em "Create repository"

**3. Suba os arquivos**
Na página do repositório recém-criado, vai ter um link "uploading an existing file" (ou "Add file" → "Upload files").
- Arraste **todos os arquivos e pastas** desta pasta `site/` (incluindo a pasta `imagens/`) pra essa área
- Espere o upload terminar
- Escreva uma mensagem tipo "primeira versão do site" e clique em "Commit changes"

**4. Ative o GitHub Pages**
- No repositório, vá em **Settings** (aba no topo)
- No menu da esquerda, clique em **Pages**
- Em "Branch", selecione `main` e a pasta `/ (root)` → clique em **Save**
- Espere 1–2 minutos e atualize a página — vai aparecer um link tipo:
  `https://seu-usuario.github.io/site-igarite/`

Pronto — esse link já é o seu site no ar, de graça, sem precisar comprar nada.

---

## Como editar o conteúdo

Você pode editar os arquivos `.html` direto no GitHub (clique no arquivo → ícone de lápis "Edit") ou baixar a pasta, editar num editor de texto (recomendo o **VS Code**, gratuito) e subir de novo.

**Trocar um texto:** procure o texto entre `[colchetes]` — são os lugares que eu deixei marcados pra você preencher — e escreva o seu conteúdo no lugar, sem os colchetes.

**Trocar o nome do projeto ("IGARITÉ"):** use "Localizar e substituir" (Ctrl+F ou Cmd+F no editor) em todos os arquivos `.html` e troque `IGARITÉ` pelo nome que você escolher. Outras ideias de nome amazônico: *Piracema*, *Tipiti*, *Matupá*, *Aperoí* (nome da própria aldeia).

**Adicionar uma foto:**
1. Coloque o arquivo de imagem dentro da pasta `imagens/`
2. No HTML, troque um bloco como este:
   ```html
   <div class="hero-frame">...</div>
   ```
   por:
   ```html
   <img src="imagens/nome-da-foto.jpg" alt="descrição da foto">
   ```

**Adicionar um vídeo do YouTube:** cole isto no lugar do quadro de vídeo (`hero-frame`), trocando `SEU_ID_AQUI` pelo código que aparece na URL do vídeo do YouTube (depois de `v=`):
```html
<iframe width="100%" style="aspect-ratio:16/9; border:0; border-radius:6px;"
  src="https://www.youtube.com/embed/SEU_ID_AQUI" allowfullscreen></iframe>
```

**Duplicar um card (novo filme, notícia, pessoa):** copie um bloco inteiro `<div class="card">...</div>` (ou `<div class="person">...</div>`, ou `<div class="list-item">...</div>`) e cole logo abaixo dele, dentro do mesmo `<div class="grid">` ou `<div class="people-grid">`. Depois só troque o texto.

**Mudar uma cor:** abra `style.css`, procure a seção `:root` no topo — lá estão todas as cores do site nomeadas (`--bg`, `--clay`, `--blue`...). Troque o código hexadecimal (`#C97A3D`) por outro e a cor muda no site inteiro.

---

## Sobre o formulário de contato

O formulário da página `contato.html` ainda não envia e-mail de verdade — ele só existe visualmente. Pra ativar de graça (sem precisar de servidor próprio):

1. Crie uma conta grátis em [formspree.io](https://formspree.io)
2. Crie um "New Form" e copie o link que ele te dá (tipo `https://formspree.io/f/xxxxxxx`)
3. No `contato.html`, troque `<form>` por `<form action="https://formspree.io/f/xxxxxxx" method="POST">`

O plano grátis do Formspree permite até 50 mensagens por mês, o que costuma ser suficiente pra esse tipo de projeto.

---

## Se quiser testar no computador antes de publicar

Basta dar dois cliques no arquivo `index.html` — ele abre no navegador. Os links entre as páginas funcionam normalmente, mesmo sem internet.

---

## Se travar em algum passo

Volta aqui na conversa comigo e me conta exatamente o que apareceu na tela — eu te ajudo a resolver.
