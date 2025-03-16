const mainController = {
    home: function(req,res){
        res.render('home');
     },

     notfound: function(req,res){
        res.status(404).render('error', {
            message: `La page demandée n'a pas pu être trouvée`,
          });
     }
}

export default mainController;