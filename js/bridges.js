$(function(){

    $("body").fadeIn("1000").removeClass('hidden');

    onLoadAndHashChange();

    $(window).on('hashchange', function() {
          onLoadAndHashChange();
    });

    $('.navbar-collapse a').not(".dropdown-toggle").click(function(){
        $(".navbar-collapse").collapse('hide');
    });

});


function onLoadAndHashChange(){
    //workaround, lazy, to add this class to all images, later will be done manually.
    $("img").addClass("img-responsive");

    $("li.active").removeClass("active");
    $("a.active").removeClass("active");

    var activesIds = window.location.hash.replace("#","").split("/");
    console.log(activesIds);
    for(var activeId in activesIds){
        $("#"+activesIds[activeId]).addClass("active");
    }

    if($.inArray("tutorial", activesIds) != -1){
        $("#tutorial-navbar").css("display","block");
        if(activesIds.length == 2){
            $("#overview").addClass("active");
        }
    }else{
        $("#tutorial-navbar").css("display","none");
        if(activesIds[1] == ""){
            $("#bridges-home").addClass("active");
        }
    }

    $("title").html($("#"+window.location.hash.split("/")[1]).data("title"));

    if(window.location.hash == "#/" || $("#"+window.location.hash.split("/")[1]).data("title") == undefined){
        $("title").html("Welcome to BRIDGES");
    }

    //this is very important for mobile devices
    if($(window).width() <= 768){
        $("#container-div").removeClass("container-fluid");
        $("#container-div").addClass("container");
    }else{
        $("#container-div").removeClass("container");
        $("#container-div").addClass("container-fluid");
    }
}


function displayCode(param,caller)
{
  console.log(param);
  $(".tab").css("display","none");
  $("#"+param).css("display","block");

  // $(".main-tutorial.tabs.active").removeClass("active");
  $(".tabs div").removeClass("tutorial-active-language-tab");
  $(caller).addClass("tutorial-active-language-tab");


  // var tabs = document.querySelectorAll("*.tabs > *");
  // console.log(tabs);
  // for(var i=0;i<tabs.length;i++)
  // {
  //   tabs[i].setAttribute("active","false");
  // }
  // var tabContent = document.querySelectorAll("*.tabContents > *");
  // for(var i=0;i<tabContent.length;i++)
  // {
  //   tabContent[i].setAttribute("active","false");
  // }
  // caller.setAttribute("active","true");
  // document.getElementById(param).setAttribute("active","true");
}

function preCodeFormat(ele)
{
  var codeBlocks = ele.querySelectorAll('code');
  for(var i=0;i<codeBlocks.length;i++)
  {
    var str = codeBlocks[i].innerHTML;
    //Finds common indent, then removes to leave only differences
    codeBlocks[i].innerHTML = str.replace(new RegExp("^ {" + str.lastIndexOf(" ",str.search(/\S/)) + "}","gm"),"").trim();
  }
}
