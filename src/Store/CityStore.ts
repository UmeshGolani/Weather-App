// stores/CityStore.ts
import { makeAutoObservable } from 'mobx';
import City from '../Interfaces/City';
import WeatherData from '../Interfaces/WeatherData';

class CityStore {
  cities: City[] = [];
  loading: boolean = false;
  searchTerm: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setCities(cities: City[]) {
    this.cities = cities;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  async fetchData() {
    this.setLoading(true);
    try {
      const response = await fetch(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${this.searchTerm}&facet=timezone&facet=country_name_en&facet=admin1_code&facet=admin2_code&facet=admin3_code&facet=admin4_code&refine.population=1000&rows=10`
      );
      const data = await response.json();
      const cities = data.records.map((record: any) => ({
        name: record.fields.name,
        cou_name_en: record.fields.country_name_en,
        timezone: record.fields.timezone,
      }));
      this.setCities(cities);
    } catch (error) {
      console.error('Error fetching cities data:', error);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchWeather(cityName: string): Promise<WeatherData | null> {
    try {
      const apiKey = '7d7bd07cbd9835e8e3a45b8664bd76ff';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data: WeatherData = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
}

export default new CityStore();
