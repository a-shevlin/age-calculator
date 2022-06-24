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
    $('#earthLifeExp').text(newUser.earthExpect);
    $('#earthYrsRem').text(newUser.earthRemain());
    $('#earthYrsOvr').text(newUser.earthOver());

    $('#mercuryAge').text(newUser.mercuryAge);
    $('#mercuryLifeExp').text(newUser.mercuryExpect);
    $('#mercuryYrsRem').text(newUser.mercuryRemain());
    $('#mercuryYrsOvr').text(newUser.mercuryOver());
    
    $('#venusAge').text(newUser.venusAge);
    $('#venusLifeExp').text(newUser.venusExpect);
    $('#venusYrsRem').text(newUser.venusRemain());
    $('#venusYrsOvr').text(newUser.venusOver());

    $('#marsAge').text(newUser.marsAge);
    $('#marsLifeExp').text(newUser.marsExpect);
    $('#marsYrsRem').text(newUser.marsRemain());
    $('#marsYrsOvr').text(newUser.marsOver());

    $('#jupiterAge').text(newUser.jupiterAge);
    $('#jupiterLifeExp').text(newUser.jupiterExpect);
    $('#jupiterYrsRem').text(newUser.jupiterRemain());
    $('#jupiterYrsOvr').text(newUser.jupiterOver());
  });
});
