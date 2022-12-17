const aktif = document.getElementById('aktif');
const baru = document.getElementById('baru');
const sembuh = document.getElementById('sembuh');
const total_kasus = document.getElementById('total_kasus');
const total_mati = document.getElementById('total_mati')
const total_test = document.getElementById('total_test');

const input = document.getElementById('country');
const submit = document.getElementById('submit');

submit.addEventListener("click", async () => {
  const BASE_URL = `https://covid-193.p.rapidapi.com/statistics?country=${input.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "61b293527dmsh23aaf37a3766adfp1f97cfjsn302d0a394689",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const getdata = data.response[0];

    console.log(getdata)

    aktif.innerHTML = getdata.cases.active;
    baru.innerText = getdata.cases.new ? getdata.cases.new : 0;
    sembuh.innerText = getdata.cases.recovered;
    total_kasus.innerText = getdata.cases.total;
    total_mati.innerText = getdata.deaths.total;
    total_test.innerText = getdata.tests.total;
  }
});