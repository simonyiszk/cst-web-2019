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
  let button = document.getElementById("team-button");
  if (isHidden) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "V";
  }
}

function toggleAchieves() {
    var achieves = document.getElementsByClassName("achieve-hidden-mobile");
    let isHidden = achieves[0].style.display === "none";
    for (let index = 0; index < achieves.length; index++) {
      const element = achieves[index];
      if (isHidden) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
    let button = document.getElementById("achieve-button");
    if (isHidden) {
      button.innerHTML = "X";
    } else {
      button.innerHTML = "V";
    }
  }
