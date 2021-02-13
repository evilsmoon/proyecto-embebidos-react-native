
export const postLED = async (status) => {
    const url = `https://backend.thinger.io/v3/users/CarlosRe23/devices/DHT11/resources/led`;
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTMwNjE4NDksImlhdCI6MTYxMzA1NDY0OSwicm9sZSI6InVzZXIiLCJ1c3IiOiJDYXJsb3NSZTIzIn0.2oFZXcFKGDB_5QZLz_itYQMwIGalyru7R-nX-UetlwA`;
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(status),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await resp.json();
    return data;
}
