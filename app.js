// Variables for the API
var apiKey = "e096ca97394483ede8151a0a52f8a20a";

var timestamp = 1;
var priKey = "2da6777884260f5ca535dfedcc8e19fb9895369e"

// MD5 Hash
var hash = CryptoJS.MD5(timestamp + priKey + apiKey);


var charBaseUrl = "https://gateway.marvel.com:443/v1/public/characters";
  // var url for NO Character result limit
var noLimitCharUrl = `${charBaseUrl}?name=${search.value}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
  //var url for 1 Character result limit
var oneLimitCharUrl = `${charBaseUrl}?name=${search.value}&ts=${timestamp}&limit=1&apikey=${apiKey}}&hash=${hash}`;
var eventUrl = "https://gateway.marvel.com:443/v1/public/events";


// // Variables for the DOM

let input = document.getElementById("search-bar");
let button = document.getElementById("lookup-button");
let output = document.getElementById("output");
let outputList = document.querySelector(".outputList");

button.addEventListener("click", (results) = async () => {
  if (search.value.trim().length < 1) {
    alert("Please enter a character's full name");
    return;
  }
  
  output.innerHTML = "";
  const url = noLimitCharUrl

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  jsonData = [results].forEach((results) => {
    output.innerHTML = 
  //   const { name, description, thumbnail } = results;
  //   const imageUrl = thumbnail.path + "." + thumbnail.extension;
  //   const image = `<img src="${imageUrl}" alt="${name}"/>`;
  //   const result = `
  //   <div class="result">
  //     <h2>${name}</h2>
  //     ${image}
  //     <p>${description}</p>
  //   </div>
  //   `;
  //   output.innerHTML += result;
  // }
});
