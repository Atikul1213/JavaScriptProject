$(document).ready(function(){


    $("button").click(function(){
        $("p").toggle();
    });
    


    $("#show").click(function(){
        $("p").toggle();
    });

    $("#hide").click(function(){
        $("p").toggle();
    });

    $("p").on('click',function(){
        $(this).toggle();
    });


    $("p").on({
        mouseenter : function(){
            $(this).css("background-color","red");
        },
        mouseleave: function(){
            $(this).css("background-color","green");
        },
        click:function(){
            $(this).css("background-color","yellow");
        }
    });

    $("input").focus(function(){
        $("input").css("background","red");
    });
     
     $("button").click(function(){
        $("p:first").toggle();

        $("ul li:first").toggle();

        $("ul li:last").toggle();

        $('a[target="_blank"]').toggle();
         
        

     });


     $("p").click(function(){
        $(this).toggle();
     });

     $("p").dblclick(function(){

     });
     $("p").mouseenter(function(){

     });

    $("p").mouseleave(function(){
       // alert("hello");
    })     

    $("p").hover(function(){

    });

    $("p").hover(function(){

    });



    
});



    function myFun(){
    
        console.log("this function call");
        $(this).hide();
    }
 



/**
  





    $("button").click(function(){
        $("p").toggle();
    });


 $(".me").hide();
    $(".me").show();

    $("#me").hide();
    $("#me").show();

 $("h2").hide();

   $("h2").show();
   





 * 
 */