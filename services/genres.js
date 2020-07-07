const MongoLib = require("../lib/mongo");

class GenresService {
  constructor() {
    this.collection = "genres";
    this.mongoDB = new MongoLib();
  }
  async getGenres() {
    const genres = await this.mongoDB.getAll(this.collection);
    return genres;
  }
  async getGenre({ genreId }) {
    const genre = await this.mongoDB.get(this.collection, genreId);
    return genre;
  }
  async createGenre(genre) {
    const createdGenreId = await this.mongoDB.create(this.collection, genre);
    return createdGenreId;
  }
  async updateGenre({ genreId, genre }) {
    const updatedGenreId = await this.mongoDB.update(
      this.collection,
      genreId,
      genre
    );

    return updatedGenreId;
  }

  async deleteGenre({ genreId }) {
    const deletedGenreId = await this.mongoDB.delete(this.collection, genreId);
    return deletedGenreId;
  }
}

module.exports = GenresService;
