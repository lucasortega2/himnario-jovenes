import { useState, useMemo } from 'react';

const input = ({ himnos }) => {
  const [listahimnos, setListaHimnos] = useState(himnos);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const filtrarHimnos = (himnos) =>
    himnos.filter((himno) =>
      himno.titulo.toLowerCase().includes(input.toLowerCase()),
    );
  const himnosfiltrados = useMemo(() => filtrarHimnos(listahimnos), [input]);
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
          {himnosfiltrados?.map((himno, index) => (
            <a key={index} href={`/himnos/${himno.id}`} className="block">
              {himno.id}. {himno.titulo}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default input;
