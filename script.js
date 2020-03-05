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
var WIDTH_LIMIT = 150;
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
    console.log(currentScroll)
    if(windowWidth>=900 && currentScroll>=4600){
        sectionID='contact';  
    }
    else{
      $allSections.each(function(){
        let sectionTop=$(this).offset().top;
        if(currentScroll > sectionTop-600  && windowWidth>WIDTH_LIMIT){
          $currentSection=$(this);
          sectionID=$currentSection.attr('id');
        }
      })
    }
    console.log(windowWidth)
    console.log(sectionID);
    $('nav a').css({'font-weight':'',
                                'color': ''
                               });
    $("nav a[href=#"+sectionID+"]").css({ 'font-weight':'400',
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
    document.getElementById("more").innerHTML='< Less';
    $('#more').val('Less');
  
  }
  else{
    $('#lFile').addClass('noDisplay');
    $('#issueTracker').addClass('noDisplay');
    $('#exerciseTracker').addClass('noDisplay');
    $('#urlShortener').addClass('noDisplay');
    $('#drumMachine').addClass('noDisplay');
    $('#techDoc').addClass('noDisplay');
    $('#surveyForm').addClass('noDisplay');
    $('#productLanding').addClass('noDisplay');
    $('#quoteMachine').addClass('noDisplay');
    $('#previwer').addClass('noDisplay');
    document.getElementById("more").innerHTML='More >';
    console.log($('#more').attr('class'));
    $('#more').val('More');
  }
}
function expandNav() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}



$(document).ready(function () {
  navColorChange();
  navScrollHighlight();
  typeWriter();
  //handleClickMore();
});  
/*add expandable navagation bar when width is less than 860px;*/