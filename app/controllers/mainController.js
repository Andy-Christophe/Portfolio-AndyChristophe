


const mainController = {
   home: function (req, res) {
      res.render('home');
   },
   about: function (req, res) {
      res.render('about');
   },
   projects: function (req, res) {
      res.render('projects');
   },

   notFound: function (req, res) {
      res.status(404).render('error');
   }
}

export default mainController;