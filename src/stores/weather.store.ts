import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import GetLocation from 'react-native-get-location';
import { WeatherAPI } from '~/api';

class WeatherStore {
  @observable
  @persist('object')
  location: Partial<ValuesLocation> = {};

  @observable
  loading = false;

  @observable
  @persist('object')
  dataPrevision: Partial<ValuesDataPrevision> = {
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
    weather: [
      {
        description: '',
      },
    ],
    name: '',
    sys: {
      country: '',
    },
  };

  @action
  getDataPrevision = async (): Promise<void> => {
    this.toggleLoading();
    const { latitude, longitude } = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    });

    const response = await WeatherAPI.getDataWeather(latitude, longitude);

    if (response) {
      this.dataPrevision = response;
    }

    this.toggleLoading();
  };

  @action
  toggleLoading = (): void => {
    this.loading = !this.loading;
  };
}

export default WeatherStore;
