document.addEventListener('DOMContentLoaded', () => {
  fetchCoffeeData();
  fetchBeerData();
});

async function fetchCoffeeData() {
  const endpoint = 'https://api.sampleapis.com/coffee/iced';
  fetchData(endpoint, 'coffee-container');
}

async function fetchBeerData() {
  const endpoint = 'https://api.sampleapis.com/beers/ale';
  fetchData(endpoint, 'beer-container', 10);
}

async function fetchData(endpoint, containerId, limit = null) {
  try {
      const response = await fetch(endpoint);
      let data = await response.json();
      if (limit) {
          data = data.slice(0, limit);
      }
      displayData(data, containerId);
  } catch (error) {
      console.error('Fetching data failed:', error);
  }
}

function displayData(itemsArray, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  itemsArray.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';

      const title = document.createElement('h2');
      title.textContent = item.name || item.title;

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = title.textContent;
      img.style.width = '300px';
      img.style.height = '200px';

      const description = document.createElement('p');
      description.textContent = item.description;

      div.appendChild(title);
      div.appendChild(img);
      div.appendChild(description);

      container.appendChild(div);
  });
}
