document
  .getElementById('tennisForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const apiKey = 'a7a7a69c6fmshab1990686aa6873p1825c7jsnc11a01826fab';



    const fetch = require('node-fetch');

const apiUrl = 'https://tennis-live-data.p.rapidapi.com/rankings/ATP';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'a7a7a69c6fmshab1990686aa6873p1825c7jsnc11a01826fab',
    'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
  }
};
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const player = data.data.find(
          (player) =>
            player.first_name === firstName && player.last_name === lastName
        );
        const playerInfoDiv = document.getElementById('playerInfo');

        if (player) {
          const playerHtml = `
                  <h2>Player Information</h2>
                  <p>country: ${player.country}</p>
                  <p>Name: ${player.first_name} ${player.full_name}</p>
                  <p>ranking: ${player.ranking}</p>
                  <p>Last Name: ${player.last_name}</p>
                      `;
          playerInfoDiv.innerHTML = playerHtml;
        } else {
          playerInfoDiv.innerHTML = '<p>Player not found</p>';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
function clearData() {
  document.getElementById('playerInfo').innerHTML = '';
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
}
document
  .getElementById('clearButton')
  .addEventListener('click', function (event) {
    event.preventDefault();
    clearData();
  });