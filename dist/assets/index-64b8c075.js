(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o=document.querySelector("[data-input-field]"),s=document.querySelector("[data-input-slider]"),d=document.querySelector("[data-generate-button]"),p=document.querySelector("[data-password-length]");document.getElementById("password_value");const f=document.querySelector("[data-lower-case]"),m=document.querySelector("[data-upper-case]"),y=document.querySelector("[data-numbers]"),h=document.querySelector("[data-special-symbols]"),n=document.querySelector("[data-copy-icon]");p.innerText=s.value;s.addEventListener("input",()=>{p.innerText=s.value});d.addEventListener("click",()=>{o.value!==""?(o.value="",d.innerText="Generate Password",n.innerHTML='<i class="pr-1 pl-4  fa-solid fa-copy fa-lg"></i>'):m.checked||f.checked||h.checked||y.checked?(_(),d.innerText="Clear Password",g()):o.value=""});const g=()=>{n.addEventListener("click",()=>{navigator.clipboard.writeText(o.value),n.innerText="✅",n.title="Password Copied"})},_=()=>{const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r="abcdefghijklmnopqrstuvwxyz",a="!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";let c="0123456789",e="";for(e+=m.checked?u:"",e+=f.checked?r:"",e+=h.checked?a:"",e+=y.checked?c:"",i=1;s.value>=i;i++)o.value+=e.charAt(Math.floor(Math.random()*e.length))};
