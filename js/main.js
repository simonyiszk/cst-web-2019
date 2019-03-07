function toggleTeams() {
  var teams = document.getElementsByClassName("team-hidden-mobile");
  let isHidden = teams[0].style.display === "none";
  for (let index = 0; index < teams.length; index++) {
    const element = teams[index];
    if (isHidden) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  let button = document.getElementById("more-team-button");
  if (isHidden) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "V";
  }
}
