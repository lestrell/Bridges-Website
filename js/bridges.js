$(function(){
  // w3IncludeHTML();

  // console.log($(window).width()/10);
  // $(".card-img-top").width($(window).width()/20);
  // $(".card-img-top").height($(window).width()/20);


  // $(window).scroll(function() {
  //   if ($(document).scrollTop() > 50) {
  //   $('nav').addClass('shrink');
  //   } else {
  //   $('nav').removeClass('shrink');
  //   }
  // });
  // $("#container-div")
  // console.log($(window).width());
  if($(window).width() <= 768){
    $("#container-div").removeClass("container-fluid");
    $("#container-div").addClass("container");
  }else{
      $("#container-div").removeClass("container");
      $("#container-div").addClass("container-fluid");
  }


  $("li.active").removeClass("active");
  $("#"+window.location.hash.split("/")[1]).addClass("active");
  $("title").html($("#"+window.location.hash.split("/")[1]).data("title"));
  // $("head").html($("head").html() + "<style>#"+pathname+"{color: #555;background-color: #e7e7e7;}</style>");


  $("body").fadeIn("1000").removeClass('hidden');
  $(window).on('hashchange', function() {
      console.log(window.location.hash);
      $("li.active").removeClass("active");
      $("#"+window.location.hash.split("/")[1]).addClass("active");
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

      console.log(this);


  });

    $('.navbar-collapse a').not(".dropdown-toggle").click(function(){
      $(".navbar-collapse").collapse('hide');
  });


});




function displayCode(param,caller)
{
  console.log(param);
  $(".tab").css("display","none");
  $("#"+param).css("display","block");
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
