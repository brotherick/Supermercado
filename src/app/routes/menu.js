const model = require('../models/categorias');

module.exports = (app, passport) => {

    app.get('/categorias', (req, res) => {
        model.find({},(err,categorias) => {
            if(err) throw err;
            res.render('categorias.ejs',{
                title: 'Categorias',
                categorias: categorias
            });
        });
    });

    app.post('/turn/:id', (req, res) => {
        let body = req.body;
        let id = req.params.id;
        model.findById(id,(err,categorias) => {
            if(err) throw err;
            categorias.title = body.title;
            categorias.save()
                .then(() => res.redirect('/categorias'))
        });
    });

    app.get('/delete/:id', (req, res) => {
        let id = req.params.id;
        model.remove({_id: id}, (err,categorias) => {
            if(err) throw err;
            res.redirect('/categorias');
        });
    });

    app.post('/add',  (req, res) => {
        let body = req.body;
        body.status = false;

        model.create(body,(err,categorias) => {
           if(err) throw err;
           res.redirect('/categorias');
        });
    });

  }
