

export const getSonido = async () => {
    const url = `https://backend.thinger.io/v3/users/CarlosRe23/devices/DHT11/resources/LUX`;
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTMwNjE4NDksImlhdCI6MTYxMzA1NDY0OSwicm9sZSI6InVzZXIiLCJ1c3IiOiJDYXJsb3NSZTIzIn0.2oFZXcFKGDB_5QZLz_itYQMwIGalyru7R-nX-UetlwA`;
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await resp.json();
    return data;
}
