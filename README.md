# Site — Sal & Pimenta Restaurante

Site institucional pronto, sem build (HTML/CSS/JS puro). Abre clicando duas vezes em `index.html`.

## Como publicar (escolha uma)

1. **Netlify Drop** (mais fácil): acesse `app.netlify.com/drop` e arraste esta pasta inteira (`site-sal-pimenta`) pra área de soltar. Gera um link público na hora, sem precisar de conta.
2. **GitHub Pages**: suba esta pasta como um repositório, com `index.html` na raiz, e ative em Settings → Pages.
3. **Zipar e mandar pro cliente/host**: compacte a pasta inteira e envie — qualquer hospedagem que aceite HTML estático funciona.

## Checklist "TROCAR" antes de publicar de verdade

Procure por `<!-- TROCAR -->` no código (ou use Ctrl+F no `index.html`) — são os pontos marcados pra confirmar/trocar:

1. **Fotos** — todas as fotos são reais (banco Pexels, uso comercial liberado), mas são temporárias. Troque pelas fotos da própria casa quando tiver:
   - Salve as fotos novas na pasta `img/` com os mesmos nomes (`hero-buffet.jpg`, `buffet-vitrine.jpg`, `saladas.jpg`, `grelhados.jpg`, `sobremesa.jpg`, `ambiente.jpg`, `mesa-amigos.jpg`) — assim encaixam sem quebrar o layout (o recorte/proporção já está certo).
2. **Tabela infantil** — se existir preço diferenciado para criança, me avisa que eu incluo no card de preços.
3. **Avaliações citadas** — a seção "Avaliações" resume o que aparece publicamente no Google/Restaurant Guru (não são depoimentos com nome). Se vocês tiverem depoimentos reais com nome de cliente, me passem que eu troco pela citação de verdade.

## O que já está pronto

- Preços reais do buffet (seg-sex R$35 à vontade/R$75 kg; sáb R$47 à vontade/R$85 kg).
- Horário de funcionamento real (seg. a sáb., 11h às 14h20, domingo fechado).
- Seção "O Buffet" explicando que o cardápio muda todo dia (sem inventar pratos fixos) + categorias reais (saladas, grelhados, acompanhamentos, sobremesas).
- Botão de WhatsApp flutuante + CTAs de contato apontando pro número real (51) 98019-4313.
- Selo de avaliação 4,7★ (Google, 292 avaliações) e 4,7 (Restaurant Guru, 248 opiniões).
- Rodapé com razão social, CNPJ, endereço completo (dados públicos da Receita Federal).
- Banner de cookies (LGPD, com Aceitar/Recusar funcionando de verdade) + página de Política de Privacidade.
- Mapa do endereço, rede social (Instagram).
- Site testado em desktop e celular, com o clique dos botões conferido de verdade (não só no visual).

## Rodar de novo

Peça pra rodar a skill `/site-institucional` de novo quando: quiserem trocar a paleta, adicionar uma página, ajustar o buffet, ou atualizar quando a casa mudar algo.
