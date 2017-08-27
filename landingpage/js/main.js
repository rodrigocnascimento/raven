;$(document).ready(function(){
  $(".send-form").on('click', function(e) {
    e.preventDefault()
    var userEmail = $("#userEmail").val()
    var applicationId = Date.now()
    var data = JSON.stringify({
      applicationId: applicationId,
      email: userEmail
    })
    var api = $.ajax({
      url: "https://xv755mjkqe.execute-api.us-east-1.amazonaws.com/prod/applicationform",
      method: "POST",
      contentType: "application/json",
      data: data
    })
    api.done(function(data) {
      if (Object.getOwnPropertyNames(data).length === 0) {
        $(".submit-area").hide('slow')
        $(".submit-success").show('slow')
      }
    })
    api.fail(function(e) {
      console.error('err', e)
    })
  })
})
