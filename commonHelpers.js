import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as y}from"./assets/vendor-d07556bb.js";function o(t){return String(t).padStart(2,"0")}function p(t){const r=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),e=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:n,minutes:e,seconds:h}}const s=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]");let d,m;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],d<Date.now()?(y.warning({position:"topRight",message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1}};f(s,S);a.addEventListener("click",t=>{const c=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");a.disabled=!0,s.disabled=!0,m=setInterval(()=>{const r=Date.now(),n=d-r,e=p(n);if(n<0){clearInterval(m),s.disabled=!1;return}c.textContent=o(e.days),u.textContent=o(e.hours),i.textContent=o(e.minutes),l.textContent=o(e.seconds)},1e3)});
//# sourceMappingURL=commonHelpers.js.map