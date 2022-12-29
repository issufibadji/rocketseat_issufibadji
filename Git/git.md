# Sistemas distribuídos

Há também, o melhor dos dois mundos, os chamados sistemas distribuídos, alguns exemplos incluem Git, Mercurial, Bazaar e Daarcs

Ele vai duplicar (clonar) localmente o repositório completo, e se qualquer servidor morrer enquanto algum sistema estiver colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor, e cada clone é um backup completo de todos os dados, isso sem falar que os clientes usam o estado mais recente dos arquivos.

# O que é o git

É um sistema de controle de versão distribuído, é open-source, então além de gratuito seu código é aberto, e permite que você volte a qualquer ponto na história do projeto, já que cada alteração no código cria um commit, e cada commit é um ponto na história.

Também pode controlar o fluxo de novas funcionalidades, através das ramificações (branch), que funcionam como universos paralelos, onde além do projeto principal, você pode criar uma linha alternativa, adicionar pontos na mesma e depois uni-la novamente à linha principal, sem falar na possibilidade de poder trabalhar com vários devs ao mesmo tempo, analisando e resolvendo conflitos, porém nesse curso não falaremos sobre essas ramificações, teremos mais foco em nossos próprios projetos, as ramificações ficarão para outro curso.

# Instalando git no Mac

Descrição
Caso não tenha o git instalado na sua maquina, acesse https://git-scm.com/ e siga as instruções.

Copie e cole no seu terminal o seguinte comando:

`sudo apt-get install git`

Para checar a instalação, digite no seu terminal:

`git --version`
Se aparecer a versão do git, ele foi instalado com êxito.

# Configuração inicial

Primeiramente, abra o seu terminal e digite:

`git config --global user.name "Seu nome completo entre aspas"`
`git config --global user.email seuemailaqui@dominio.com`

Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção --global dentro daquele projeto.

Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:

`git config --global core.editor "code -w"`
Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:

`git config --list`

# Resumo GIT

- `sudo apt-get install git` : instalar git

- `git --version`: Ver version

- `git config --global user.name "Seu nome completo entre aspas"`: configuração do nome de usuário

- `git config --global user.email seuemailaqui@dominio.com`:configuração do email do usuário

- `git config --global core.editor "code -w"`: configuração de editor

- `git config --list`:listar configuração

- `&&` : encadear comandos, ex: `git add . && git commit -m "msg"`

- `git log` : ver log de commits (`--oneline` mostra só comentários)

- `git status` : ver status da stage area e arquivos não versionados

- `git <comando> --help` : abre a documentação

- `git init` : iniciar repositório

- `git clone <caminho/link github>` : clonar repositório

- `git add .` : stage todos os arquivos, para arquivos específicos, colocar o nome em vez do ponto

- `git commit -m "Escrever mensagem aqui"` : commit das mudanças

- `git commit -am "Mensagem"` : encadeia add e commit para arquivos já versionados

- `git commit --amend -m "Nova mensagem` : alterar último commit (arquivos / msg)

- `git restore <filename>` : restaurar arquivo descartando alterações

- `git restore --staged <filename>` : remover arquivo da stage area (não reverte alterações)

- `git rm --cached <filename>` : remover do versionamento

- `git rm <filename>` : deleta o arquivo e coloca a mudança na stage area

- `git diff` : mostra as modificações em arquivos versionados mas não commitados ou na stage area

- `git diff --staged` : modificações nos arquivos da staged area

- `git mv <name1> <name2>` : mover ou renomear arquivos

- `git checkout <commit code> -- <filename>` : restaura um arquivo de algum commit, o commit code são os primeiros 7 digs do commit

- `git revert HEAT~<number>` : reverte todos os arquivos para <number> commits antes do atual

- `git show <commit code>` : mostra as modificações inseridas por um commit, usar `--color-words` para destacar palavras alteradas

- `git log --oneline --graph --all`:mostra um gráfico com as modificações, commits são resumidos para uma linha. Adicionar `-10` para imprimir apenas 10 commits (ou outro número). Adicionar `--simplify-by-decoration` para simplificar o histórico

- `git log --graph --all --oneline --pretty=format:'%C(yellow)%h%C(reset)%C(auto)%d%C(reset) %C(white)%s%C(reset) %C(magenta)[%an]%C(reset) %C(cyan)(%ar)%C(reset)' -5`: gráfico de commits personalizado. Adicionar como alias de `git tree` em: ~/.gitconfig

[Referências adicionais](https://rogerdudler.github.io/git-guide/index.pt_BR.html)

# Git help

Para termos ajuda com o git, podemos usar o comando git help, onde você vai obeter informações sobre praticamente tudo no git, basta colocar git help + a área (exibida com o comando git help) na qual sua dúvida se encaixa e procurar sua resposta.

Para sair do menu de ajuda, use o comando :q
