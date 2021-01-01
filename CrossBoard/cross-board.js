$(document).ready(function() {
    function randomAnime() {
        function a(a) {
            var b = a.length,
                c, d;
            while (b) {
                d = Math.floor(Math.random() * b--);
                c = a[b];
                a[b] = a[d];
                a[d] = c;
            }
            return a;
        }

        var pieces = $(".piece");
        $(a(pieces).slice(0, $(".cross_board").data("count"))).each(function (a) {
            var piece = $(this);
            pieces.removeClass("visible");
            piece.addClass("visible");

        });
    }
    setInterval(function () {
        randomAnime();
    }, 2000);
});