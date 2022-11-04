function SendEmail(){
    var name = $("#name");
    var email = $("#email");
    var subject = $("#subject");
    var body = $("#body");

    if(inNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)){
        $.ajax({
            url: SendEmail.php,
            method: 'POST',
            dataType: 'json',
            data:{
                name: name.val(),
                email: email.val(),
                subject: subject.val(),
                body: body.val()
            }, success: function(response){
                $('#myForm')[0].reset();
                $(".sent_notifications").text("Message sent successfully");
            }
        });
    }


}
function isNotEmpty(caller){
    if(caller.val() == ""){
        caller.css('border', '1px solid red ');
        return false;

    }else{
        caller.css('border', '');
        return true;
    }
} 


