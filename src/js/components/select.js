document.addEventListener('DOMContentLoaded', function() {  
  //alert('работает');Ищет ошибки по строчно
  // console.log('Я здесь!');


  //select выбор материалов//
  const selector = document.querySelector(".select")  

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices form',
    },
  }); 




});