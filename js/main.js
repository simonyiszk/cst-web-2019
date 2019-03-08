window.onload = function() {
  var teams = document.getElementsByClassName("team-hidden-mobile");
  for (let index = 0; index < teams.length; index++) {
    var element = teams[index];
    element.style.display = "none";
  }
  var achieves = document.getElementsByClassName("achieve-hidden-mobile");
  for (let index = 0; index < achieves.length; index++) {
    var element = achieves[index];
    element.style.display = "none";
  }
  var news = document.getElementsByClassName("news-hidden");
  for (let index = 0; index < news.length; index++) {
    var element = news[index];
    element.style.display = "none";
  }
}

function toggleTeams() {
  var teams = document.getElementsByClassName("team-hidden-mobile");
  let isHidden = teams[0].style.display === "none";
  for (let index = 0; index < teams.length; index++) {
    var element = teams[index];
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
    var teamsSection = document.getElementById('teams');
    teamsSection.scrollIntoView();
  }
}

function toggleAchieves() {
  var achieves = document.getElementsByClassName("achieve-hidden-mobile");
  var isHidden = achieves[0].style.display === "none";
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
    var achievements = document.getElementById('achievements');
    achievements.scrollIntoView();
  }
}

function toggleNews() {
  var news = document.getElementsByClassName("news-hidden");
  let isHidden = news[0].style.display === "none";
  for (let index = 0; index < news.length; index++) {
    const element = news[index];
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
    var newsSection = document.getElementById('news');
    newsSection.scrollIntoView();
  }
}
