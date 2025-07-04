import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gianine Rosa | Desenvolvedora Full Stack</title>
        <meta name="description" content="Portfólio de Gianine Rosa – Dev Full Stack em transição para Machine Learning." />
        <meta property="og:title" content="Gianine Rosa | Desenvolvedora Full Stack" />
        <meta property="og:description" content="Projetos com Python, Node.js, React, MongoDB, Docker, e muito mais." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://gianine-portfolio.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-screen bg-[linear-gradient(to_top,_#0F172A,_#1E3A8A,_#F43F5E)]">
        <div className="min-h-screen">
          <header className="text-center p-10">
            <img
              src="/Gianine.jpg"
              alt="Foto de Gianine Rosa Barbosa Cirilo"
              className="w-45 h-45 mx-auto rounded-full border-4 border-[var(--color-emphasisAndLinks)] hover:border-[var(--color-alertAndAnimation)] transition-all duration-300 shadow-lg"
            />
            <h1 className="!text-7xl font-bold text-[var(--color-textMain)]" >Gianine Rosa Barbosa Cirilo</h1>
            <h2 className="!text-2xl font-bold text-[var(--color-textMain)]">Desenvolvedor Full Stack </h2>
            <h3 className="text-[var(--color-textMain)]">Python | Node | JavaScript | ReactJs | Postgres | Redis | Docker | NestJS | Mongo</h3>
            <h4><i>Em Transição para Machine Learning</i></h4>
          </header>
          <menu className="mt-24 text-center">
            <a className="text-2xl font-bold mr-8 p-2 text-[var(--color-emphasisAndLinks)] hover:text-[var(--color-alertAndAnimation)] transition-colors duration-250" href="#sobreMim">Sobre Mim</a>
            <a className="text-2xl font-bold mr-8 p-2 text-[var(--color-emphasisAndLinks)] hover:text-[var(--color-alertAndAnimation)] transition-colors duration-250" href="#projetos">Projetos</a>
            <a className="text-2xl font-bold mr-8 p-2 text-[var(--color-emphasisAndLinks)] hover:text-[var(--color-alertAndAnimation)] transition-colors duration-250" href="/blog">Blog Pessoal</a>
          </menu>
        </div>


        <div id='sobreMim' className="min-h-screen">
          <div className="p-12">
            <h2 className="!text-2xl font-bold text-[var(--color-textMain)]">Sobre Mim</h2>
            <p className="mt-4">
              Olá! Me chamo <i className="text-[var(--color-textMain)]">Gianine Rosa Barbosa Cirilo</i> e sou desenvolvedor full stack apaixonado por tecnologia e por resolver problemas reais através do código. 
              Desde o início da minha jornada, busco unir solidez técnica com empatia e criatividade — criando soluções que sejam funcionais, acessíveis e relevantes para quem usa.
            </p>
          </div>
          <div className="p-10">
            <h2 className="!text-2xl font-bold text-[var(--color-textMain)]">Experiência profissional</h2>
            <p className="mt-4">
              Iniciei minha carreira com um estágio de 1 ano e 8 meses na S&A Comércio e Automação LTDA, onde atuei com C# em aplicações desktop utilizando Windows Forms e 
              banco de dados SQL Server. Essa experiência me ensinou a importância de um código limpo, confiável e fácil de manter em sistemas robustos.
            </p>
            <p className="mt-4">
              InDepois disso, atuei por 1 ano e 2 meses como desenvolvedor full stack na DataTypes Sistemas, onde trabalhei com Python (Django), 
              React.js, Node.js, sistemas Linux, MongoDB e PostgreSQL. Foi um período de crescimento intenso, em que desenvolvi aplicações completas com foco em desempenho, 
              experiência do usuário e boas práticas de desenvolvimento.
            </p>
            <p className="mt-4">
              Atuei na Planetfone com um stack ainda mais desafiador: PHP, React, Node.js com NestJS, Redis, Docker, MongoDB, PostgreSQL e filas assíncronas usando BullMQ. 
              Aqui, aprofundei meus conhecimentos em arquitetura escalável, integração contínua e microsserviços.
            </p>
          </div>
          <div className="p-10">
            <h2 className="!text-2xl font-bold text-[var(--color-textMain)]">Formação</h2>
            <p className="mt-4">
              Sou formado pela Kenzie Academy Brasil, em um programa intensivo de desenvolvimento web full stack com carga horária integral e 
              atualmente estou cursando o 2º período de Ciência da Computação — sempre buscando crescer com base sólida, aprendizado contínuo e colaboração.
            </p>
          </div>     
        </div>

        <main id="projetos" >
          <h1 className="text-center !text-5xl font-bold text-[var(--color-textMain)]">Projetos</h1>
          <div className="mt-24 !flex flex-row flex-wrap gap-8 justify-center">
            <h1 className="text-center !text-5xl "> Em construcao</h1>
            {/* <Card/>
            <Card/>
            <Card/> */}
          </div>
        </main>
        <footer className="bg-[#0F172A] text-[var(--color-secondEmpashisAndDescription)] px-8 py-12 mt-32 text-sm text-center">
          <p className="mb-4">
            Sou desenvolvedor full stack, com experiência prática em projetos reais usando Python, Node.js e React. <br />
            Formado pela Kenzie Academy e estudante de Ciência da Computação, sigo aprendendo todos os dias. <br />
            Atualmente, estou mergulhando no universo do Machine Learning com o mesmo entusiasmo que comecei no código.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-[var(--color-emphasisAndLinks)]">
            <a href="mailto:gianine1508@gmail.com" className="hover:underline">Email</a>
            <a href="https://github.com/Gianine12" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/gianine1508" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </footer>

      </div>
    </>
  );
}
