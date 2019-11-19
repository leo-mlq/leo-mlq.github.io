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

    if(currentScroll>=3771){
        sectionID='contact';
        
    }
    else{
      $allSections.each(function(){
        let sectionTop=$(this).offset().top;
        if(currentScroll > sectionTop  && windowWidth>WIDTH_LIMIT){
          $currentSection=$(this);
          sectionID=$currentSection.attr('id');
        }
      })
    }
    console.log(sectionID);
    $('nav > ul > li > a').css({'font-weight':'',
                                'color': ''
                               });
    $("ul li a[href=#"+sectionID+"]").css({ 'font-weight':'400',
                                    'color': 'white'
                                   });
  });
};
$(document).ready(function () {
  navColorChange();
  navScrollHighlight();
});  
/*add expandable navagation bar when width is less than 860px;*/