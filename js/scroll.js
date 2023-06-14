function showbtn(){
    var scroll = doctument.getElementById('scroll-up-btn');
    var scrollval = window.scrollY;
    if (this.scrollval > 400) {
        scroll.classList.add('show')
    }
    else{
        scroll.classList.remove('show')
    }
}