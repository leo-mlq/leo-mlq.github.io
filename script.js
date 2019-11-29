const navColorChange=()=>{
  var scroll_start = 0;
    var startchange = $("#aboutme");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top-50) {
                $("nav").css('background-color', 'black');
                
            } else {
                $('nav').css('background-color', 'grey');
            }
        });
    }
};
var WIDTH_LIMIT = 860;
/*add navbar active link*/
const navScrollHighlight=()=>{
  //$define a jquery var
  let $allSections=$('.nav_highlight');
  //user defined scroll function
  $(window).scroll(function(){
    let currentScroll=$(this).scrollTop();
    let $currentSection;
    let windowWidth = window.innerWidth;
    let sectionID;

    if(currentScroll>=3610){
        sectionID='contact';
        
    }
    else{
      $allSections.each(function(){
        let sectionTop=$(this).offset().top;
        if(currentScroll > sectionTop-1  && windowWidth>WIDTH_LIMIT){
          $currentSection=$(this);
          sectionID=$currentSection.attr('id');
        }
      })
    }
    console.log(sectionID);
    $('nav  ul  li  a').css({'font-weight':'',
                                'color': ''
                               });
    $("nav ul li a[href=#"+sectionID+"]").css({ 'font-weight':'400',
                                    'color': 'white'
                                   });
  });
};

var txt='Learning to be a Full Stack Developer';
var speed = 70;
var i=0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeEffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

function handleClickMore() {
  var fired_button = $('#more').attr('value');
  if(fired_button==='More'){
    $('.grid > a').removeClass('noDisplay');
    document.getElementById("more").innerHTML='Less';
    $('#more').val('Less');
  
  }
  else{
    $('#techDoc').addClass('noDisplay');
    document.getElementById("more").innerHTML='More';
    console.log($('#more').attr('class'));
    $('#more').val('More');
  }
}

$(document).ready(function () {
  navColorChange();
  navScrollHighlight();
  typeWriter();
  //handleClickMore();
});  
/*add expandable navagation bar when width is less than 860px;*/