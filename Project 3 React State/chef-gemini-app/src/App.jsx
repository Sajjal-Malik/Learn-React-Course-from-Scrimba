import Header from './components/Header';
import Main from './components/Main';
import { getRecipeFromChefGemini } from './services/gemini_api'; // Import from new file

function App() {

  // This component now focuses purely on rendering other components
  // and could pass getRecipeFromChefClaude as a prop to Main if needed.
  return (
    <>
      <Header />
      {/* Pass the function down to Main component so it can use it */}
      <Main fetchRecipe={getRecipeFromChefGemini} />
    </>
  );
}

export default App;
