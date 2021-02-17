const db = require('../models/task');

module.exports = (app) => {

  // GET all tasks belonging to the board
  app.get('/api/tasks', function (req, res) {
    db.Task.findAll({
      where: {
        BoardId: req.body.id,
      },
    }).then((dbTask) => res.json(dbTask));
  });

  // POST a new task
  app.post('/api/boards', function (req, res) {
    db.Post.create(req.body).then((dbTask) => res.json(dbTask));
  });

  // PUT updates to a task (title/body/status)
  app.put('/api/tasks/:id', function (req) {
    db.Task.update(
      {
        title: req.body.title,
        body: req.body.body,
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id
        }
      });
  });

  // DELETE a task
  app.delete('/api/boards/:id', function (req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbTask) => res.json(dbTask));
  });

};