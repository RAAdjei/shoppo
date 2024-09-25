import axios from 'axios';

export async function getCoordinatesFromAddress(address: string) {
  const response = await axios.get('https://nominatim.openstreetmap.org/search', {
    params: {
      q: address,
      format: 'json',
    },
  });

  if (response.data.length === 0) {
    throw new Error('Address not found');
  }

  const { lat, lon } = response.data[0];
  return { lat: parseFloat(lat), lng: parseFloat(lon) };
}