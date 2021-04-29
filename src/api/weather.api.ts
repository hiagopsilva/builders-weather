import {request} from '~/services';

class WeatherAPI {
  static getDataWeather = async (
    latitude?: number,
    longitude?: number,
  ): Promise<ValuesDataPrevision | null> => {
    try {
      const {data} = await request.get(
        `weather?lat=${latitude?.toString()}&lon=${longitude?.toString()}&&units=metric&lang=pt&APPID=13fe761107ed465fe627448321516f2f`,
      );
      return data || null;
    } catch (error) {
      return null;
    }
  };
}
export default WeatherAPI;
