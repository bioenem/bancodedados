let express = require('express');
let sqlite3 = require('sqlite3').verbose();
let app = express();
let cors = require('cors');
app.use(cors());

let db = new sqlite3.Database('db_tcc.db')


app.get('/citologia', (req, res) => {
    db.all('SELECT Enunciado, ItemA, ItemB, ItemC, ItemD, ItemE, RespostaCerta, LinkResposta FROM Questoes WHERE IdConteudo = 1', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    });
  });
app.get('/ecologia', (req, res) => {
      db.all('SELECT Enunciado, ItemA, ItemB, ItemC, ItemD, ItemE, RespostaCerta, LinkResposta FROM Questoes WHERE IdConteudo = 2', (err, rows) => {
          if (err) {
        res.status(500).json({ error: err.message });
        return;
    }
      res.json({ data: rows });
    });
  });
app.get('/evolucao', (req, res) => {
    db.all('SELECT Enunciado, ItemA, ItemB, ItemC, ItemD, ItemE, RespostaCerta, LinkResposta FROM Questoes WHERE IdConteudo = 3', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});
app.get('/fisiologia', (req, res) => {
    db.all('SELECT Enunciado, ItemA, ItemB, ItemC, ItemD, ItemE, RespostaCerta, LinkResposta FROM Questoes WHERE IdConteudo = 4', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    });
  });
app.get('/genetica', (req, res) => {
    db.all('SELECT Enunciado, ItemA, ItemB, ItemC, ItemD, ItemE, RespostaCerta, LinkResposta FROM Questoes WHERE IdConteudo = 5', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    });
  });

app.listen(3000, () => {
    console.log('funcionando')
})