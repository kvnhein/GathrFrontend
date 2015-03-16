var $listviewbtn = $(".list-view-btn")




$(document).ready(function(){
	
	

	$(".list-view-btn").click(function(){
  	$(".list-view-events").show();
    $(".calendar-events").hide();
    $(".list-view-btn").addClass( "active" );
    $(".calendar-view-btn").removeClass( "active" );
    
  });
  
  $(".calendar-events").hide( 1000 );
  
  $(".calendar-view-btn").click(function(){
  
  	 $(".calendar-events").removeClass( "none" );
  	 
  	$(".calendar-events").show();
    $(".list-view-events").hide();
    $(".calendar-view-btn").addClass( "active" );
    $(".list-view-btn").removeClass( "active" );
    $(".calendar-events").removeClass( "hide" );
  });
  
});








