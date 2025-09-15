export async function searchCity(name) {
  if (name.length === 0) return;

  const formattedName = name.replaceAll(" ", "%20");

  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${formattedName}&count=10&language=en&format=json`,
    );

    if (!res.ok) {
      throw new Error(`Failed to search city with code: ${res.status}`);
    }

    const data = res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
