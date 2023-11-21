function showHero(heroId) {
  const class_hero = document.querySelectorAll(".hero")
  for (i = 0; i < class_hero.length; i++) {
    class_hero[i].style.display = "none"
  };
  var hero = document.getElementById(heroId);
  if (hero.style.display === "none") {
    hero.style.display = "block";
  } else {
    hero.style.display = "none";
  }
}
