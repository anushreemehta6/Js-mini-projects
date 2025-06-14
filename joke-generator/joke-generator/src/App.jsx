import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
      setJoke(null);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container bg-amber-200 w-screen min-h-screen flex flex-col justify-evenly px-5 py-10">
      <h1 className="heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6">
        Get Your Daily Dose of LOLs, No Prescription Needed.
      </h1>

      <div className="flex flex-1 justify-center items-center">
        <div className="box flex flex-col bg-black rounded-2xl w-full max-w-xl p-6 gap-6 items-center shadow-lg">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-24 sm:w-32 md:w-40 mb-4"
          />

          {joke ? (
            <div className="text-white text-center space-y-2">
              <p className="text-lg font-semibold">{joke.setup}</p>
              <p className="text-md">{joke.punchline}</p>
            </div>
          ) : (
            <p className="text-white">Oops! Couldn't fetch a joke.</p>
          )}

          <button
            className="getJokes bg-amber-200 text-black text-lg sm:text-xl px-4 py-2 rounded-md hover:bg-blue-400 transition"
            onClick={fetchJoke}
          >
            Generate A Random Joke
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
