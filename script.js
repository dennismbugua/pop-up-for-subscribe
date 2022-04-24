const subs_cont_elm = document.getElementById("subs-cont");
const btn_sub_close = document.getElementById("subs-close");

btn_sub_close.addEventListener("click", () => {
  subs_cont_elm.classList.remove("show");

  /* Code To Show Subscribe Modale After 2 Seconds */
  setTimeout(() => {
    subs_cont_elm.classList.add("show");
  }, 1000 * 2);
});