let minNum = 0;
const maxNum = 8;
// const maxNum = +prompt('How many profiles you want to see below? Type here!');

function getRandomUser() {
  if (minNum >= maxNum) return; // stop

  fetch("https://randomuser.me/api/?results")
    .then(response => response.json())
    .then(data => {
      document.getElementById('test').innerHTML += 
      '<div class="card">'+ 
        '<div class="image-div">'+
          '<img src="'+data.results[0].picture.large+'"/>'+
        '</div>'+
        '<div class="text-div">'+
          "<h4>" + data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last + "</h4>" + 
          "<p>" + data.results[0].email + "</p>" +
          "<p>" + data.results[0].phone + "</p>" +
          "<p>" + data.results[0].location.city + "</p>" +
          "<button id='btn'>" + "Hire" + "</button>" +
        '</div>'+
      '</div>';

      minNum++; 
      getRandomUser()
    })
    .catch(function(error) {
      console.log('Fetch Error :-S', error);
    });
}
getRandomUser()
