function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
    document.getElementsByClassName("card").classList.toggle("dark-mode")
}

$('[lang="el"]').hide();
    
function toogleLanguage() {
  $('[lang="el"]').toggle();
  $('[lang="en"]').toggle();
}