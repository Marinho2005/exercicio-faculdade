export type Tecnologia = 'HTML' | 'CSS' | 'React' | 'Git' | 'Vercel'

export type Status = 'Concluída' | 'Em andamento' | 'Planejada'

export interface Atividade {
  id: number
  numero: number
  titulo: string
  descricao: string
  tecnologia: Tecnologia
  status: Status
  aprendizagem: string
  evidencia: string
  link?: string
}

export const atividades: Atividade[] = [
  {
    id: 1,
    numero: 1,
    titulo: 'Preparar o ambiente',
    descricao:
      'Verifiquei o Node.js, o npm, o Git e o editor, depois criei o projeto React com Vite e o executei localmente.',
    tecnologia: 'Git',
    status: 'Concluída',
    aprendizagem:
      'Executar `node -v` e `npm -v` antes de começar evita surpresas de versão no meio do projeto.',
    evidencia: 'Cartão 1 com as versões das ferramentas e a confirmação de ambiente pronto.',
  },
  {
    id: 2,
    numero: 2,
    titulo: 'Inicializar o repositório Git',
    descricao:
      'Iniciei o controle de versões com git init, validei o .gitignore e defini a branch principal como main.',
    tecnologia: 'Git',
    status: 'Concluída',
    aprendizagem:
      'Um repositório guarda o histórico; um commit é uma foto de um momento e uma branch é uma linha de trabalho.',
    evidencia: 'Card 2 explicando repositório, commit e branch.',
  },
  {
    id: 3,
    numero: 3,
    titulo: 'Construir a estrutura semântica',
    descricao:
      'Estruturei a aplicação usando header, nav, main, section e footer com apenas um h1 principal.',
    tecnologia: 'HTML',
    status: 'Concluída',
    aprendizagem:
      'Elementos semânticos descrevem o significado do conteúdo e ajudam leitores de tela e buscadores.',
    evidencia: 'Card 3 identificando os elementos semânticos usados.',
  },
  {
    id: 4,
    numero: 4,
    titulo: 'Criar cabeçalho e identidade',
    descricao:
      'Adicionei nome, curso, descrição objetiva, avatar com texto alternativo e um botão para as atividades.',
    tecnologia: 'HTML',
    status: 'Concluída',
    aprendizagem:
      'Imagens precisam de texto alternativo adequado para quem não as enxerga.',
    evidencia: 'Cabeçalho completo e Card 4 descrevendo as escolhas de identidade.',
  },
  {
    id: 5,
    numero: 5,
    titulo: 'Criar menu de navegação',
    descricao:
      'Criei links internos para Início, Sobre, Atividades e Contato com âncoras, rolagem suave e foco visível.',
    tecnologia: 'HTML',
    status: 'Concluída',
    aprendizagem:
      'Âncoras com id e scroll-behavior suavizam a navegação sem JavaScript.',
    evidencia: 'Menu funcional e Card 5 com o teste dos links.',
  },
  {
    id: 6,
    numero: 6,
    titulo: 'Definir o sistema visual',
    descricao:
      'Defini variáveis CSS para cores, espaçamentos, raios e sombras, com fontes legíveis e normalização básica.',
    tecnologia: 'CSS',
    status: 'Concluída',
    aprendizagem:
      'Variáveis centralizam o design: mudar uma cor no :root altera o site inteiro.',
    evidencia: 'Card 6 mostrando a paleta, a tipografia e os espaçamentos adotados.',
  },
  {
    id: 7,
    numero: 7,
    titulo: 'Construir cartões de atividades',
    descricao:
      'Criei o cartão com número, título, descrição, tecnologia e ação, incluindo estados de hover e foco.',
    tecnologia: 'CSS',
    status: 'Concluída',
    aprendizagem:
      'Transições e levantar o cartão no hover deixam a interface viva sem atrapalhar a leitura.',
    evidencia: 'Card 7 demonstrando todos os estados visuais do componente.',
  },
  {
    id: 8,
    numero: 8,
    titulo: 'Organizar o layout com Flexbox',
    descricao:
      'Usei Flexbox no cabeçalho, menu e grupo de botões, testando justify-content, align-items e gap.',
    tecnologia: 'CSS',
    status: 'Concluída',
    aprendizagem:
      'Flexbox centraliza e distribui itens em uma direção com poucas linhas.',
    evidencia: 'Card 8 com uma demonstração comparativa de alinhamento.',
  },
  {
    id: 9,
    numero: 9,
    titulo: 'Organizar atividades com CSS Grid',
    descricao:
      'Usei CSS Grid na seção de atividades com repeat(auto-fit, minmax(...)), sem larguras fixas.',
    tecnologia: 'CSS',
    status: 'Concluída',
    aprendizagem:
      'Grid distribui as colunas automaticamente pelo espaço disponível.',
    evidencia: 'Cards distribuídos em grade e Card 9 explicando a regra usada.',
  },
  {
    id: 10,
    numero: 10,
    titulo: 'Tornar a homepage responsiva',
    descricao:
      'Criei media queries e testei em larguras de 360px, 768px e 1440px, ajustando menu, grade e tipografia.',
    tecnologia: 'CSS',
    status: 'Concluída',
    aprendizagem:
      'Media queries adaptam a interface ao dispositivo, não à vontade.',
    evidencia: 'Card 10 com os três tamanhos testados e problemas corrigidos.',
  },
  {
    id: 11,
    numero: 11,
    titulo: 'Criar o componente Cabecalho',
    descricao:
      'Transformei a marcação do cabeçalho no componente Cabecalho.tsx e o importei no App.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Componentes dividem a interface em partes com responsabilidade única.',
    evidencia: 'Card 11 informando arquivo, responsabilidade e local de uso.',
  },
  {
    id: 12,
    numero: 12,
    titulo: 'Criar o componente Rodape',
    descricao:
      'Criei o Rodape.tsx com nome do autor, ano calculado e função de voltar ao início.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Calcular o ano com new Date().getFullYear() evita conteúdo desatualizado.',
    evidencia: 'Rodapé funcional e Card 12 explicando o componente.',
  },
  {
    id: 13,
    numero: 13,
    titulo: 'Criar o CardAtividade com props',
    descricao:
      'Criei o CardAtividade.tsx recebendo número, título, descrição, tecnologia e link por props.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Props tornam o componente reutilizável com dados diferentes.',
    evidencia: 'Card 13 explicando quais props o componente recebe.',
  },
  {
    id: 14,
    numero: 14,
    titulo: 'Modelar os dados das atividades',
    descricao:
      'Criei um array de objetos em arquivo próprio com id, numero, titulo, descricao, tecnologia, status e link.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Separar conteúdo da apresentação facilita manter e reutilizar dados.',
    evidencia: 'Card 14 mostrando um objeto de exemplo formatado visualmente.',
  },
  {
    id: 15,
    numero: 15,
    titulo: 'Renderizar a lista com map',
    descricao:
      'Usei map para transformar o array em componentes CardAtividade com key estável e numeração de 1 a 30.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'map cria listas no React; a key ajuda a identificar cada item da lista.',
    evidencia: 'Card 15 descrevendo a diferença entre array, map e key.',
  },
  {
    id: 16,
    numero: 16,
    titulo: 'Mostrar status condicional',
    descricao:
      'Apresentei os status Planejada, Em andamento e Concluída com classes visuais diferentes.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Renderização condicional exibe um conteúdo ou outro conforme o estado.',
    evidencia: 'Card 16 permitindo visualizar os três estados possíveis.',
  },
  {
    id: 17,
    numero: 17,
    titulo: 'Criar filtro por tecnologia',
    descricao:
      'Adicionei botões Todos, HTML, CSS, React, Git e Vercel que filtram os cartões sem alterar o array original.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'useState guarda o filtro; o filtro é só uma derivação da lista completa.',
    evidencia: 'Card 17 e filtro funcionando sobre a lista completa.',
  },
  {
    id: 18,
    numero: 18,
    titulo: 'Criar busca por texto',
    descricao:
      'Adicionei um campo de busca controlado que filtra por título ou descrição, sem diferenciar maiúsculas.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Campos controlados sincronizam o valor digitado com o estado.',
    evidencia: 'Card 18 e busca funcional, incluindo estado sem resultados.',
  },
  {
    id: 19,
    numero: 19,
    titulo: 'Criar contador de progresso',
    descricao:
      'Calculei quantas atividades estão concluídas e exibi "concluídas de 30" sem armazenar valor calculado.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Valores derivados dos dados não precisam viver no estado.',
    evidencia: 'Card 19 com contador atualizado automaticamente.',
  },
  {
    id: 20,
    numero: 20,
    titulo: 'Criar barra de progresso',
    descricao:
      'Criei uma barra acessível com valor textual e atributos adequados que mostra 0% e 100% corretamente.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Atributos como role="progressbar" tornam a barra compreensível para leitores de tela.',
    evidencia: 'Card 20 e barra sincronizada com o contador.',
  },
  {
    id: 21,
    numero: 21,
    titulo: 'Criar modal de detalhes',
    descricao:
      'Abri detalhes ao clicar em "Ver atividade", com fechamento por botão, tecla Escape e área externa.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Um modal precisa de foco e teclas previsíveis para quem navega sem mouse.',
    evidencia: 'Card 21 abrindo um modal com descrição, aprendizagem e evidência.',
  },
  {
    id: 22,
    numero: 22,
    titulo: 'Criar formulário de contato',
    descricao:
      'Montei nome, e-mail, assunto e mensagem com labels, required e confirmação simulada no envio.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Campos controlados e validação no navegador melhoram a experiência sem backend.',
    evidencia: 'Card 22 abrindo ou destacando o formulário funcionando.',
  },
  {
    id: 23,
    numero: 23,
    titulo: 'Implementar alternância de tema',
    descricao:
      'Adicionei um botão que alterna entre tema claro e escuro aplicando um atributo no elemento raiz.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Um atributo no <html> permite o CSS trocar todas as cores de uma vez.',
    evidencia: 'Card 23 demonstrando e explicando a troca de tema.',
  },
  {
    id: 24,
    numero: 24,
    titulo: 'Persistir preferência local',
    descricao:
      'Salvei o tema no localStorage, leio a preferência ao iniciar e uso um valor padrão quando não há dado.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'localStorage guarda a preferência e a restaura entre sessões.',
    evidencia: 'Card 24 informando a chave usada e como a preferência é restaurada.',
  },
  {
    id: 25,
    numero: 25,
    titulo: 'Adicionar seção Sobre',
    descricao:
      'Criei o componente Sobre com texto autoral, tecnologias praticadas e links profissionais.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'A seção Sobre comunica autoria e competências com honestidade.',
    evidencia: 'Card 25 direcionando para a seção Sobre.',
  },
  {
    id: 26,
    numero: 26,
    titulo: 'Revisar acessibilidade',
    descricao:
      'Revisei headings, labels, alt, foco, contraste e uso por teclado, evitando cor como único sinal de status.',
    tecnologia: 'React',
    status: 'Concluída',
    aprendizagem:
      'Acessibilidade é um conjunto de verificações, não um único recurso.',
    evidencia:
      'Verificações: headings em ordem, labels associados, alt descritivo, foco visível, contraste e navegação por teclado.',
  },
  {
    id: 27,
    numero: 27,
    titulo: 'Criar o README do projeto',
    descricao:
      'Documentei instalação, execução, tecnologias, estrutura e links no README.md.',
    tecnologia: 'Git',
    status: 'Concluída',
    aprendizagem:
      'Um bom README permite que outra pessoa rode o projeto sem dúvidas.',
    evidencia:
      'Card 27 abrindo a documentação do projeto.',
    link: 'https://github.com/Marinho2005/faculdade',
  },
  {
    id: 28,
    numero: 28,
    titulo: 'Organizar o histórico Git',
    descricao:
      'Revisei git status e git log, garanti commits descritivos e criei a tag v1.0.0 após a versão final.',
    tecnologia: 'Git',
    status: 'Concluída',
    aprendizagem:
      'Histórico limpo e tags marcam entregas importantes no projeto.',
    evidencia: 'Card 28 resumindo commits, branch e tag criada.',
  },
  {
    id: 29,
    numero: 29,
    titulo: 'Enviar ao repositório remoto',
    descricao:
      'Associei o repositório remoto e enviei a branch main e a tag v1.0.0 ao GitHub.',
    tecnologia: 'Git',
    status: 'Concluída',
    aprendizagem:
      'git push publica o histórico e habilita trabalho em equipe.',
    evidencia: 'Card 29 contendo o link do repositório remoto.',
    link: 'https://github.com/Marinho2005/faculdade',
  },
  {
    id: 30,
    numero: 30,
    titulo: 'Publicar e validar na Vercel',
    descricao:
      'Importei o repositório na Vercel, confirmei o build e publiquei, testando menu, filtros, busca, modal e formulário.',
    tecnologia: 'Vercel',
    status: 'Planejada',
    aprendizagem:
      'Deploy na Vercel é contínuo: cada push gera uma publicação nova.',
    evidencia:
      'Card 30 com o link da aplicação publicada e o checklist final de testes.',
  },
]
