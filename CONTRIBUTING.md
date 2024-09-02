# Como contribuir com o nosso Blog

Primeiramente, estamos muito felizes que você deseja contribuir com nosso blog! 😄

Abaixo estão algumas instruções em como contribuir de diferente formas. 👇🏽

## Corrigindo um erro em algum Blog Post

Caso você encontre algum problema em algum post, fique a vontade para corrigir!

Esses são os passos que você deve seguir:

- Faça o fork do projeto
- No seu fork, crie uma branch a partir da main com a descrição do problema. Ex: `git checkout -b fix/correção-no-post-xyz`
- Os posts estão na pasta `src/content/blog`
- Faça a correção
- Teste executando `npm start` e verificando se tudo está ok no navegador
- Crie uma Pull Request apontando para a branch `main`

Pronto! Sua contribuição vai ser muito bem vinda. 😁

## Criando um Blog Post

Que massa que você quer publicar algo no nosso Blog!

Esses são os passos que você deve seguir:

- Faça o fork do projeto
- No seu fork, crie uma branch a partir da `main` com a descrição do novo post. Ex: `git checkout -b feat/novo-post-xyz`
- Os posts estão na pasta `src/content/blog`
- Crie um novo arquivo com a extensão `.mdx`. Ex: `meu-novo-post.mdx`
- Coloque a imagem de capa do seu post na pasta `public/images/posts` com o nome do seu post (ex: `facade-pattern-in-angular.png`)
- Aplique os frontmatters necessário. Você pode se basear nos posts que já existem.
- Se for seu primeiro post no Blog, adicione seus dados em `src/data/authors.ts` no array `authors`.
- Coloque a sua foto de perfil na pasta `public/images/authors` com seu nome.
- No frontmatter do post, use o valor da propriedade `id` que você criou nos dados do autor para popular a variável `authorId` (no frontmatter)
- Se a categoria do seu post ainda não existir no Blog, adicione a mesma em `src/data/supported-categories.ts`
- Verifique se seu post está ok, executando `npm start`
- Crie uma Pull Request apontando para a branch `main`

Pronto! Agora é só aguardar nossa revisão. 😁
