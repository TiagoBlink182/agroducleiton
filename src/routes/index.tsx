import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import equipeLocal from "../images/lustracao da equipe da Agro Du Cleiton.jpg";
import vetLocal from "../images/Cartaz do atendimento veterinario da Agro Du Cleiton com a Dra. Pathia segurando filhotes.jpg";
import fachadaLocal from "../images/fachada.jpg";
import equipeLojaLocal from "../images/equipe.jpg";
import avaliacoesLocal from "../images/avaliacoes.jpg";

const TITULO =
  "Pet Shop, Ração e Veterinário em Parobé | Agro Du Cleiton";
const DESCRICAO =
  "Ração, remédios, vacinas e atendimento veterinário no bairro Guarujá, em Parobé. A primeira agropecuária da história da cidade. Fale no WhatsApp.";

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
        Pular para o conteúdo
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
                Agropecuária e pet shop no Guarujá, Parobé
              </p>
              <h1 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
                A primeira agropecuária da história de Parobé cuida do seu animal até hoje
              </h1>
              <p className="apoio anima" style={{ "--i": 2 } as React.CSSProperties}>
                Ração que não falta na prateleira, remédio certo, vacina na hora e veterinário
                para atender. Você pergunta pelo WhatsApp e já sai de casa sabendo se tem, quanto
                custa e quando pode buscar. Temos tele entrega em Parobé!
              </p>
              <div className="hero-ctas anima" style={{ "--i": 3 } as React.CSSProperties}>
                <a className="btn btn-primario" href={MSG_GERAL}>
                  Falar no WhatsApp
                </a>
              </div>
              <p className="nota anima" style={{ "--i": 4 } as React.CSSProperties}>
                Atendimento veterinário com a Dra. Páthia, todas as terças e quintas, das 14h às
                18h30, por ordem de chegada.
              </p>
            </div>
            <div className="hero-painel anima" style={{ "--i": 5 } as React.CSSProperties}>
              <img
                src={equipeLocal}
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
              <p className="selo selo-destaque">A primeira de Parobé</p>
              <h2>A agropecuária mais antiga da cidade</h2>
              <p>
                A Agro Du Cleiton foi a primeira agropecuária fundada na história de Parobé. Isso
                quer dizer atendimento de gente que conhece bicho, conhece a cidade e sabe
                indicar o que resolve, sem empurrar produto. [PLACEHOLDER: confirmar o ano de
                fundação e quem fundou]
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="fundo-alt">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Produtos e serviços
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Uma parada resolve a semana do seu animal
            </h2>
            <p className="subtitulo anima" style={{ "--i": 2 } as React.CSSProperties}>
              Cansou de rodar a cidade atrás de ração em falta ou do remédio que ninguém tem? Aqui
              você pergunta no WhatsApp antes de sair de casa.
            </p>
            <div className="grade-servicos">
              <article className="card anima" style={{ "--i": 0 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="8" width="14" height="11" rx="2" />
                    <path d="M8 8V6h8v2z" />
                  </svg>
                </div>
                <h3>Ração para cão, gato, pássaros, hamster, coelho, etc...</h3>
                <p>
                  Marcas do dia a dia e sacaria grande para quem tem criação. Grande variedade e
                  preço justo.
                </p>
              </article>
              <article className="card anima" style={{ "--i": 1 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 15.5l7-7" />
                    <rect x="3" y="10" width="10" height="6" rx="3" transform="rotate(-45 3 10)" />
                  </svg>
                </div>
                <h3>Remédios e vermífugos</h3>
                <p>
                  Antipulgas, vermífugo, antibiótico e cuidado de ferida. Todos os cuidados com a
                  saúde de seu pet.
                </p>
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
                  Vacina aplicada e anotada na carteirinha, com a data da próxima combinada na
                  hora, para não passar do prazo.
                </p>
              </article>
              <article className="card anima" style={{ "--i": 3 } as React.CSSProperties}>
                <div className="icone">
                  <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20C12 20 4 14.5 4 9.5A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.5C20 14.5 12 20 12 20z" />
                    <path d="M12 10.5v4M10 12.5h4" />
                  </svg>
                </div>
                <h3>Atendimento veterinário</h3>
                <p>
                  Consulta com a Dra. Páthia nas terças e quintas, das 14h às 18h30, por ordem de
                  chegada. Chegue cedo para garantir a vez.
                </p>
              </article>
            </div>
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
                  Clique em qualquer botão verde da página e diga o que precisa: ração, remédio,
                  vacina ou consulta.
                </p>
              </div>
              <div className="passo anima" style={{ "--i": 1 } as React.CSSProperties}>
                <div className="numero" aria-hidden="true">
                  2
                </div>
                <h3>Confirme preço e estoque</h3>
                <p>
                  A gente responde se tem em loja, quanto custa e, no caso da consulta, qual o dia
                  de atendimento da semana.
                </p>
              </div>
              <div className="passo anima" style={{ "--i": 2 } as React.CSSProperties}>
                <div className="numero" aria-hidden="true">
                  3
                </div>
                <h3>Retire na loja ou peça tele entrega</h3>
                <p>Realizamos tele entrega somente na cidade de Parobé.</p>
              </div>
            </div>
            <a className="btn btn-primario anima" style={{ "--i": 0 } as React.CSSProperties} href={MSG_RACAO}>
              Converse conosco
            </a>
          </div>
        </section>

        <section id="fotos" className="fundo-alt">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Nosso atendimento
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Conheça a Agro Du Cleiton por dentro
            </h2>
            <div className="grade-fotos">
              <div className="foto-bloco com-foto anima" style={{ "--i": 0 } as React.CSSProperties}>
                <img
                  src={vetLocal}
                  alt="Cartaz do atendimento veterinário da Agro Du Cleiton com a Dra. Páthia segurando filhotes"
                  loading="lazy"
                  width={900}
                  height={1600}
                />
              </div>
              <div
                className="foto-bloco anima"
                style={{ "--i": 1 } as React.CSSProperties}
                role="img"
                aria-label="Foto da fachada da Agro Du Cleiton na Av. das Nações"
              >
                <img
                  src={fachadaLocal}
                  alt="Fachada da Agro Du Cleiton na Av. das Nações"
                  loading="lazy"
                  width={900}
                  height={900}
                />
              </div>
              <div
                className="foto-bloco anima"
                style={{ "--i": 2 } as React.CSSProperties}
                role="img"
                aria-label="Equipe da Agro Du Cleiton em atendimento"
              >
                <img
                  src={equipeLojaLocal}
                  alt="Equipe da Agro Du Cleiton em atendimento"
                  loading="lazy"
                  width={900}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Quem já confia
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              O que os clientes dizem
            </h2>
            <div className="imagem-avaliacoes anima" style={{ "--i": 0 } as React.CSSProperties}>
              <img
                src={avaliacoesLocal}
                alt="Avaliações dos clientes da Agro Du Cleiton"
                loading="lazy"
                width={1080}
                height={180}
              />
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
              A Agro Du Cleiton foi a primeira agropecuária fundada na história de Parobé e segue
              atendendo no bairro Guarujá, na Av. das Nações, 543. Aqui entra o dono de cachorro,
              o de gato e quem tem criação no fundo do terreno, e todo mundo sai atendido.
              [PLACEHOLDER: confirmar ano de fundação, fundador e tempo de atuação]
            </p>
            <p className="anima" style={{ "--i": 3 } as React.CSSProperties}>
              Vender ração e remédio é a parte fácil. O que a gente faz de diferente é ouvir o
              caso do seu animal, indicar só o que precisa e chamar a veterinária quando o assunto
              é de consulta. Chame no WhatsApp e veja a diferença.
            </p>
          </div>
        </section>

        <section id="onde-estamos">
          <div className="container">
            <p className="selo anima" style={{ "--i": 0 } as React.CSSProperties}>
              Onde estamos
            </p>
            <h2 className="anima" style={{ "--i": 1 } as React.CSSProperties}>
              Endereço e horário
            </h2>
            <div className="grade-local">
              <div className="card anima" style={{ "--i": 0 } as React.CSSProperties}>
                <h3>Endereço</h3>
                <p>Av. das Nações, 543, bairro Guarujá, Parobé, RS</p>
                <p className="nota">[PLACEHOLDER: ponto de referência perto da loja]</p>
              </div>
              <div className="card anima" style={{ "--i": 1 } as React.CSSProperties}>
                <h3>Horário</h3>
                <p>
                  Atendimento veterinário: terças e quintas, das 14h às 18h30, por ordem de
                  chegada.
                </p>
                <p className="nota">
                  Horário da loja: [PLACEHOLDER: confirmar dias e horários de funcionamento da
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
                Agropecuária, pet shop e atendimento veterinário no bairro Guarujá, em Parobé, RS.
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
