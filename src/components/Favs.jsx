import { useEffect, useState } from 'react';
import { Cross } from './Cross';

const Favs = ({ himnos }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(storedFavorites);
  }, []);

  const removeFromFavorites = (himnoId) => {
    const updatedFavorites = favoritos.filter((id) => id !== himnoId);
    setFavoritos(updatedFavorites);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
  };

  const himnosFavoritos = himnos.filter((himno) =>
    favoritos.includes(himno.id),
  );

  return (
    <div className="flex flex-col container m-auto">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Himnos Favoritos
      </h3>

      <div className="flex w-full h-auto flex-col gap-4 md:flex-row flex-wrap">
        {himnosFavoritos.map((himno) => (
          <div
            key={himno.id}
            className="flex justify-between items-center bg-slate-100 w-full max-w-sm p-4 rounded-lg shadow-md m-auto"
          >
            <a
              href={`/himnos/${himno.id}`}
              className="text-lg font-medium text-gray-800 hover:text-blue-500 focus:outline-none flex-grow"
            >
              {himno.id}. {himno.titulo}
            </a>
            <button
              onClick={() => removeFromFavorites(himno.id)}
              className="text-red-500 focus:outline-none flex items-center"
            >
              <Cross />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
