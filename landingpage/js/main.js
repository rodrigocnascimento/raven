;$(document).ready(function(){
  $('.badhon-tab li').on('click', function() {
    var $this = $(this)

    $('.badhon-tab').each(function() {
      $children = $(this).children()
      $children.find('a').css({
        color: '#ffd3e2',
        border: 'none',
      })
      $children.find('i').css({color: '#ffd3e2'})
    })

    $this.find('a').css({
      color: '#d96f93',
      borderRight: '10px solid #d96f93',
    })
    $this.find('i').css({color: '#d96f93'})
  })
})
