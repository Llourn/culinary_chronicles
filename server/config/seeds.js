require("dotenv").config();
const db = require("./connection");
const { User, Recipe, LikedRecipe } = require("../models");

db.once("open", async () => {
  await User.deleteMany();
  let newUsers = [];
  newUsers.push(
    await User.create({
      firstName: "Jake",
      lastName: "Peralta",
      email: "jakeperalta@nine-nine.com",
      password: "Password123!",
      profilePicUrl:
        "https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=993&q=80",
      bannerUrl:
        "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
      bio: "Detective by day, chef by night. I specialize in adventurous and creative dishes that will keep you on your toes!",
    })
  );

  newUsers.push(
    await User.create({
      firstName: "Amy",
      lastName: "Santiago",
      email: "amysantiago@nine-nine.com",
      password: "Password123!",
      profilePicUrl:
        "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
      bannerUrl:
        "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bio: "Precision and perfection are my guiding principles in both detective work and cooking. Prepare to taste dishes that are meticulously crafted.",
    })
  );

  newUsers.push(
    await User.create({
      firstName: "Rosa",
      lastName: "Diaz",
      email: "rosadiaz@nine-nine.com",
      password: "Password123!",
      profilePicUrl:
        "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
      bannerUrl:
        "https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
      bio: "Tough on the outside, but a culinary genius on the inside. I excel in bold and spicy flavors that will leave you craving for more.",
    })
  );

  newUsers.push(
    await User.create({
      firstName: "Terry",
      lastName: "Jeffords",
      email: "terryjeffords@nine-nine.com",
      password: "Password123!",
      profilePicUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bannerUrl:
        "https://images.unsplash.com/photo-1615224299941-04a854c101d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bio: "As a fitness enthusiast and a chef, I believe in creating delicious and healthy meals. Join me on a journey of flavor and nutrition!",
    })
  );

  newUsers.push(
    await User.create({
      firstName: "Raymond",
      lastName: "Holt",
      email: "raymondholt@nine-nine.com",
      password: "Password123!",
      profilePicUrl:
        "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bannerUrl:
        "https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2356&q=80",
      bio: "I bring a touch of elegance and sophistication to the culinary world. My dishes are refined, sophisticated, and prepared with utmost care.",
    })
  );

  newUsers.push(
    await User.create({
      firstName: "Charles",
      lastName: "Boyle",
      email: "charles@nine-nine.com",
      password: "Password123!",
      profilePicUrl:
        "https://images.unsplash.com/photo-1618517048316-755f0a0a366e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      bannerUrl:
        "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2578&q=80",
      bio: "My passion for food knows no bounds! From hearty comfort food to delicate pastries, I will take you on a gastronomic adventure.",
    })
  );

  await Recipe.deleteMany();

  let newRecipes = await Recipe.insertMany([
    {
      author: newUsers[0]._id,
      name: "Scrambled Eggs",
      description: "Delicious scrambled eggs for a quick and easy breakfast.",
      prepTime: "5 minutes",
      cookTime: "5 minutes",
      totalTime: "10 minutes",
      servings: 1,
      yield: "1 plate",
      ingredients: [
        "2 eggs",
        "1 tablespoon butter",
        "Salt and pepper to taste",
      ],
      directions: [
        "Crack the eggs into a bowl and whisk.",
        "Heat the butter in a non-stick pan over medium heat.",
        "Pour the whisked eggs into the pan and cook, stirring gently, until they reach your desired consistency.",
        "Season with salt and pepper.",
        "Serve hot.",
      ],
      image:
        "https://images.pexels.com/photos/15584737/pexels-photo-15584737/free-photo-of-delicious-scrambled-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["breakfast"],
    },
    {
      author: newUsers[1]._id,
      name: "Caesar Salad",
      description: "Classic Caesar salad with homemade dressing.",
      prepTime: "15 minutes",
      cookTime: "0 minutes",
      totalTime: "15 minutes",
      servings: 2,
      yield: "2 servings",
      ingredients: [
        "1 head romaine lettuce",
        "1/4 cup grated Parmesan cheese",
        "Croutons",
        "Caesar dressing",
      ],
      directions: [
        "Wash and chop the romaine lettuce.",
        "Toss the lettuce with the grated Parmesan cheese.",
        "Add croutons.",
        "Drizzle Caesar dressing over the salad.",
        "Toss to coat evenly.",
        "Serve immediately.",
      ],
      image:
        "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["lunch", "dinner"],
    },
    {
      author: newUsers[2]._id,
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish with a rich meat sauce.",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
      totalTime: "45 minutes",
      servings: 4,
      yield: "4 servings",
      ingredients: [
        "200g spaghetti",
        "300g ground beef",
        "1 onion",
        "2 cloves garlic",
        "1 can crushed tomatoes",
        "1 tablespoon tomato paste",
        "1 teaspoon dried oregano",
        "Salt and pepper to taste",
        "Grated Parmesan cheese for garnish",
      ],
      directions: [
        "Cook the spaghetti according to package instructions.",
        "In a separate pan, brown the ground beef over medium heat.",
        "Add chopped onion and minced garlic to the pan and cook until softened.",
        "Stir in crushed tomatoes, tomato paste, dried oregano, salt, and pepper.",
        "Simmer the sauce for 15-20 minutes.",
        "Serve the sauce over cooked spaghetti.",
        "Garnish with grated Parmesan cheese.",
      ],
      image:
        "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["dinner"],
    },
    {
      author: newUsers[3]._id,
      name: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies.",
      prepTime: "15 minutes",
      cookTime: "12 minutes",
      totalTime: "27 minutes",
      servings: 24,
      yield: "24 cookies",
      ingredients: [
        "1 cup unsalted butter, softened",
        "1 cup granulated sugar",
        "1 cup packed brown sugar",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "3 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1/2 teaspoon salt",
        "2 cups chocolate chips",
      ],
      directions: [
        "Preheat oven to 375°F (190°C).",
        "In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.",
        "Beat in the eggs one at a time, then stir in the vanilla.",
        "In a separate bowl, combine the flour, baking soda, and salt.",
        "Gradually add the dry ingredients to the butter mixture and mix well.",
        "Stir in the chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until golden brown.",
        "Cool on wire racks.",
      ],
      image:
        "https://images.pexels.com/photos/7243524/pexels-photo-7243524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["dessert"],
    },
    {
      author: newUsers[4]._id,
      name: "Guacamole",
      description: "Fresh and creamy guacamole dip.",
      prepTime: "10 minutes",
      cookTime: "0 minutes",
      totalTime: "10 minutes",
      servings: 4,
      yield: "4 servings",
      ingredients: [
        "2 ripe avocados",
        "1/2 onion, finely chopped",
        "1 tomato, diced",
        "1/4 cup chopped fresh cilantro",
        "1 tablespoon lime juice",
        "Salt and pepper to taste",
      ],
      directions: [
        "Cut the avocados in half and remove the pits.",
        "Scoop the avocado flesh into a bowl and mash with a fork.",
        "Add the chopped onion, diced tomato, cilantro, lime juice, salt, and pepper.",
        "Mix well to combine.",
        "Taste and adjust the seasoning if needed.",
        "Serve with tortilla chips or as a topping for tacos or burritos.",
      ],
      image:
        "https://images.pexels.com/photos/7601338/pexels-photo-7601338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["snack", "other"],
    },
    {
      author: newUsers[0]._id,
      name: "Pancakes",
      description: "Fluffy pancakes for a delicious breakfast.",
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      totalTime: "20 minutes",
      servings: 2,
      yield: "6 pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "2 teaspoons baking powder",
        "1/2 teaspoon salt",
        "1 cup milk",
        "1 large egg",
        "2 tablespoons unsalted butter, melted",
        "1 teaspoon vanilla extract",
      ],
      directions: [
        "In a large bowl, whisk together the flour, sugar, baking powder, and salt.",
        "In a separate bowl, whisk together the milk, egg, melted butter, and vanilla extract.",
        "Pour the wet ingredients into the dry ingredients and stir until just combined.",
        "Heat a non-stick skillet or griddle over medium heat.",
        "Pour 1/4 cup of batter onto the skillet for each pancake.",
        "Cook until bubbles form on the surface, then flip and cook until golden brown.",
        "Serve hot with your favorite toppings.",
      ],
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["breakfast"],
    },
    {
      author: newUsers[1]._id,
      name: "Chicken Parmesan",
      description:
        "Breaded chicken cutlets topped with marinara sauce and melted cheese.",
      prepTime: "15 minutes",
      cookTime: "30 minutes",
      totalTime: "45 minutes",
      servings: 4,
      yield: "4 servings",
      ingredients: [
        "4 boneless, skinless chicken breasts",
        "1 cup breadcrumbs",
        "1/2 cup grated Parmesan cheese",
        "1 teaspoon dried oregano",
        "1/2 teaspoon garlic powder",
        "Salt and pepper to taste",
        "1 cup marinara sauce",
        "1 cup shredded mozzarella cheese",
        "Fresh basil leaves for garnish",
      ],
      directions: [
        "Preheat oven to 400°F (200°C).",
        "In a shallow dish, combine breadcrumbs, Parmesan cheese, oregano, garlic powder, salt, and pepper.",
        "Dip each chicken breast in the breadcrumb mixture, pressing firmly to coat.",
        "Place the breaded chicken breasts on a greased baking sheet.",
        "Bake for 20 minutes or until chicken is cooked through.",
        "Remove from the oven and spoon marinara sauce over each chicken breast.",
        "Sprinkle shredded mozzarella cheese on top.",
        "Return to the oven and bake for an additional 10 minutes or until cheese is melted and bubbly.",
        "Garnish with fresh basil leaves before serving.",
      ],
      image:
        "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["dinner"],
    },
    {
      author: newUsers[2]._id,
      name: "Mango Salsa",
      description: "Fresh and tangy salsa with juicy mangoes.",
      prepTime: "15 minutes",
      cookTime: "0 minutes",
      totalTime: "15 minutes",
      servings: 4,
      yield: "4 servings",
      ingredients: [
        "2 ripe mangoes, peeled and diced",
        "1/2 red bell pepper, diced",
        "1/4 cup finely chopped red onion",
        "1 jalapeño pepper, seeded and minced",
        "2 tablespoons chopped fresh cilantro",
        "Juice of 1 lime",
        "Salt to taste",
      ],
      directions: [
        "In a bowl, combine the diced mangoes, red bell pepper, red onion, jalapeño pepper, and cilantro.",
        "Squeeze lime juice over the mixture.",
        "Season with salt to taste.",
        "Toss gently to combine all the ingredients.",
        "Allow the flavors to meld for at least 10 minutes before serving.",
        "Serve as a dip with tortilla chips or as a topping for grilled fish or tacos.",
      ],
      image:
        "https://images.pexels.com/photos/5848734/pexels-photo-5848734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["snack", "other"],
    },
    {
      author: newUsers[3]._id,
      name: "Tomato Basil Soup",
      description: "Creamy tomato soup with fresh basil.",
      prepTime: "10 minutes",
      cookTime: "30 minutes",
      totalTime: "40 minutes",
      servings: 4,
      yield: "4 servings",
      ingredients: [
        "2 tablespoons olive oil",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "4 cups canned crushed tomatoes",
        "2 cups vegetable broth",
        "1/4 cup chopped fresh basil",
        "1/2 cup heavy cream",
        "Salt and pepper to taste",
      ],
      directions: [
        "Heat olive oil in a large pot over medium heat.",
        "Add chopped onion and minced garlic.",
        "Cook until onion is soft and translucent.",
        "Add crushed tomatoes and vegetable broth.",
        "Bring the mixture to a boil, then reduce heat and simmer for 15 minutes.",
        "Stir in chopped basil.",
        "Use an immersion blender to puree the soup until smooth.",
        "Stir in heavy cream.",
        "Season with salt and pepper.",
        "Heat the soup for an additional 5 minutes.",
        "Serve hot with a garnish of fresh basil leaves.",
      ],
      image:
        "https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg",
      tags: ["lunch", "dinner"],
    },
    {
      author: newUsers[4]._id,
      name: "Berry Smoothie",
      description: "Refreshing smoothie packed with mixed berries.",
      prepTime: "5 minutes",
      cookTime: "0 minutes",
      totalTime: "5 minutes",
      servings: 2,
      yield: "2 servings",
      ingredients: [
        "1 cup mixed berries (strawberries, blueberries, raspberries)",
        "1 ripe banana",
        "1 cup milk (dairy or plant-based)",
        "1/2 cup plain yogurt",
        "1 tablespoon honey (optional)",
      ],
      directions: [
        "Place the mixed berries, banana, milk, yogurt, and honey (if using) in a blender.",
        "Blend until smooth and creamy.",
        "Taste and add more honey if desired.",
        "Pour into glasses and serve immediately.",
        "Garnish with additional berries if desired.",
      ],
      image:
        "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["breakfast", "snack"],
    },
    {
      author: newUsers[5]._id,
      name: "Caprese Salad",
      description:
        "Simple and elegant salad with fresh tomatoes, mozzarella, and basil.",
      prepTime: "10 minutes",
      cookTime: "0 minutes",
      totalTime: "10 minutes",
      servings: 2,
      yield: "2 servings",
      ingredients: [
        "2 ripe tomatoes",
        "8 oz fresh mozzarella cheese",
        "Handful of fresh basil leaves",
        "2 tablespoons extra virgin olive oil",
        "Balsamic glaze",
        "Salt and pepper to taste",
      ],
      directions: [
        "Slice the tomatoes and mozzarella into 1/4-inch thick slices.",
        "Arrange the tomato and mozzarella slices on a serving platter, alternating them.",
        "Tuck fresh basil leaves between the tomato and mozzarella slices.",
        "Drizzle with extra virgin olive oil.",
        "Drizzle balsamic glaze over the salad.",
        "Season with salt and pepper.",
        "Serve immediately as a light appetizer or side dish.",
      ],
      image:
        "https://images.pexels.com/photos/13241857/pexels-photo-13241857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["lunch", "dinner"],
    },
    {
      author: newUsers[5]._id,
      name: "Chicken Stir-Fry",
      description: "Quick and flavorful chicken stir-fry with vegetables.",
      prepTime: "15 minutes",
      cookTime: "15 minutes",
      totalTime: "30 minutes",
      servings: 4,
      yield: "4 servings",
      ingredients: [
        "2 chicken breasts, sliced",
        "2 tablespoons soy sauce",
        "1 tablespoon cornstarch",
        "1 tablespoon vegetable oil",
        "1 bell pepper, sliced",
        "1 zucchini, sliced",
        "1 carrot, julienned",
        "1 cup broccoli florets",
        "1/2 cup sliced mushrooms",
        "2 cloves garlic, minced",
        "1 teaspoon grated ginger",
        "Salt and pepper to taste",
      ],
      directions: [
        "In a bowl, combine sliced chicken, soy sauce, and cornstarch.",
        "Toss to coat the chicken evenly.",
        "Heat vegetable oil in a large pan or wok over high heat.",
        "Add the chicken to the pan and stir-fry until cooked through.",
        "Remove the chicken from the pan and set aside.",
        "In the same pan, add sliced bell pepper, zucchini, carrot, broccoli, mushrooms, garlic, and ginger.",
        "Stir-fry the vegetables until crisp-tender.",
        "Return the chicken to the pan and toss to combine with the vegetables.",
        "Season with salt and pepper.",
        "Serve hot with steamed rice or noodles.",
      ],
      image:
        "https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["dinner"],
    },
    {
      author: newUsers[5]._id,
      name: "Blueberry Muffins",
      description: "Moist and fluffy muffins bursting with blueberries.",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      totalTime: "35 minutes",
      servings: 12,
      yield: "12 muffins",
      ingredients: [
        "2 cups all-purpose flour",
        "1 cup granulated sugar",
        "2 teaspoons baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup buttermilk",
        "1/2 cup unsalted butter, melted",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "1 1/2 cups fresh blueberries",
      ],
      directions: [
        "Preheat oven to 375°F (190°C).",
        "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
        "In a separate bowl, whisk together buttermilk, melted butter, eggs, and vanilla extract.",
        "Pour the wet ingredients into the dry ingredients and stir until just combined.",
        "Gently fold in the fresh blueberries.",
        "Divide the batter evenly among a greased muffin tin or lined muffin cups.",
        "Bake for 18-20 minutes or until a toothpick inserted into the center comes out clean.",
        "Allow the muffins to cool in the tin for 5 minutes, then transfer to a wire rack to cool completely.",
      ],
      image:
        "https://images.pexels.com/photos/556829/pexels-photo-556829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["breakfast", "snack"],
    },
    {
      author: newUsers[5]._id,
      name: "Vegetable Curry",
      description: "Hearty and flavorful vegetable curry with aromatic spices.",
      prepTime: "20 minutes",
      cookTime: "30 minutes",
      totalTime: "50 minutes",
      servings: 6,
      yield: "6 servings",
      ingredients: [
        "2 tablespoons vegetable oil",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 tablespoon grated ginger",
        "2 tablespoons curry powder",
        "1 teaspoon ground cumin",
        "1/2 teaspoon ground turmeric",
        "1/4 teaspoon cayenne pepper",
        "2 cups chopped mixed vegetables (carrots, potatoes, bell peppers, peas, etc.)",
        "1 can (14 oz) coconut milk",
        "1 cup vegetable broth",
        "Salt to taste",
        "Fresh cilantro leaves for garnish",
      ],
      directions: [
        "Heat vegetable oil in a large pot over medium heat.",
        "Add chopped onion, minced garlic, and grated ginger.",
        "Cook until onion is soft and translucent.",
        "Add curry powder, cumin, turmeric, and cayenne pepper.",
        "Stir well to coat the onions and spices.",
        "Add chopped mixed vegetables and cook for 2-3 minutes.",
        "Pour in coconut milk and vegetable broth.",
        "Bring the mixture to a boil, then reduce heat and simmer for 20-25 minutes or until the vegetables are tender.",
        "Season with salt to taste.",
        "Serve hot with steamed rice or naan bread.",
        "Garnish with fresh cilantro leaves.",
      ],
      image:
        "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["lunch", "dinner"],
    },
    {
      author: newUsers[5]._id,
      name: "Chocolate Lava Cake",
      description:
        "Decadent individual chocolate cakes with a gooey molten center.",
      prepTime: "15 minutes",
      cookTime: "12 minutes",
      totalTime: "27 minutes",
      servings: 4,
      yield: "4 cakes",
      ingredients: [
        "1/2 cup unsalted butter",
        "4 oz dark chocolate, chopped",
        "1/2 cup powdered sugar",
        "2 large eggs",
        "2 egg yolks",
        "1/2 teaspoon vanilla extract",
        "1/4 cup all-purpose flour",
        "Pinch of salt",
        "Powdered sugar for dusting",
        "Fresh berries for garnish",
      ],
      directions: [
        "Preheat oven to 425°F (220°C).",
        "Grease four ramekins or custard cups with butter.",
        "In a microwave-safe bowl, melt the butter and chopped dark chocolate together in the microwave.",
        "Stir until smooth and well combined.",
        "In a separate bowl, whisk together powdered sugar, eggs, egg yolks, and vanilla extract.",
        "Add the melted chocolate mixture to the egg mixture and whisk until smooth.",
        "Gradually whisk in the flour and a pinch of salt.",
        "Divide the batter equally among the prepared ramekins.",
        "Place the ramekins on a baking sheet and bake for 12 minutes.",
        "The cakes should be set around the edges but still slightly soft in the center.",
        "Remove from the oven and let them cool in the ramekins for 1-2 minutes.",
        "Carefully invert each ramekin onto a serving plate.",
        "Dust with powdered sugar and garnish with fresh berries.",
        "Serve immediately, while the cakes are still warm and the centers are gooey.",
      ],
      image:
        "https://images.pexels.com/photos/16488171/pexels-photo-16488171/free-photo-of-a-chocolate-cake-with-sprinkles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["dessert"],
    },
  ]);

  let likedRecipeQueue = [];

  newUsers.forEach((newUser) => {
    newRecipes.forEach((newRecipe) => {
      if (Math.random() > 0.5) {
        likedRecipeQueue.push({
          user: newUser._id,
          recipe: newRecipe._id,
        });
      }
    });
  });

  let likedRecipes = await LikedRecipe.insertMany(likedRecipeQueue);

  // console.log(likedRecipes);

  process.exit();
});
