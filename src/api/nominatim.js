export default async function getReverseLocation(lat, lon) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      {
        headers: {
          Accept: "application/json",
          Referer: "https://localhost:5173/",
        },
      },
    );

    if (!res.ok) {
      console.error("Problem with request:", res.status);
      return;
    }

    const data = await res.json();
    return {
      city: data.address.city ?? data.address.town,
      state: data.address.state,
    };
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
