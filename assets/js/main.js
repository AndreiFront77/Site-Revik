// Menu mobile
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')nav.classList.remove('open')});

// Formulário. Defina o endpoint seguro (serviço de formulário ou função serverless).
// Enquanto vazio, o envio NÃO acontece e o usuário é avisado.
const FORM_ENDPOINT='';
const form=document.getElementById('form'),st=document.getElementById('status');
const say=(t,c)=>{st.textContent=t;st.className=c};
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const req=['nome','empresa','servico'];let bad=null;
  req.forEach(n=>{const f=form.elements[n];const inv=!f.value.trim();f.setAttribute('aria-invalid',inv);if(inv&&!bad)bad=f});
  if(bad){say('Preencha os campos obrigatórios: nome, empresa e serviço desejado.','err');bad.focus();return}
  if(form.elements.website.value)return; // honeypot antispam
  if(!FORM_ENDPOINT){say('O envio ainda não está ativo: integração do formulário pendente. Fale conosco pelo e-mail ou WhatsApp ao lado.','warn');return}
  try{
    const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form)))});
    if(!r.ok)throw new Error(r.status);
    form.reset();say('Solicitação enviada. Entraremos em contato.','ok');
  }catch{say('Não foi possível enviar agora. Tente novamente ou escreva para vanik.gustavo@gmail.com.','err')}
});
