
const about = document.querySelector('#about');
about.addEventListener('click', function (res, req) {
    //transition to about page
    res.render('about');
}
);

const showStacks = document.querySelector('#stacksShow');
const containerClick = document.querySelector('#show');
containerClick.addEventListener('click', showStacks.classList.toggle('show'));
