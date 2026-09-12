# Portfólio de Atividades de Desenvolvimento Web

Portfólio acadêmico de Victor Marinho com 30 atividades sobre HTML, CSS, React, TypeScript, Git e publicação na Vercel. A interface permite filtrar e buscar atividades, acompanhar o progresso e abrir detalhes de cada etapa.

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS responsivo, Flexbox e Grid
- Git e GitHub
- Vercel

## Pré-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Como executar

```bash
git clone git@github.com:Marinho2005/faculdade.git
cd faculdade
npm install
npm run dev
```

Acesse o endereço exibido pelo Vite no terminal.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # verificação TypeScript e build de produção
npm run lint     # análise estática com Oxlint
npm run preview  # visualização local do build
```

## Estrutura principal

```text
src/
├── assets/       # imagens do projeto
├── components/   # componentes React da interface
├── data/         # dados tipados das 30 atividades
├── styles/       # estilos globais e temas
├── App.tsx       # composição da página
└── main.tsx      # ponto de entrada
```

## Recursos implementados

- 30 cartões gerados por dados tipados
- Filtro por tecnologia e busca textual
- Contador e barra de progresso acessível
- Modal de detalhes com suporte a teclado
- Formulário controlado com validação
- Tema claro/escuro persistido no `localStorage`
- Layout responsivo e navegação acessível

## Links

- [Repositório no GitHub](https://github.com/Marinho2005/faculdade)
- Aplicação na Vercel: será adicionada após a publicação
- [Perfil do autor no GitHub](https://github.com/Marinho2005)

## Versionamento

O projeto usa a branch principal `main` e commits pequenos e descritivos. Para revisar o histórico e publicar a versão marcada:

```bash
git status
git log --oneline
git push -u origin main
git push origin v1.0.0
```

## Publicação na Vercel

1. Acesse [vercel.com](https://vercel.com/) e entre com a conta vinculada ao GitHub.
2. Selecione **Add New > Project** e importe `Marinho2005/faculdade`.
3. Mantenha o framework **Vite**, o comando de build `npm run build` e o diretório de saída `dist`.
4. Clique em **Deploy** e teste navegação, filtros, busca, modal, formulário e tema na URL publicada.
5. Substitua o campo pendente na seção Links e o link da atividade 30 pela URL real.

## Relato final

- Combinar busca e filtro sem alterar os dados originais: resolvi criando listas derivadas com `filter`.
- Tornar o modal utilizável por teclado: adicionei foco inicial, fechamento por Escape e retorno ao botão acionador.
- Manter o tema entre sessões: sincronizei o atributo `data-tema` do HTML com o `localStorage`.

Minha atividade favorita foi o modal de detalhes, porque reuniu estado React, eventos, conteúdo dinâmico e acessibilidade em uma interação completa.

## Autor

Victor Marinho, estudante de Desenvolvimento Web, 3º período.
