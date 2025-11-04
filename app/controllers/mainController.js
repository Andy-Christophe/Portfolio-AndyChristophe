


const mainController = {
   home: function (req, res) {
      res.render('home');
   },
   about: function (req, res) {
      res.render('about');
   },
   notFound: function (req, res) {
      res.status(404).render('error');
   }
}

export default mainController;