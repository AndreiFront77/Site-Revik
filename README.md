# Site REVIK (protótipo)
Site estático: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/img/`.

## Rodar
Abra `index.html` ou use `npx serve .`. Deploy em Cloudflare Pages ou Vercel (pasta raiz, sem build).

## Tokens
Variáveis CSS em `:root` no `style.css`. Fonte Manrope (Google Fonts); para produção, considere hospedar localmente.

## Formulário
`FORM_ENDPOINT` em `main.js` está vazio: o envio fica **pendente** e a interface avisa isso. Configure um serviço de formulário ou função serverless (sem chaves no navegador), teste envio, antispam (honeypot já incluído) e erros.

## Pendências para aprovação
campo de retorno (e-mail/telefone) · SLA de 3h (não exibido) · canal preferencial (WhatsApp) · URL do LinkedIn · domínio (canonical, sitemap, robots, Organization) · hospedagem · política de privacidade · descrições do Método (conferir p.6 do portfólio).

## Checklist de testes
Desktop/tablet/mobile · navegação por teclado e foco · menu mobile · âncoras · contraste · reduced motion · formulário (validação, erro, envio real) · console sem erros · Lighthouse SEO/A11y.
