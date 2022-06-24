import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BaseLife from './js/life.js';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const name = $('#nameInput').val();
    const age = parseInt($('#ageInput').val());
    let newUser = new BaseLife(name, age);
  });
});