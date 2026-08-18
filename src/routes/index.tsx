import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import equipeAsset from "@/assets/equipe.jpg.asset.json";
import vetAsset from "@/assets/vet.jpg.asset.json";

const TITULO =
  "Pet Shop, Racao e Veterinario em Parobe | Agro Du Cleiton";
const DESCRICAO =
  "Racao, remedios, vacinas e atendimento veterinario no bairro Guaruja, em Parobe. A primeira agropecuaria da historia da cidade. Fale no WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1E5B38" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VeterinaryCare",
          name: "Agro Du Cleiton",
          description: DESCRICAO,
          telephone: "+5551998239640",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. das Nacoes, 543",
            addressLocality: "Parobe",
            addressRegion: "RS",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

const ZAP = "https://wa.me/5551998239640";
const MSG_GERAL =
  ZAP +
  "?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Agro%20Du%20Cleiton%20e%20quero%20falar%20sobre%20produtos%20e%20atendimento%20veterin%C3%A1rio.";
const MSG_VET =
  ZAP +
  "?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Agro%20Du%20Cleiton%20e%20quero%20saber%20do%20atendimento%20veterin%C3%A1rio.";
const MSG_RACAO =
  ZAP +
  "?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Agro%20Du%20Cleiton%20e%20quero%20saber%20pre%C3%A7o%20e%20disponibilidade%20de%20ra%C3%A7%C3%A3o.";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Agro+Du+Cleiton+Av.+das+Na%C3%A7%C3%B5es+543+Parob%C3%A9+RS";

function IconePata() {
  return (
    <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="7" cy="7.5" r="2.1" />
      <circle cx="12" cy="6" r="2.1" />
      <circle cx="17" cy="7.5" r="2.1" />
      <ellipse cx="12" cy="14.5" rx="4.6" ry="3.9" />
    </svg>
  );
}

function IconeZap({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3.5c-4.7 0-8.5 3.4-8.5 7.6 0 2.2 1 4.1 2.7 5.5L5.3 20.5l4.2-1.3c.8.2 1.6.3 2.5.3 4.7 0 8.5-3.4 8.5-7.6S16.7 3.5 12 3.5z" />
    </svg>
  );
}

function Index() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("js");
    const reduz =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => document.body.classList.add("carregado")),
    );

    if (reduz) {
      document.querySelectorAll(".anima").forEach((el) => el.classList.add("visivel"));
      return () => cancelAnimationFrame(raf);
    }

    const alvos = document.querySelectorAll(
      "main section:not(.hero) .anima, .rodape .anima",
    );
    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("visivel"));
      return () => cancelAnimationFrame(raf);
    }
    const obs = new IntersectionObserver(
      (entradas, observador) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observador.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="site">
      <a className="pular-conteudo" href="#conteudo">
        Pular para o conteudo
      </a>

      <header className="topo">
        <div className="container">
          <a className="marca" href="#conteudo">
            <IconePata />
            Agro Du Cleiton
          </a>
          <a className="btn btn-primario" href={MSG_GERAL}>
            <IconeZap />
            WhatsApp
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero">
          <div className="container hero-grade">
            <div>
              <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
                Agropecuaria e pet shop no Guaruja, Parobe
              </p>
              <h1 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
                A primeira agropecuaria da historia de Parobe cuida do seu animal ate hoje
              </h1>
              <p className="apoio anima" style={{ "--i": 2 } as React.CSSProperties}>
                Racao que nao falta na prateleira, remedio certo, vacina na hora e veterinario
                pra atender. Voce pergunta pelo WhatsApp e ja sai de casa sabendo se tem, quanto
                custa e quando pode buscar.
              </p>
              <div className="hero-ctas anima" style={{ "--i": 3 } as React.CSSProperties}>
                <a className="btn btn-primario" href={MSG_GERAL}>
                  Falar no WhatsApp
                </a>
                <a className="btn btn-secundario" href="#servicos">
                  Ver o que temos
                </a>
              </div>
              <p className="nota anima" style={{ "--i": 4 } as React.CSSProperties}>
                Atendimento veterinario com a Dra. Pathia, todas as tercas e quintas, das 14h as
                18h30, por ordem de chegada.
              </p>
            </div>
            <div className="hero-painel anima" style={{ "--i": 5 } as React.CSSProperties}>
              <img
                src={equipeAsset.url}
                alt="Ilustracao da equipe da Agro Du Cleiton com um cachorro, um gato e um passarinho"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </section>

        <section id="pioneira">
          <div className="container">
            <div className="faixa-pioneira anima" style={{ "--i": 0 } as React.CSSProperties}>
              <p className="selo selo-destaque">A primeira de Parobe</p>
              <h2>A agropecuaria mais antiga da cidade</h2>
              <p>
                A Agro Du Cleiton foi a primeira agropecuaria fundada na historia de Parobe. Isso
                quer dizer atendimento de gente que conhece bicho, conhece a cidade e sabe
                indicar o que resolve, sem empurrar produto. [PLACEHOLDER: confirmar o ano de
                fundacao e quem fundou]
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="fundo-alt">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Produtos e servicos
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Uma parada resolve a semana do seu animal
            </h2>
            <p className="subtitulo anima" style={{ "--i": 2 } as React.CSSProperties}>
              Cansou de rodar a cidade atras de racao em falta ou do remedio que ninguem tem? Aqui
              voce pergunta no WhatsApp antes de sair de casa.
            </p>
            <div className="grade-servicos">
              <article className="card anima" style={{ "--i": 0 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="8" width="14" height="11" rx="2" />
                    <path d="M8 8V6h8v2z" />
                  </svg>
                </div>
                <h3>Racao pra cao, gato e criacao</h3>
                <p>
                  Marcas do dia a dia e sacaria grande pra quem tem criacao. Pergunte o preco do
                  saco fechado antes de vir.
                </p>
                <span className="preco">A partir de [PLACEHOLDER: R$]</span>
              </article>
              <article className="card anima" style={{ "--i": 1 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 15.5l7-7" />
                    <rect x="3" y="10" width="10" height="6" rx="3" transform="rotate(-45 3 10)" />
                  </svg>
                </div>
                <h3>Remedios e vermifugos</h3>
                <p>
                  Antipulgas, vermifugo, antibiotico e cuidado de ferida. A gente confere a dose
                  pelo peso do animal antes de vender.
                </p>
                <span className="preco">A partir de [PLACEHOLDER: R$]</span>
              </article>
              <article className="card anima" style={{ "--i": 2 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
                    <path d="M9 11.5l2 2 4-4" />
                  </svg>
                </div>
                <h3>Vacinas</h3>
                <p>
                  Vacina aplicada e anotada na carteirinha, com a data da proxima combinada na
                  hora, pra nao passar do prazo.
                </p>
                <span className="preco">A partir de [PLACEHOLDER: R$]</span>
              </article>
              <article className="card anima" style={{ "--i": 3 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20C12 20 4 14.5 4 9.5A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.5C20 14.5 12 20 12 20z" />
                    <path d="M12 10.5v4M10 12.5h4" />
                  </svg>
                </div>
                <h3>Atendimento veterinario</h3>
                <p>
                  Consulta com a Dra. Pathia nas tercas e quintas, das 14h as 18h30, por ordem de
                  chegada. Chegue cedo pra garantir a vez.
                </p>
                <span className="preco">A partir de [PLACEHOLDER: R$]</span>
              </article>
            </div>
            <p className="aviso-fixo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Precisa de item pet shop, banho ou acessorio? Pergunte no WhatsApp o que temos em
              loja hoje. [PLACEHOLDER: confirmar se oferece banho e tosa e leva-e-traz]
            </p>
          </div>
        </section>

        <section id="como-funciona">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Como funciona
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Pergunte antes, evite viagem perdida
            </h2>
            <div className="grade-passos">
              <div className="passo anima" style={{ "--i": 0 } as React.CSSProperties}>
                <div className="numero" aria-hidden="true">
                  1
                </div>
                <h3>Chame no WhatsApp</h3>
                <p>
                  Clique em qualquer botao verde da pagina e diga o que precisa: racao, remedio,
                  vacina ou consulta.
                </p>
              </div>
              <div className="passo anima" style={{ "--i": 1 } as React.CSSProperties}>
                <div className="numero" aria-hidden="true">
                  2
                </div>
                <h3>Confirme preco e estoque</h3>
                <p>
                  A gente responde se tem em loja, quanto custa e, no caso da consulta, qual o dia
                  de atendimento da semana.
                </p>
              </div>
              <div className="passo anima" style={{ "--i": 2 } as React.CSSProperties}>
                <div className="numero" aria-hidden="true">
                  3
                </div>
                <h3>Passe na Av. das Nacoes</h3>
                <p>
                  Vem buscar no Guaruja com tudo separado. [PLACEHOLDER: confirmar se faz entrega
                  em Parobe e qual o valor]
                </p>
              </div>
            </div>
            <a className="btn btn-primario anima" style={{ "--i": 0 } as React.CSSProperties} href={MSG_RACAO}>
              Consultar racao no WhatsApp
            </a>
          </div>
        </section>

        <section id="fotos" className="fundo-alt">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Nosso atendimento
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Conheca a Agro Du Cleiton por dentro
            </h2>
            <div className="grade-fotos">
              <div className="foto-bloco com-foto anima" style={{ "--i": 0 } as React.CSSProperties}>
                <img
                  src={vetAsset.url}
                  alt="Cartaz do atendimento veterinario da Agro Du Cleiton com a Dra. Pathia segurando filhotes"
                  loading="lazy"
                  width={900}
                  height={1600}
                />
              </div>
              <div
                className="foto-bloco anima"
                style={{ "--i": 1 } as React.CSSProperties}
                role="img"
                aria-label="Espaco reservado para foto da fachada da loja"
              >
                <p className="chip-claro">[PLACEHOLDER: foto da fachada na Av. das Nacoes]</p>
              </div>
              <div
                className="foto-bloco anima"
                style={{ "--i": 2 } as React.CSSProperties}
                role="img"
                aria-label="Espaco reservado para foto das prateleiras de racao e produtos"
              >
                <p className="chip-claro">[PLACEHOLDER: foto das prateleiras de racao e produtos]</p>
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Quem ja confia
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              O que os clientes dizem
            </h2>
            <div className="grade-depoimentos">
              {[0, 1, 2].map((i) => (
                <article key={i} className="card depoimento anima" style={{ "--i": i } as React.CSSProperties}>
                  <blockquote>[PLACEHOLDER: pedir depoimento real ao cliente]</blockquote>
                  <p className="autor">[PLACEHOLDER: nome do cliente e do animal]</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="fundo-alt">
          <div className="container sobre">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Sobre
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Nasceu com a cidade e continua no bairro
            </h2>
            <p className="anima" style={{ "--i": 2 } as React.CSSProperties}>
              A Agro Du Cleiton foi a primeira agropecuaria fundada na historia de Parobe e segue
              atendendo no bairro Guaruja, na Av. das Nacoes, 543. Aqui entra o dono de cachorro,
              o de gato e quem tem criacao no fundo do terreno, e todo mundo sai atendido.
              [PLACEHOLDER: confirmar ano de fundacao, fundador e tempo de atuacao]
            </p>
            <p className="anima" style={{ "--i": 3 } as React.CSSProperties}>
              Vender racao e remedio e a parte facil. O que a gente faz de diferente e ouvir o
              caso do seu animal, indicar so o que precisa e chamar a veterinaria quando o assunto
              e de consulta. Chame no WhatsApp e veja a diferenca.
            </p>
          </div>
        </section>

        <section id="onde-estamos">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Onde estamos
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Endereco e horario
            </h2>
            <div className="grade-local">
              <div className="card anima" style={{ "--i": 0 } as React.CSSProperties}>
                <h3>Endereco</h3>
                <p>Av. das Nacoes, 543, bairro Guaruja, Parobe, RS</p>
                <p className="nota">[PLACEHOLDER: ponto de referencia perto da loja]</p>
              </div>
              <div className="card anima" style={{ "--i": 1 } as React.CSSProperties}>
                <h3>Horario</h3>
                <p>
                  Atendimento veterinario: tercas e quintas, das 14h as 18h30, por ordem de
                  chegada.
                </p>
                <p className="nota">
                  Horario da loja: [PLACEHOLDER: confirmar dias e horarios de funcionamento da
                  loja]
                </p>
              </div>
            </div>
            <div className="acoes-local anima" style={{ "--i": 0 } as React.CSSProperties}>
              <a className="btn btn-secundario" href={MAPS}>
                Ver no Google Maps
              </a>
              <a className="btn btn-primario" href={MSG_VET}>
                Falar no WhatsApp
              </a>
            </div>
            <p className="nota anima" style={{ "--i": 1, marginTop: 12 } as React.CSSProperties}>
              [PLACEHOLDER: trocar o link acima pelo link exato do Google Maps da loja]
            </p>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <div className="rodape-grade">
            <div className="anima" style={{ "--i": 0 } as React.CSSProperties}>
              <strong>Agro Du Cleiton</strong>
              <p>
                Agropecuaria, pet shop e atendimento veterinario no bairro Guaruja, em Parobe, RS.
              </p>
            </div>
            <div className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              <strong>Contato</strong>
              <p>
                <a href={MSG_GERAL}>WhatsApp: (51) 99823-9640</a>
              </p>
            </div>
            <div className="anima" style={{ "--i": 2 } as React.CSSProperties}>
              <strong>Redes</strong>
              <p>Instagram: [PLACEHOLDER: @ do Instagram da loja]</p>
            </div>
          </div>
          <p className="legal">
            Agro Du Cleiton. CNPJ: [PLACEHOLDER: CNPJ]. Todos os direitos reservados,{" "}
            {new Date().getFullYear()}.
          </p>
        </div>
      </footer>

      <a className="zap-flutuante" href={MSG_GERAL} aria-label="Chamar a Agro Du Cleiton no WhatsApp">
        <IconeZap size={28} />
      </a>
    </div>
  );
}
