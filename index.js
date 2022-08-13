darkModeEnabled = new Boolean(false);
darkModeString = $(".darkModeButton:visible").first().text();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  darkModeEnabled = !darkModeEnabled;
  setDarkModeButton();
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkModeEnabled = true;
  document.body.style.transition = 'none';
  document.body.classList.toggle("dark-mode");
  setTimeout(function() {
    document.body.style.transition = '';
  })
}

$('[lang="el"]').hide();
setDarkModeButton();
    
function toogleLanguage() {
  $('[lang="el"]').toggle();
  $('[lang="en"]').toggle();
  $(".darkModeButton:hidden").text(darkModeString);
  darkModeString = $(".darkModeButton:visible").text();
  setDarkModeButton();
}

function setDarkModeButton() {
  split = darkModeString.split(" / ")
  if (darkModeEnabled) {
    $(".darkModeButton:visible").html(split[0]);
  } else {
    $(".darkModeButton:visible").html(split[1]);
  }
  
}