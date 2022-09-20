



function getRecipes() {
  return [{
    name: "salmon soup",
    vegan: false,
    ingredients: [{
        name: "salmon",
        quantity: 1,
      }, {
        name: "cream",
        quantity: 2,
      }, {
        name: "milk",
        quantity: 1,
      }
    ]
  }, {
    name: "carbonara",
    vegan: false,
    ingredients: [{
        name: "pasta",
        quantity: 1,
      }, {
        name: "cheese",
        quantity: 5,
      }, {
        name: "milk",
        quantity: 1,
      }
    ]
  }, {
    name: "rice bowl",
    vegan: false,
    ingredients: [{
        name: "rice",
        quantity: 2,
      }, {
        name: "water",
        quantity: 1,
      }
    ]
  }];
}

// Implement functions that perform the following tasks

// Task: 1. Add a new recipe
const addRecipe = (recipes, recipe) => {

    if(recipe.name!=null && recipe.vegan !=null ){
         recipes.push(recipe);
    }
    return recipes;
  // check if recipe has name and vegan status
  // add recipe to recipes
  // return recipes array
}
// Task: 2. delete a recipe that matches a given name
const deleteRecipe = (recipes, recipeName) => {
  const updatedList= recipes.filter((recipe)=>{

    if(recipeName!==recipe.name){
      return true;
    } else {
      return false;
    }
  })
   
  return updatedList;
}

//Task: 3. get only vegan recipes

const onlyVeganRecipes=()=>{
    return recipes.filter((recipe)=>{
      return recipe.vegan===true;
    })
}

// Task: 4. get the names of the ingredients of a recipe
const getIngredientNames = (recipes, recipeName) => {
  const myRecipe = recipes.find(recipe => {
    return recipe.name === recipeName;
  })
  return myRecipe.ingredients.map(ingredient=>
    ingredient.name)
}

//Task: 5. add a recipe to favorites
const addToFavorites = (favorites, recipe) => {
    favorites.push(recipe);
    return favorites;
}

//Task: 6. remove a recipe from favorites
const removeFavorite = (favorites, recipeName) => {
 const  updatedFavorites = favorites.filter(recipe=>{
    if(recipe.name === recipeName){ 
      return false;
    } else {
      return true;
    }
  })
  return updatedFavorites;
}

// Task: 7. get the list of names of the items in favorites

const itemsNameInFavourites = (favorites) => {
  return favorites.map(recipe => recipe.name)
}

// the recipes array 


//Task: 8. edit a recipe - change the name

const editRecipe = (recipes, oldName, newName) => {
 const edited = recipes.map(recipe => {
    if(recipe.name === oldName){
      recipe.name = newName;
    } 
    return recipe
  })
  return edited;
  

  // find the recipe by oldName
  // change the name to newName
  // this can be done by map
  // map each recipe to itself. If the name matches, map it to a new object with newName
}


// Task: 9. edit a recipe - make it vegan / make it non-vegan

const toggleVeganStatus = (recipes, recipeName) => {
  const toBeEditedRecipe=recipes.find(recipe=>{
    if(recipe.name=== recipeName){
      return recipe;
    } 
  })
  
  if (toBeEditedRecipe.vegan=== true){
    return toBeEditedRecipe.vegan= false;
  } else{
    return toBeEditedRecipe.vegan=true;
  }
  }


// Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe
const searchByRecipeName = (recipes, recipeName) => {
 const myRecipeByName = recipes.filter(recipe=>{
    if(recipe.name === recipeName){
      return recipe;
    }   
  })
  return myRecipeByName;
}



// Task: 11. search by ingredient name - return all recipes that contain a given ingredient name
const searchByIngredientName = (recipes, ingredientName) => {
  const newRecipesWithIngredient = recipes.filter(recipe =>{
    const ingredientList = recipe.ingredients.filter(ingredient=>{
      if(ingredient.name === ingredientName ) {
        return true;
      }
    })

    if(ingredientList.length !== 0){
      return true;
    } else{
      return false;
    }
   
  })
  return newRecipesWithIngredient;
}


// Task: 12. add an ingredient to a recipe

const addIngredient = (recipes, recipeName,ingredient) => {
  const tobeChangedRecipe = recipes.find(recipe => {
    if(recipe.name === recipeName){
      return true;
    }
  })
    return tobeChangedRecipe.ingredients.push(ingredient);
}

addIngredient(recipes, "salmon soup",{name: "garlic", quantity: 2,} );
console.log(recipes);
// Task: 13. delete an ingredient from a recipe, 
const deleteIngredient = (recipes, recipeName, ingredientName) => {
  
  const myRecipeToBeChanged = recipes.find(recipe => {
    if(recipe.name === recipeName){
      return true;
    }
  })
    const ingredientToChange = myRecipeToBeChanged.ingredients.filter(ingredient => {
      if(ingredient.name !== ingredientName){
        return true;
      }
    });
    return ingredientToChange;
}
console.log(deleteIngredient(recipes,"carbonara", "cheese"));

// Task: 14. edit a recipe - change the quantity of an ingredient
    // find the recipe by name
   // update the ingredients of the recipe you found to have newQuantity

const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
  
  const myRecipeToBeChanged = recipes.find(recipe => {
    if(recipe.name === recipeName){
      return true;
    }
  })
  const ingredientToChange =myRecipeToBeChanged.ingredients.filter(ingredient=>{
    if(ingredient.name == ingredientName){
      ingredient.quantity = newQuantity;
    }
    return ingredient;
  });
  return ingredientToChange;
}

  // use map to map each recipe to itself, but if the name matches the recipeName, update the ingredients
  // return the updated recipes array 

const updatedNewRecipes = (recipes,recipeName) => recipes.map(recipe=>{
  if(recipe.name != recipeName){
    return recipe;
  } else{
    recipe.ingredients = editIngredientQuantity(recipes,"salmon soup" , "cream", 2);
    return recipe;
  }
})
 
console.log(updatedNewRecipes(recipes,"salmon soup"));

  

  

