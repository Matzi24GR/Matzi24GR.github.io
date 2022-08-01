function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
    document.getElementsByClassName("card").classList.toggle("dark-mode")
}

$('[lang="el"]').hide();
    
$('#switch-lang').click(function() {
  $('[lang="el"]').toggle();
  $('[lang="en"]').toggle();
});