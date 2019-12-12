$(document).ready(function () {
    $(".form-control").click(function verifyOTP() {
        var OTP = $(".form-control").val();
        if(OTP==""){
            return alert("Please enter OTP to continue")
        }
        
        $.ajax("https://node-examportal.herokuapp.com/login/OTP", {
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            beforeSend: function () {
                $('.main').animate({ opacity: 0.6 })
                $('.mod').fadeIn()
                $('.spinner').show()
            },
            data: JSON.stringify({
                "otp":OTP,
                "token" : localStorage.getItem('token')
            }),
            success: function (data) {
                if(data.code=="200"){
                    alert("Your Phone number has been verified")
                    localStorage.setItem('token', data.token)
                    $(location).attr('href', '../views/accessKey.html')
                }else if(data.code=="400"){
                    alert("Your OTP does not matched. Try again")
                }
                
            },
            error: function (error) {
                $('.spinner').hide()
                alert("User already Existed")
                console.log(error);
            }
        })
    })
})