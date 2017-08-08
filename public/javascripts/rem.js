(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        if (windowWidth < 750) {
            html.style.fontSize = windowWidth / 7.5 + 'px';
        } else {
            html.style.fontSize = '80px';
        }

    }, false);
})();