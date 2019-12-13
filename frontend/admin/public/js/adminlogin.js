$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        var em=document.getElementById("email").value;
        var pwd=document.getElementById("password").value;
        $.ajax("https://node-examportal.herokuapp.com/adminlogin",{
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        
            data:JSON.stringify(
                {
                  "email":em,
                  "password":pwd,
                }
            ),
            success:function(recent){ 
                if(recent.message=="Email or password is not valid")
                {
                window.alert(recent.message);
                }
                 else{
                    window.location.replace("adminHome.html")
                 }

               
                },
            
            error:function()
            {
                alert("Something went wrong");
            }
            
          });
      });
  });