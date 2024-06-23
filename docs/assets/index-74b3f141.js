(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();function a(){document.body.classList.toggle("theme_dark"),document.body.classList.toggle("theme_light")}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?(document.body.classList.add("theme_dark"),document.body.classList.remove("theme_light")):(document.body.classList.add("theme_light"),document.body.classList.remove("theme_dark"))});function n(){window.matchMedia("(prefers-color-scheme: dark)").matches?document.body.classList.add("theme_dark"):document.body.classList.add("theme_light");const t=document.createElement("button");return t.onclick=a,t.innerHTML="Change theme",t.className="button",t}const d=()=>{const t=document.createElement("article"),c=(()=>n())();t.appendChild(c);const r=`
    <main>
      <section>
        <h1>Cards</h1>
        <article class="col-1">
          <div class="card">This is a card</div>
          <div class="card pressed">This card is pressed</div>
        </article>
        <article class="col-2">
          <div class="card">
            This card is long Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Adipisci, officia ab dolor atque nesciunt facere?
            Doloremque ullam doloribus perferendis similique optio illo ex
            nesciunt quo quisquam cupiditate, corporis tenetur asperiores!
          </div>
          <div class="card pressed">
            This card is long and pressed Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatum impedit autem sint porro
            aspernatur, voluptates, eos tempore officiis nihil exercitationem
            temporibus quas sunt culpa dolor ab laborum quam sed nesciunt.
          </div>
        </article>
        <article class="col-2">
          <div class="card animated">This card is animated when pressed</div>
          <div class="card pressed animated">
            This card is animated when pressed
          </div>
        </article>
      </section>
      <section>
        <h1>Buttons</h1>
        <article class="col-1">
          <div style="display: flex; justify-content: space-between">
            <button class="button">button</button>
          </div>
        </article>
      </section>
    </main>
`;return t.insertAdjacentHTML("beforeend",r),t};document.getElementById("root").append(d());
