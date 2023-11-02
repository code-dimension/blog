---
title: 'Signals: O que é e como utilizar'
description: Entenda como usar essa maravilhosa funcionalidade do Angular 16
pubDate: '2023-07-03T01:14:37.640Z'
heroImage: '/images/posts/1__b8XBKnnk9Eo1oDOfNIERyg.png'
category: 'Angular'
tags: ['angular']
draft: false
---

Angular v16 veio com muitas novidades. Sério, são muitas mesmo! Mas nesse post quero mostrar a que mais se destacou entre tantas lançadas nessa versão.

Sim! Estou falando de **Signals**.

> Caso você prefira o formato de vídeo, no canal da Code Dimension, postei um vídeo explicando todos os detalhes sobre essa funcionalidade fantástica!

### Mas, o que são Signals?

Adicionado no Angular **v16**, **Signals** permite aplicar uma nova forma de trabalhar com reatividade no framework.

A principal ideia por trás dessa funcionalidade, é aumentar a granulidade das detecções de mudanças dentro de componentes, fazendo com que o framework possa controlar exatamente onde cada mudança aconteceu e, assim, ser mais eficiente.

Até então, **Zone.js** era usado como forma de gerenciar esses ciclos de detecção, mas a abordagem usada não era muito eficiente quando comparada com outras tecnlogias, como React e Vue.

Com Signals, será possível remover **Zone.js** como dependência direta do framework, aumentando a eficiência das detecções e diminuindo o tamanho final dos JavaScript gerado no build, uma vez que menos uma dependência estará sendo usada.

Dito isso, vamos entender quais recursos essa nova funcionalidade acrescenta.

### Recursos que vieram com Signals

Os recursos adicionados com essa nova funcionalidade são bem simples e diretos, justamente para evitar uma grande _breaking change_ nos projetos e melhorar a curva de aprendizado para quem está começando na tecnologia.

Podemos listar três funções que basicamente resumem muito bem como utilizar Signals em qualquer aplicação.

- A função **Signal**
- A função **Computed**
- a função **Effect**

### Certo! Mas por que funções?

Boa pergunta! E aqui vai uma explicação rápida.

Apesar de Angular ser bem conhecido pelo uso pesado de Decorators, funcionalidade que ainda está em modo experimental pelo EcmaScript, desde a versão v14 a equipe _core_ que gerencia o framework está procurando utilizar funcionalidades já estáveis no JavaScript.

A ideia é diminuir a curva de aprendizado e fazer com que a tecnologia fique mais semelhante aos padrões de desenvolvimento já criados no mercado.

Faz sentido, né?

Dito isso, vamos entender o que cada função faz.

#### Função Signal

Essa função funciona da mesma forma que uma propriedade de um componente. A diferença é que a forma de atribuir e recuperar valores é um pouco diferente.

Signals são reativos e permitem um controle muito grande sobre os dados dentro um componente.

Veja no código abaixo, como utilizar um Signal na prática.

![](public/images/posts/1__cXwRNcYRrXweZxC6Psz3xA.png)

O código acima mostra que o signal é criado com o valor _“code”_ e é renderizado através da instrução _“name()”_, que é como um signal deve ser utilizado.

#### Função computed

A função **computed** se aproxima muito de um _getter_, recurso que já existe no JavaScript há tempos.

Essa função serve muito bem para compor valores e outros Signals. Por baixo dos panos, **computed** cria uma espécie de _cache_ que evita com que novos ciclos de detecção sejam emitidos sem que os valores, ou signals, que a função computed está consumindo, tenham seus valores alterados.

Veja no código abaixo, como utilizar a função **computed** na prática.

![](public/images/posts/1__9IHvJwMBSCDjHuXVw8nLUw.png)

#### Função effect

Essa função serve muito bem para efetuar ações quando o valor de um **Signal** é alterado.

Não tem muitos casos de uso para essa função e, pra ser sincero, ela serve mais para cenários exóticos onde é necessário efetuar alguma ação relacionada a uma funcionalidade mais externa ao Angular, como, por exemplo, uma chamada **HTTP** ou uma persistência em **LocalStorage.**

Veja no código abaixo, como utilizar a função **effect** na prática.

![](public/images/posts/1__JHBj05wTTedTZxI9sM6O8w.png)

Lembrando que a função **effect** precisa ser usada dentro de um **Injection Context**, ou seja, dentro um construtor ou diretamente na crição de uma propriedade da classe.

Signals realmente é um recurso muito massa, e garanto que essa adição ao Angular vai trazer muitos benefícios para toda a comunidade e seus projetos.

#### Por hoje é isso!

Não se esqueça de se inscrever na Code Dimension! Somos uma comunidade que tem o foco em trazer conteúdo relevante e de muita qualidade para Designers e Desenvolvedores.

Segue os links para você não perder nada :)

Nossa Newsletter 👇👇  
[https://codedimension.substack.com](https://codedimension.substack.com)

Participe do nosso servidor Discord 👇👾  
[https://discord.gg/VFNmgxEHXF](https://discord.gg/VFNmgxEHXF)

Escute o Podimension, o podcast da Code Dimension 🗣👇

- [Spotify](https://t.ly/BnBJm)
- [Google Podcasts](https://t.ly/K7IJ2)
- [Amazon Music](https://t.ly/sWLB4)

Acesse nosso website 💜👇  
[https://codedimension.com.br/](https://codedimension.com.br/)

Nos siga no LinkedIn 🤓👇  
[https://www.linkedin.com/company/code-dimension/](https://www.linkedin.com/company/code-dimension/)
