const path = require("path");


// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/excercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/excercise.html'));
  });

  // blog route loads blog.html
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
};
