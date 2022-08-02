function toggleDarkMode() {
  document.body.classList.toggle("dark-mode")
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.style.transition = 'none';
  document.body.classList.toggle("dark-mode")
  setTimeout(function() {
    document.body.style.transition = '';
  })
}

$('[lang="el"]').hide();
    
function toogleLanguage() {
  $('[lang="el"]').toggle();
  $('[lang="en"]').toggle();
}