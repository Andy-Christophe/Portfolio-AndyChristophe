const mainController = {
    home: function(req,res){
        res.render('home.ejs');
     },

     notFound: function(req,res){
        res.status(404).render('error.ejs');
     }
}

export default mainController;