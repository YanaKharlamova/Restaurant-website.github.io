

window.onscroll=()=>{
  if(window.pageYOffset>30){
    document.getElementById("top-header").classList.add("top-header--white-background");
    document.getElementById("main-heading").classList.add("main-heading--unvisible");
  }else{
    document.getElementById("top-header").classList.remove("top-header--white-background");
    document.getElementById("main-heading").classList.remove("main-heading--unvisible");
  }
}
