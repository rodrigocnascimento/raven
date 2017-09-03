;var a2a_config = a2a_config || {}
var url = function(x) {
  var h = x.toString()
  var s = ''
  for (var i = 0; i < h.length; i += 2)
    s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
  return s
}

var http = new XMLHttpRequest()

var selector = function(element) {
  return document.querySelector(element)
}

var request = function(url) {
  try {
    http.open('POST', url)
    http.setRequestHeader('Content-Type', 'application/json')
    return http
  } catch (e) {
    console.error(e)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  selector('.service-tab').style.display = 'block'
  var form = selector('#applicationForm')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    var applicationId = Date.now()
    var userEmail = selector("#userEmail").value
    var api = request(url('68747470733a2f2f78763735356d6a6b71652e657865637574652d6170692e75732d656173742d312e616d617a6f6e6177732e636f6d2f70726f642f6170706c69636174696f6e666f726d'))

    if (userEmail === "" || (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(userEmail)) === false) {
      return alert('Precisa informar um email válido')
    }

    var data = JSON.stringify({
      applicationId: applicationId,
      email: userEmail,
    })

    api.send(data)

    api.onreadystatechange = function() {
      if (api.responseText === "" && api.status === 200) {
        selector(".submit-area").style.display = 'none'
        selector(".submit-success").style.display = 'block'
      }
    }
  })
})

a2a_config.linkname = "RAVEN"
a2a_config.linkurl = "http://www.ravendas.com.br"
a2a_config.locale = "pt-BR"
new CBPFWTabs( document.getElementById( 'tabs' ) )

;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga')
ga('create', 'UA-41447921-2', 'auto')
ga('send', 'pageview')
