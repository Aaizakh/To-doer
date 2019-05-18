
  //Check off specific to-dos by clicking

   $("ul").on("click", "li", function(){
   		$(this).toggleClass("completed");
   });
  
  $("ul").on("click", ".removeToDos", function(event){
  		//we want to fade the li out not just the X so target the parent
  		$(this).parent().fadeOut(function(){
  			//now 'this' refers to the parent element
  			$(this).remove();
  		});
  		//stop propagation will stop calling any parent event handlers
  		//(in this case, it wouldn't mark li as completed when you click on the span)
  		event.stopPropagation();  
  })


  // //Enter a new To-Do
  // var courseName = $(".courseName_input").val();

  // chrome.storage.sync.set({".courseName_input": courseName});
  // chrome.storage.sync.get(".courseName_input", function(result){
  //   // Showing the requested variable value
  //    alert(result.courseName);
  // });


  $("#input1").keypress(function(event){
  		if(event.which === 13){
  			//grabbing new todoText from input
  			var todoText = ($(this).val()); 
  			//create a new li and add the todoText to that
  			$("#To-Doul1").append("<li> <span class=\"removeToDos\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
  			$(this).val("");
  		}
  })

  $("#input2").keypress(function(event){
      if(event.which === 13){
        //grabbing new todoText from input
        var todoText = ($(this).val()); 
        //create a new li and add the todoText to that
        $("#To-Doul2").append("<li> <span class=\"removeToDos\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
        $(this).val("");
      }
  })


  $("#input3").keypress(function(event){
      if(event.which === 13){
        //grabbing new todoText from input
        var todoText = ($(this).val()); 
        //create a new li and add the todoText to that
        $("#To-Doul3").append("<li> <span class=\"removeToDos\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
        $(this).val("");
      }
  })

  $("#input4").keypress(function(event){
      if(event.which === 13){
        //grabbing new todoText from input
        var todoText = ($(this).val()); 
        //create a new li and add the todoText to that
        $("#To-Doul4").append("<li> <span class=\"removeToDos\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
        $(this).val("");
      }
  })

   $("#input5").keypress(function(event){
      if(event.which === 13){
        //grabbing new todoText from input
        var todoText = ($(this).val()); 
        //create a new li and add the todoText to that
        $("#To-Doul5").append("<li> <span class=\"removeToDos\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
        $(this).val("");
      }
  })

  $("#input6").keypress(function(event){
      if(event.which === 13){
        //grabbing new todoText from input
        var todoText = ($(this).val()); 
        //create a new li and add the todoText to that
        $("#To-Doul6").append("<li> <span class=\"removeToDos\"><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>");
        $(this).val("");
      }
  })



  $("table i").click(function(){
        $(".To-DoContainer").toggleClass("toDoDisplay");
  })

 var list_of_courses = new Array();
 list_of_courses = $(".To-DoContainer").toArray();

 $("#Add_course").on("click", function(){
     for (var i=0; i<list_of_courses.length;i++){
           if ( $(list_of_courses[i]).css("display") == "none"){
                $(list_of_courses[i]).css('display', 'inline-block');
                return;
           }
      }
 });
