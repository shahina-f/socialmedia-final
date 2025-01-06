$(document).ready(function(){
    $('#profbtn').click(function(){
        $('.sect3').css('display','block');
        $('.sect4').css('display','none' );
        $('.sect5').css('display','none');
        $('.sect6').css('display','none');

    
    });

});
$(document).ready(function(){
    $('#editbtn').click(function(){
        $('.sect4').css('display','block' );
        $('.sect3').css('display',"none");
        $('.sect5').css('display','none');
        $('.sect6').css('display','none');

    });
});
$(document).ready(function(){
    $('#msgbtn').click(function(){
        $('.sect5')
        


              // Ensure display is set to block
                        // Add a 1-second delay (1000ms)
            .fadeIn(1000); 
            $('.sect4').css('display','none' );
            $('.sect3').css('display',"none");
            $('.sect6').css('display','none');
            
                     
    });
});
$(document).ready(function(){
    $('#flbtn').click(function(){
        $('sect6').hide(1000);
       
      let currenttext=$(this).text();
      if(currenttext==="following"){
        alert("already followed");
      }
        else{
            $(this).text("following");
            alert("following");
        }
        $('.sect4').css('display','none' );
        $('.sect3').css('display',"none");
        $('.sect5').css('display','none');
        
    });
});


