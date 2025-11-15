import { useState } from "react";
import IngredientsList from "./IngredientsList";
import DisplayRecipe from "./DisplayRecipe";

export default function Main({ fetchRecipe }) {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipeText, setRecipeText] = useState(''); // store the actual recipe from the ai model
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const formElement = event.currentTarget;
    //     const formData = new FormData();
    //     const newIngredient = formData.get("ingredient")

    //     setIngredients(previousIngredients => [...previousIngredients, newIngredient])
    //     formElement.reset();
    // }


    // Function to handle fetching the recipe from Claude
    async function handleGetRecipe() {
        if (ingredients.length === 0) {
            alert("Please add some ingredients first!");
            return;
        }

        setIsLoading(true); // Start loading
        try {
            // Call the function passed from App.jsx
            const recipe = await fetchRecipe(ingredients);
            setRecipeText(recipe); // Store the recipe text
            setRecipeShown(true); // Show the recipe component
        } catch (error) {
            console.error(error); // Log error if alert is not enough
        } finally {
            setIsLoading(false); // Stop loading regardless of success/failure
        }
    }

    // preventDefault and reset is handled automatically this way
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if (newIngredient.trim() !== '') {
            setIngredients(previousIngredients => [...previousIngredients, newIngredient.trim()]);
        }
    }

    function toggleRecipeShown() {
        setRecipeShown((prevShown) => !prevShown);
        if (recipeShown) {
            setRecipeText('');
        }
    }

    const hasIngredients = ingredients.length > 0 ? ingredients : null;

    return (
        <main>
            {/* Using this old way we have to define handler like 'onSubmit' & method='GET or POST' for the Form */}
            {/* <form action="" onSubmit={handleSubmit} method="POST" className="add-ingredient-form"> */}
            <form action={addIngredient} className="add-ingredient-form">
                <input type="text" placeholder="e.g. Jalepeno" aria-label="Add ingredient" name="ingredient" />
                <button>Add ingredient</button>
            </form>
            {/* This is an Example of Conditinal Rendering in React */}
            {
                hasIngredients &&
                <IngredientsList
                    ingredients={ingredients}
                    // Pass the handler to the IngredientsList component
                    onGetRecipeClick={handleGetRecipe}
                    isLoading={isLoading}
                />

            }
            <hr />
            {/* This is alos an Example of Conditinal Rendering in React */}
            {
                recipeShown &&
                <DisplayRecipe
                    toggleRecipeShown={toggleRecipeShown}
                    recipeText={recipeText}
                />
            }
        </main >
    )
}
