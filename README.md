<div align="left">
  <img src="https://img.shields.io/static/v1?label=Progress&message=50%&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Progress"/>
</div>

<br/>

<div align="center">
  <h1>Portal do Representante</h1>
  <h3>Uma aplicação web responsiva desenvolvida com <a href="https://nextjs.org/">NextJS</a>, integrando-se ao Firebase. Neste aplicativo, é possível visualizar publicações de atividades acadêmicas, visualizar comentários e respostas.</p>
</div>

<div align="center">
  <img src="https://img.shields.io/static/v1?label=NextJS&message=14.1.0&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do NextJS" />
  <img src="https://img.shields.io/static/v1?label=Typescript&message=5.0.0&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Typescript" />
  <img src="https://img.shields.io/static/v1?label=TailwindCSS&message=3.3.0&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do TailwindCSS" />
  <img src="https://img.shields.io/static/v1?label=Jest&message=29.7.0&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Jest" />
  <img src="https://img.shields.io/static/v1?label=Testing%20Library&message=14.2.1&color=#009CA3%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Versão do Testing Library" />
</div>

<br/>

<div align="center">
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#como-usar">Como usar</a> •
  <a href="#decisões-técnicas">Decisões Técnicas</a> •
  <a href="#desafios">Desafios</a>
</div>

<br/>

<div>
  <h3>Demo Frontend: <a href="https://portal-do-representante.vercel.app/">https://portal-do-representante.vercel.app/</a></h3>
</div>

<div>
  <h2 id="tecnologias">Tecnologias:</h2>
  <h3>Linguagens e Ferramentas:</h3>
  <ul>
    <li>NextJS</li>
    <li>TypeScript</li>
  </ul>

  <h3>Frontend:</h3>
  <ul>
    <li>TailwindCSS</li>
    <li>ShadCN</li>
  </ul>

  <h3>Backend / Banco de Dados:</h3>
  <ul>
    <li>Firebase</li>
  </ul>

  <h3>Padronização de Código:</h3>
  <ul>
    <li>ESLint</li>
    <li>Prettier</li>
  </ul>
</div>

<div>
  <h2 id="como-usar">Como usar:</h2>
  <h3>Requisitos:</h3>
  <p>
    Antes de iniciar, certifique-se de ter instalado em sua máquina as seguintes ferramentas:
  </p>

  <ul>
    <li>Git</li>
    <li>Node (Versão mínima 18)</li>
    <li>NPM</li>
  </ul>

  <h3>Clone o projeto e acesse a pasta:</h3>

  ```bash
  $ git clone git@github.com:vitoremanuelqf/portal-do-representante.git && cd portal-do-representante
  ```

  <h3>Siga os passos abaixo para executar a aplicação localmente:</h3>

  ```bash
  # Certifique-se de que todas as variáveis de ambiente possuem as chaves das APIs ativas.

  $ npm i

  $ npm run dev
  ```

</div>

<div>
  <h2 id="decisões-técnicas">Decisões Técnicas:</h2>
  <h3>NextJS:</h3>
  <p>O Next.js é conhecido por oferecer suporte para renderização do lado do servidor, o que pode melhorar significativamente o desempenho da página, especialmente em conexões de internet mais lentas. Quanto a performance, o Next.js é projetado para oferecer o melhor desempenho, utilizando estratégias como o pré-carregamento de páginas e o lazy loading para melhorar o tempo de carregamento.</p>

  <h3>TailwindCSS:</h3>
  <p>O Tailwind CSS é uma estrutura de design CSS utilitária que serve para simplificar e acelerar o desenvolvimento de interfaces de usuário. Suas vantagens incluem produtividade rápida, configurabilidade para atender às necessidades do projeto, promoção da consistência visual, manutenção simplificada do código, flexibilidade para diferentes estilos de desenvolvimento, redução de tamanho de arquivos CSS e um ecossistema ativo com plugins e ferramentas adicionais. Em resumo, o Tailwind CSS é escolhido por sua eficiência, simplicidade e capacidade de oferecer uma experiência de desenvolvimento coesa.</p>

  <h3>ShadCN</h3>
  <p>O shadcn é uma coleção de componentes de UI e bibliotecas para React, focada em design acessível e altamente personalizável. Ele é desenvolvido para facilitar a criação de interfaces modernas e consistentes, utilizando a biblioteca Radix UI como base, que garante componentes acessíveis e controlados. O shadcn também é integrado com Tailwind CSS, permitindo uma estilização flexível e rápida. É uma ótima opção para desenvolvedores que buscam construir aplicações com uma aparência sofisticada e funcional, mantendo um código limpo e modular. Além disso, a comunidade ativa e a documentação clara ajudam na implementação e personalização.</p>

  <h3>Firebase:</h3>
  <p>O Firebase é uma plataforma do Google que facilita o desenvolvimento de aplicativos web e mobile, oferecendo uma solução completa de backend como serviço (BaaS). Ele inclui autenticação simplificada, bancos de dados em tempo real (Realtime Database e Firestore) e hospedagem otimizada com SSL gratuito. A escalabilidade automática e a integração com outros serviços do Google tornam-no ideal para projetos que precisam de um desenvolvimento rápido e eficiente. Além disso, oferece funções em nuvem para executar código backend e acelerar a implementação de lógicas complexas.</p>
</div>

<div>
  <h2 id="desafios">Desafios:</h2>
  <p>Usar orientação a objetos (OOP) com JavaScript e TypeScript pode ser desafiador devido a algumas características da linguagem e suas limitações históricas. O JavaScript, por ser uma linguagem baseada em protótipos, tem uma abordagem diferente da OOP tradicional, o que pode confundir desenvolvedores acostumados com linguagens puramente orientadas a objetos, como Java ou C#. Além disso, as classes e a herança em JavaScript foram introduzidas de forma mais recente (ECMAScript 2015), o que pode levar a dificuldades de adaptação e boas práticas inconsistentes. Embora o TypeScript forneça tipagem estática para melhorar a estrutura de código, a complexidade aumenta na criação de sistemas mais complexos, onde a integração com os conceitos de OOP pode ser não trivial. Isso exige um bom entendimento da interação entre protótipos, classes e interfaces para evitar problemas como herança excessiva ou acoplamento forte.</p>
</div>
