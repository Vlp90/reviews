const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

//  CREATE ONE RECIPE
Recipe.create({
  title: "La recette de Vlad",
  level: "Easy Peasy",
  ingredients: ["Tomates", "Concombre", "Carottes"],
  cuisine: "Super simple",
})
  .then((newRecipe) => console.log("La nouvelle recette est :", newRecipe))
  .catch((err) => console.log("Error", err))

  // SEVERAL FROM FILE JSON
  .then(() =>
    Recipe.insertMany(data)
      .then((dbRes) => console.log(`Il y a ${dbRes.length} recettes `))
      .then(() =>
        data.forEach((recipe) =>
          console.log(`La recette '${recipe.title}' a été ajoutée `)
        )
      )
      .catch((error) => console.log(error))
  )

  .then(() =>
    // FIND AND UPDATE RECIPE
    Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    )
      .then((newDuration) =>
        console.log(
          `La nouvelle durée de preparatione de ${newDuration.title} est `,
          newDuration.duration
        )
      )
      .catch((error) => console.log(error))
  )

  .then(() =>
    Recipe.deleteOne({ name: "Carrot Cake" })
      .then(
        console.log(
          `Carrot Cake a été supprimé...`,
          `Nous avons maintenant ${data.length} recettes`
        )
      )
      .catch((error) => console.log(error))
  )
  .then(() =>
    mongoose.connection.close().then(console.log("Extinction BDD..."))
  )
  .catch((error) => {
    console.log(error);
  });
