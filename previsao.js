async function getPrevisao() {
  const lat = document.getElementById("latitude").value;
  const lon = document.getElementById("longitude").value;
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("resposta").innerHTML = "";
    for (index = 0; index < data.hourly.temperature_2m.length; index++) {
      document.getElementById(
        "resposta"
      ).innerHTML += `<div id="res">${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;
    }
  } catch (error) {
    alert("Você não botou a informação correta, porra");
  }
}
