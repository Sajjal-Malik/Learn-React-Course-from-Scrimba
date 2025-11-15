import ReactMarkdown from "react-markdown";

export default function DisplayRecipe({ toggleRecipeShown, recipeText }) {
    console.log(recipeText);
    return (
        <section className="suggested-recipe-container">
            <button onClick={toggleRecipeShown}>Hide Recipe</button>
            <h2>Chef Gemini Recommends:</h2>
            <ReactMarkdown>
                {recipeText}
            </ReactMarkdown>
        </section>
    )
}