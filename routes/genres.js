const express = require("express");
const GenresService = require("../services/genres");

function GenresApi(app) {
  const router = express.Router();
  const genresService = new GenresService();

  app.use("/api/genres/", router);

  //GET
  router.get("/", async (req, res, next) => {
    try {
      const genres = await genresService.getGenres();
      const answer = {
        genres: genres,
        message: "genres Listed",
      };
      //Response
      res.status(200).json(answer);
    } catch (error) {
      next(error);
    }
  });

  router.get("/:genreId", async (req, res, next) => {
    try {
      const { genreId } = req.params;
      const genre = await genresService.getGenre({ genreId });
      const answer = {
        genre: genre,
        message: "genres Listed",
      };
      //Response
      res.status(200).json(answer);
    } catch (error) {
      next(error);
    }
  });

  //POST
  router.post("/", async (req, res, next) => {
    try {
      const { body: genre } = req;
      const idGenreAdded = await genresService.createGenre(genre);
      res.status(201).json({
        idgenre: idGenreAdded,
        message: "Genre added",
      });
    } catch (error) {
      next(error);
    }
  });

  //PUT
  router.put("/:genreId", async (req, res, next) => {
    try {
      const { genreId } = req.params;
      const { body: genre } = req;
      const updatedGenreId = await genresService.updateGenre({
        genreId,
        genre,
      });

      //Anwer
      res.status(200).json({
        updatedGenreId,
        message: "genre updated",
      });
    } catch (error) {
      next(error);
    }
  });

  //DELETE
  router.delete("/:genreId", async (req, res, next) => {
    try {
      const { genreId } = req.params;
      const deleteGenreId = await genresService.deleteGenre({ genreId });

      //Answer
      res.status(200).json({
        deletedGenreId: deleteGenreId,
        message: "genre deleted",
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = GenresApi;
