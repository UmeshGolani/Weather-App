// pages/HomePage.tsx
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CityStore from '../Store/CityStore';
import SearchBar from '../Components/SearchComponent';
import CityTable from '../Components/CityTable';

const HomePage: React.FC = observer(() => {
  useEffect(() => {
    CityStore.fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-3xl font-bold mb-4">Cities Data</h1>
        <SearchBar />
        <CityTable />
        {CityStore.loading && <p>Loading...</p>}
      </div>
    </div>
  );
});

export default HomePage;
