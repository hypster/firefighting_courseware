import $ from 'jquery'
function menuItemFadeIn() {
    for(let i = 0; i < $('.link').length; i++) {
      let parent = $('#title'+(i+1))
      let title = parent.children('img')[1]
      let img = parent.children('img')[0]
     $(title).delay(i * 500).animate({opacity: 1}, 100)
      $(img).delay(i * 500 + 100).animate({opacity: 1}, 500)
     }
  }
  const util = {
      menuItemFadeIn: menuItemFadeIn
  }

  export default util
