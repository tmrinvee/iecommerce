fetch('path/to/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navContent = document.querySelector('.nav-content');

    navToggle.addEventListener('click', () => {
        navContent.classList.toggle('nav-open');
    });
});

$(function(){
    $("#navbar-placeholder").load("/html/nav.html");
  });
