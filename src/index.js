import Notiflix from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_API = '39664041-37e45301d98578e53a9ee7384';


// https://pixabay.com/api/?key=39664041-37e45301d98578e53a9ee7384&image_type=photo&orientation=horizontal&safesearch=true

// const axios = require('axios').default;

const axios = require('axios');

// Робимо запит для користувача з даним ID
axios.get(`${BASE_URL}`)
  .then(function (response) {
    // обробка успішного запиту
    console.log(response);
  })
  .catch(function (error) {
    // обробка помилки
    console.log(error);
  })
  .finally(function () {
    // виконується завжди
  });