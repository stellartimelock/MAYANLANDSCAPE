document.getElementById('qf').addEventListener('submit',function(e){
e.preventDefault();var f=this,b=f.querySelector('button'),t=document.getElementById('qt');
if(f._honey.value)return;
b.disabled=true;b.textContent='Sending…';t.hidden=true;t.classList.remove('err');
var d=Object.fromEntries(new FormData(f));delete d._honey;
d._subject='New inquiry from mayanlandscape.com';d._captcha='false';d._template='table';
fetch('https://formsubmit.co/ajax/landscapingmaintenanceexperts@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(d)})
.then(function(r){return r.text().then(function(x){var j={};try{j=JSON.parse(x)}catch(_){}var ok=String(j.success)==='true',pend=/activat/i.test(j.message||'');if(!r.ok||!(ok||pend))throw new Error(j.message||('HTTP '+r.status));if(pend&&window.console)console.warn('FormSubmit: '+j.message);})})
.then(function(){t.textContent="Thanks! We'll be in touch soon.";t.hidden=false;f.reset();b.textContent='Sent';})
.catch(function(err){if(window.console)console.error('Inquiry send failed:',err);t.textContent="Couldn't send, please call or text.";t.classList.add('err');t.hidden=false;b.disabled=false;b.textContent='Send Inquiry';});
});
