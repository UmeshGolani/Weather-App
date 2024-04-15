// components/SearchBar.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import cityStore from '../Store/CityStore';

const SearchBar: React.FC = observer(() => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    cityStore.setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    cityStore.fetchData();
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search by city name..."
        value={cityStore.searchTerm}
        onChange={handleSearchChange}
        className="border px-4 py-2 mr-4"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
});

export default SearchBar;
