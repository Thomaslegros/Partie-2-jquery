// $(function(){
//     $('#image').mouseover(function(){
//         $('#image').animate({width:'1200px'},);
//     });
// });

$(function(){
    $('#image').hover(
        function() {
        $('#image').css('width', '800px', 'height', '800px');
        },
         function() {
            $('#image').css('width', '400px', 'height', '400px');
         })
});