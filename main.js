window.onscroll = function() {
    top_menu()
};

function top_menu() {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById('top-menu').style.top = '0';
    } else {
        document.getElementById('top-menu').style.top = '-60px';
    }
}