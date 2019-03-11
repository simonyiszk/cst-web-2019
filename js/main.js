window.onload = function() {
  let teams = document.getElementsByClassName("team-hidden-mobile");
  for (let index = 0; index < teams.length; index++) {
    let element = teams[index];
    element.style.display = "none";
  }
  let achieves = document.getElementsByClassName("achieve-hidden-mobile");
  for (let index = 0; index < achieves.length; index++) {
    let element = achieves[index];
    element.style.display = "none";
  }
  let news = document.getElementsByClassName("news-hidden");
  for (let index = 0; index < news.length; index++) {
    let element = news[index];
    element.style.display = "none";
  }
}

function toggleTeams() {
  let teams = document.getElementsByClassName("team-hidden-mobile");
  let isHidden = teams[0].style.display === "none";
  for (let index = 0; index < teams.length; index++) {
    let element = teams[index];
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
    let teamsSection = document.getElementById('teams');
    teamsSection.scrollIntoView();
  }
}

function toggleAchieves() {
  let achieves = document.getElementsByClassName("achieve-hidden-mobile");
  let isHidden = achieves[0].style.display === "none";
  for (let index = 0; index < achieves.length; index++) {
    let element = achieves[index];
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
    let achievements = document.getElementById('achievements');
    achievements.scrollIntoView();
  }
}

function toggleNews() {
  let news = document.getElementsByClassName("news-hidden");
  let isHidden = news[0].style.display === "none";
  for (let index = 0; index < news.length; index++) {
    let element = news[index];
    if (isHidden) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  let button = document.getElementById("news-button");
  if (isHidden) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "V";
    let newsSection = document.getElementById('news');
    newsSection.scrollIntoView();
  }
}
