import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'X-RapidAPI-Key':
            '1318a1b475mshcb08ec536056bf6p1a1148jsn515ee14d4b4a',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
