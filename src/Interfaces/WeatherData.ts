// interfaces/WeatherData.ts
interface WeatherData {
    coord: {
      lat: number;
      lon: number;
    };
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }
  
  export default WeatherData;
  