import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';

const PokemonStats = ({ pokemon }) => {
  const data = [
    {name: 'Attack', number: pokemon.attack},
    {name: 'Defense', number: pokemon.defence},
    {name: 'Stamina', number: pokemon.stamina}
  ]
  return (
    <div className="stats-container">
      <BarChart width={600} height={300} data={data} barSize={100}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Bar dataKey="number" fill="#ee1515" />
      </BarChart>
    </div>
  );
}

export default PokemonStats;