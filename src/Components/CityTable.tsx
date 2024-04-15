// components/CityTable.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import CityStore from '../Store/CityStore';

const CityTable: React.FC = observer(() => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">City Name</th>
          <th className="px-4 py-2">Country Name</th>
          <th className="px-4 py-2">Timezone</th>
        </tr>
      </thead>
      <tbody>
        {CityStore.cities.map((city: any, index :any) => (
          <tr key={index} className="cursor-pointer">
            <td className="border px-4 py-2">
              <Link to={`/weather/${city.name}`} className="text-blue-500">
                {city.name}
              </Link>
            </td>
            <td className="border px-4 py-2">{city.cou_name_en}</td>
            <td className="border px-4 py-2">{city.timezone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default CityTable;
