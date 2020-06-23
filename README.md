# Boas vindas ao repositório para os alunos da Trybe tirarem dúvidas juntos!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para criar um PR que contenha os exercícios que você deseja resolver em grupo e conteúdos para mencionarmos juntos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar nossa colaboração usando esse repositório, utilizando uma branch específica e um _Pull Request_ .

---

## Instruções para entregar sua lista de elementos para estudarmos todos juntos:

### ANTES DE COMEÇAR:


Como pre-condição para participar do presente repositório, tenha certeza de ter sido colocado ou convidado como colaborador do repositório, falando com os seus admin [Lizzard](https://github.com/LizzardMedeiros) ou [Juliette](https://github.com/juliettebeaudet), assim como ter efetivamente aceito o convite recebido por email.

1. Clone o repositório
  * `git clone https://github.com/LizzardLearning/trybe-tiraduvidas.git`.
  * Entre na pasta do repositório que você acabou de clonar:
  * `cd nomedapasta (descubra esse nomedapasta com um ls)`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os seus `commits` 
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-tiraduvidas`
    * Exemplo: `git checkout -b john-doe-zoo-tiraduvidas`

3. Crie sua pasta e, dentro dela, seus arquivos contendo os exercícios, conteúdos e diversos elementos que gostaria de trazer para resolução ou aprendizagem conjunta.

* Sugestão de nome para a pasta: `conteudoexplicito-outroconteudoexplicito-data`
    * Exemplo: `CSSflexbox-JShofs-20.06.2020`
 * Sugestão de nome para cada arquivo: `conteudoexplicito`
    * Exemplos: `flexbox.css`,`hofs.js`, `exemplo.html`  
    

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'bora aprender juntos!'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin john-doe-tiraduvidas`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/LizzardLearning/trybe-tiraduvidas/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/LizzardLearning/trybe-tiraduvidas/pulls) e confira que o seu _Pull Request_ está criado.
  
  
### CUIDADOS NECESSÁRIOS PARA EVITARMOS CONFLITOS:

Aqui, preste bastante atenção porque já que todas as branch vão receber Merge pelos admin do repositório, temos que evitar conflitos.
É apenas observar bem as seguintes recomendações:

#### 1. Sempre atualize sua branch
Depois de cada push e na hora de participar de novo no repositório, sempre faça um `git pull` primeiro para atualizar a sua branch. 

#### 2. Organize suas contribuições por pastas diferentes
Na hora de participar de novo no repositório, apenas `adicione desde sua branch uma nova pasta com novo nome, novos conteúdos e novos arquivos do seu interesse` e va até o `push`!

Também é melhor que não modifique as pastas que vc já submeteu quando já foram usadas durante sessões anteriores de tiraduvidas, pois a gente jà terá dado Merge nelas e achamos relevante `conservar algum histórico das dúvidas que já foram estudadas em conjunto`. 

  
  
  
  

### Links Úteis

 * Referências JS - https://www.w3schools.com/jsref/default.asp
 * Como aprender a programar - https://www.youtube.com/watch?v=ZtMzB5CoekE

### Tirar dúvidas juntos

Agora é só esperar o momento marcado de tirarmos dúvidas e aprender juntos! Entre na sala Zoom no horário combinado. VQV!
