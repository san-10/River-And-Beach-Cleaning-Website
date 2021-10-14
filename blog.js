$('.block').remove()
$('#can').remove()
$('.submit').click(function(){
    var txt = $('.textBox').val()
    var firstName = $('.firstName').val()
    $('.section').after('<script src = "https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js"></script>    <div class="block"> <canvas id="can"></canvas><article class="box">'+ txt +'<br>'+ '' + firstName +'</article></div><img src="C:/Users/User/OneDrive/Test/dustbin.png">')
})


function upload() {
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
  }