function createTemperatureGetter() {
  const temperatureData = {
    "New York": 20,
    London: 18,
    Paris: 22,
    Tokyo: 25,
    Sydney: 28,
  };

  const cache = {};

  return function getTemperatureForCity(city) {
    if (cache.hasOwnProperty(city)) {
      console.log(`Retrieved temperature for ${city} from cache`);
      return cache[city];
    } else {
      if (temperatureData.hasOwnProperty(city)) {
        console.log(`Fetching temperature for ${city} from API`);
        const temperature = temperatureData[city];
        cache[city] = temperature;
        return temperature;
      } else {
        console.log(`Temperature data not available for ${city}`);
        return null;
      }
    }
  };
}

const getTemperatureForCity = createTemperatureGetter();

// Usage examples
const temperature1 = getTemperatureForCity("New York");
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)
