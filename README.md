# Agro Du Cleiton Landing

CONTEXTO

Eu tenho um template de site pronto (código anexo no arquivo index.html e personalizar.md). Quero adaptar ele pro cliente abaixo, sem refazer do zero. O cliente: Agroveterinária du Cleiton Elabore uma landing page utilizando este em anexo como modelo. Adapte as cores e imagens usando as que eu enviei em anexo. Use estes dados: Nicho: Agroveterinária

Nome: Agro Du Cleiton

Cidade / bairro: Parobé / Guarujá

WhatsApp: 5551998239640

Serviço principal: produtos pet shop, ração, remédios, vacinas, e atendimento veterinário.

Cor da marca: usar as cores das imagens em anexo.

Endereço e horário: Av. das Nações, nº 543 Destaque na página que esta é foi a primeira agropecuária fundada na história da cidade de Parobé !

TAREFA

Primeiro LEIA o template e me diga em 5 linhas: quais seções existem, onde está a cor de marca, onde estão os links de WhatsApp e o que é conteúdo fixo vs. o que é do cliente.

Depois adapte, nesta ordem de prioridade: a. Todos os pontos de contato (wa.me, telefone, e-mail, mensagem do ?text=). b. Nome do negócio em TODOS os lugares (topo, hero, sobre, rodapé, <title>, Open Graph). c. Cor de marca (mexa na variável do :root, não em cada regra de CSS). d. Copy: headline, serviços e sobre, focados na dor [DOR]. Não reaproveite o texto do template. e. Endereço, horário e link do Maps. f. <title> e <meta description> com serviço + cidade.

Depoimentos: deixe como [PLACEHOLDER: pedir depoimento real ao cliente]. NUNCA publique depoimento inventado.

REGRAS

Mantenha a fonte Ubuntu e a estrutura que já funciona. Não "melhore" o layout sem eu pedir.

Mantenha as animações de entrada do template (fade + subida com stagger). Se o template não tiver, adicione: só CSS + IntersectionObserver, transform/opacity, respeitando prefers-reduced-motion, e sem JS o conteúdo aparece normal (nunca preso em opacity 0).

PROIBIDO travessão (— ou –) em qualquer texto novo.

NÃO INVENTE fato sobre o cliente. O que faltar, marque [PLACEHOLDER: confirmar].

Se o template tiver seção que não faz sentido pro nicho, me AVISE antes de remover.

DEPOIS

Liste tudo que você trocou (arquivo e linha).

Liste o que ficou como [PLACEHOLDER] e eu preciso pedir pro cliente.

Autoverificação: sobrou algum vestígio do negócio anterior (nome, telefone, cidade, cor)? Faça uma busca e me mostre o resultado.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://agro-du-cleiton.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/87b181fd-8edd-41d4-958d-0445ec499910).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
