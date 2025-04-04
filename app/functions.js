const functions = {

    aboutClick: function() {
        const about = document.querySelector('#about');
        about.addEventListener('click', function(res, req) {
            //transition to about page
            res.render('about');
        }
    );}
}

export default functions;