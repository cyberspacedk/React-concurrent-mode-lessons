import React from "react";
import ErrorBoundary from '../../components/ErrorBoundary';

// 1. Change this static import to a dynamic import, wrapped in React.lazy
// import PokemonDetail from "./pokemon-detail";

const PokemonDetail = React.lazy(()=> import("./pokemon-detail"))

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>

      {/* Wrap area that could down app */}
      <ErrorBoundary fallback="Couldn`t catch">
      {/* 2. Wrap this component in a React.Suspense component with fallback */}
        <React.Suspense fallback="Loading. Wait ...."> 
          <PokemonDetail />
        </React.Suspense>
      </ErrorBoundary>
    </div>
   
  );
} 