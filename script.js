//al caricamento della pagina visualizza il messaggio con un effetto show
$('.benvenuti h2').hide().show('slow');
$('p').hide();//mi nasconde il paragrafo p

//se clicco sul messaggio il testo scompare e mi appare il paragrafo
$( ".benvenuti h2" ).click(function() {
  $( this ).slideUp();//al click del mpuse scompare e appare il paragrafo p
  $('p').hide().show('slow');
});

$( "p" ).click(function() {
  $( this ).slideUp();
});
