import RecipeList from "@/components/recipe-list";

async function FetchofLsitRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data?.recipes;
  } catch (e) {
    console.log(e);
  }
}
export default async function Recipes() {
  const recipeList = await FetchofLsitRecipes();

  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
