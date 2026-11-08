export const ghanaCities = [
  { name: 'Accra', latitude: 5.6037, longitude: -0.187 },
  { name: 'Tema', latitude: 5.6698, longitude: -0.0166 },
  { name: 'Kumasi', latitude: 6.6885, longitude: -1.6244 },
  { name: 'Cape Coast', latitude: 5.1315, longitude: -1.2795 },
  { name: 'Takoradi', latitude: 4.9016, longitude: -1.7831 },
  { name: 'Koforidua', latitude: 6.0941, longitude: -0.2591 },
  { name: 'Ho', latitude: 6.6008, longitude: 0.4713 },
  { name: 'Sunyani', latitude: 7.3349, longitude: -2.3123 },
  { name: 'Tamale', latitude: 9.4034, longitude: -0.8424 },
  { name: 'Bolgatanga', latitude: 10.7856, longitude: -0.8514 },
] as const;

export function findNearestGhanaCity(latitude: number, longitude: number) {
  if (latitude < 4.5 || latitude > 11.3 || longitude < -3.5 || longitude > 1.5) {
    return null;
  }

  return ghanaCities.reduce((nearest, city) => {
    const distance = Math.hypot(latitude - city.latitude, longitude - city.longitude);
    return distance < nearest.distance ? { city, distance } : nearest;
  }, {
    city: ghanaCities[0],
    distance: Number.POSITIVE_INFINITY,
  }).city.name;
}
