const searchButton = document.getElementById("search-button");
const searchBar = document.querySelector(".search-bar");
const input = document.querySelector('input')
let checker = true;


searchButton.addEventListener('click', () => {
  if(checker === true){
  searchBar.classList.add('active');
  
  input.focus(); // NOTE: to put focuse when we open the search bar
  checker = false;
  }
  else{
    searchBar.classList.remove('active');

    checker = true;
  }
})
