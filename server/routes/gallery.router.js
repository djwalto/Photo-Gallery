const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE
router.post('/', (req, res) => {
  const galleryData = req.body.likes;
  console.log(galleryData);
  const queryText = `INSERT INTO "galleryitems" ("likes")
      VALUES ($1);`;

  pool
    .query(queryText, [galleryData.likes])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log('in router.put', req.params);
  const galleryId = req.params.id;
  console.log(galleryId);
  const galleryData = req.body;
  console.log(galleryData.data);
  const queryText = `UPDATE "galleryitems" SET "likes" = $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [galleryData.likes, galleryId])
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error', err);
      res.sendStatus(500);
    });
});

// GET Route
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM galleryitems;`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
