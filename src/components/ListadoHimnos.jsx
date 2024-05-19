import { useState, useMemo, useEffect } from 'react';
import { MdiHeartPlusOutline } from './Heart';
import { HugeiconsHeartRemove } from './removeFavs';
import useInput from '../hooks/useInput';
import useListaHimnos from '../hooks/useListaHimnos';
const ListadoHimnos = ({ himnos }) => {
  const [listahimnos, setListaHimnos] = useState(himnos);
  const { addToFavorites, isFavorite } = useListaHimnos();
  const { input, handleInput } = useInput();

  const filtrarHimnos = (himnos) =>
    himnos.filter((himno) =>
      himno.titulo.toLowerCase().includes(input.toLowerCase()),
    );

  const himnosFiltrados = useMemo(
    () => filtrarHimnos(listahimnos),
    [input, listahimnos],
  );

  return (
    <>
      <div className="flex justify-center mt-6">
        <input
          onChange={handleInput}
          value={input}
          placeholder="Busca tu himno"
          type="text"
          className="p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        <ul className="flex flex-col gap-2">
          {himnosFiltrados.map((himno, index) => (
            <div
              key={index}
              data-himno-id={himno.id}
              className="flex gap-4 justify-between"
            >
              <a href={`/himnos/${himno.id}`}>
                {himno.id}. {himno.titulo}
              </a>
              <button
                onClick={() => addToFavorites(himno.id)}
                className="rounded-md text-red-500 focus:outline-none transition-all duration-300"
              >
                {/* Expresión condicional para mostrar un icono u otro */}
                {isFavorite(himno.id) ? (
                  <HugeiconsHeartRemove />
                ) : (
                  <MdiHeartPlusOutline />
                )}
                <img src="" alt="" />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListadoHimnos;
