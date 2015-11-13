$(document).ready(function() {
  $('.button').on('click', function() {
    $(this).next().removeClass('hidden');
    $(this).addClass('hidden');
  });

  $('.WorkExperience').on('click', function() {
    if ($(this).hasClass('partyWorkExperience') == false) {
      alert('PARTYYYYY!!!!!');
    }

    $(this).toggleClass('partyWorkExperience');

  });

  $('.Education').on('click', function() {
    if ($(this).hasClass('partyEducation') == false) {
      alert('PARTYYYYY!!!!!');
    }

    $(this).toggleClass('partyEducation');

  });

  $('header').on('click', function() {
    if ($(this).hasClass('partyheader') == false) {
      alert('PARTYYYYY!!!!!');
    }

    $(this).toggleClass('partyheader');

  });

  $('.main').on('click', function() {
    if ($(this).hasClass('partymain') == false) {
      alert('PARTYYYYY!!!!!');
    }

    $(this).toggleClass('partymain');
  });

});
