import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BaseLife from './js/life.js';

$(document).ready(function() {
  $('form#age').submit(function(event) {
    event.preventDefault();
    const name = $('#nameInput').val();
    const age = parseInt($('#ageInput').val());
    let newUser = new BaseLife(name, age);

    $('.return').slideDown();
    $('.nameReturn').text(newUser.name);

    $('#earthAge').text(newUser.earthAge);
    $('#earthLiveExp').text(newUser.earthExpect);
    $('#earthYrsRem').text(newUser.earthRemain());
    $('#earthYrsOvr').text(newUser.earthOver());

    $('#earthAge').text(newUser.earthAge);
    $('#earthLiveExp').text(newUser.earthExpect);
    $('#earthYrsRem').text(newUser.earthRemain());
    $('#earthYrsOvr').text(newUser.earthOver());
  });
});
