Este projeto foi desenvolvido durante o Bootcamp 1 com o objetivo de criar um site de portfólio pessoal, apresentando minhas habilidades, projetos e informações profissionais de forma moderna e responsiva.

Descrição do Projeto
Este repositório contém o Projeto Final do Bootcamp 1, focado na migração, implantação e governança de infraestrutura estática. O ecossistema inicial do portfólio acadêmico, desenvolvido originalmente no Google Sites, passou por um processo de engenharia reversa e exportação de artefatos para ser publicado de forma independente e controlada via Git no GitHub Pages.A solução centraliza o histórico de aprendizado do curso de Engenharia de Software, integrando documentos técnicos de requisitos e matrizes de habilidades mantidos sob governança no Google Workspace.Tecnologias e Ferramentas Utilizadas 
Hospedagem e CI/CD: GitHub Pages e GitHub ActionsControle de Versão: Git e GitHub
Ambiente de Origem e Produtividade: Google Workspace (Sites, Docs, Slides, Takeout)
Linguagens de Estruturação: HTML5 e CSS3 estáticosPlano de Implantação Executado (DEPLOYSPEC)
Fase 1: Engenharia Reversa e ExtraçãoExtração de Ativos: Utilização do Google Takeout para gerar o pacote estruturado .zip contendo os elementos visuais e páginas do Google Sites.Higienização do Código: Descompactação local e refatoração da página raiz para o padrão de indexação web mandatório (index.html).Configuração de Permissões: Ajuste global nos artefatos complementares (Currículo no Google Docs e Habilidades no Google Slides) para o modo público de leitura.
Fase 2: Versionamento e DeployInicialização do Repositório: Configuração do Git local e vinculação ao repositório remoto via SSH/HTTPS.
Publicação em Produção: Provisionamento do ambiente do GitHub Pages apontando para a branch main na raiz do projeto.Homologação: Validação do carregamento dos links incorporados e comportamento responsivo da interface.
Políticas de Segurança e GovernançaPara garantir a integridade do código e a privacidade dos dados conforme os critérios de avaliação, foram aplicadas as seguintes diretrizes: 
Princípio do Privilégio Mínimo: Permissões de escrita estritamente restritas, utilizando regras de proteção de branch (Branch Protection Rules) na branch main para evitar commits diretos sem revisão.
Segurança de Dados (LGPD): Ofuscação de dados sensíveis e pessoais nos documentos públicos (mantendo apenas links corporativos como LinkedIn e e-mail).
Segurança de Código: Monitoramento ativo via Secret Scanning do GitHub para prevenir o vazamento acidental de tokens ou chaves de API do ecossistema Google.
