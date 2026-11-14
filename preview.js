(() => {
 const toast=document.getElementById("toast");let timer;
 document.querySelectorAll("[data-toast]").forEach(button=>button.addEventListener("click",()=>{
  toast.textContent=button.dataset.toast;toast.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove("show"),2800);
 }));
 const toggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
 toggle.addEventListener("click",()=>nav.classList.toggle("open"));
 nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("open")));
 document.querySelectorAll(".lobby-card").forEach(card=>card.addEventListener("click",()=>{
  document.querySelectorAll(".lobby-card").forEach(item=>item.classList.remove("active"));card.classList.add("active");
 }));
})();