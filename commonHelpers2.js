import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-d07556bb.js";const m=document.querySelector(".form");m.addEventListener("submit",t=>{t.preventDefault();const s=parseInt(t.target.delay.value,10),o=t.target.state.value;i.info({message:"Promise is pending...",position:"topRight"}),new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"?e(s):r(s)},s)}).then(e=>{i.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
