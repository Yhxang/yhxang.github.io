$(function() {
    function m() {
        var b, a = window.location.hash;
        return c ? (c = !1, void 0) : ("" == a || ("#0" == a ? g.slideTo(0) : "#1" == a ? g.slideTo(1, 300, !0) : "2-" == a.substr(1, 2) && (b = parseInt(a.substr( - 1)), g.slideTo(2), $("#p" + b).show())), void 0)
    }
    function n() {
        f = new Swiper(".swiper-container-v", {
            direction: "vertical",
            freeModeMomentumRatio: .5,
            freeMode: !0,
            slidesPerView: "auto"
        }),
        g = new Swiper(".swiper-container-h", {
            initialSlide: 1,
            direction: "horizontal",
            onlyExternal: !0,
            onSlideChangeEnd: function() {
                g && 1 == g.activeIndex && $(".page4 li").hide()
            }
        }),
        $(".v-more-1").click(function() {
            window.location.hash = "0"
        }),
        $(".backbtn2").click(function() {
            window.location.hash = "1"
        }),
        $(".backbtn").click(function() {
            window.location.hash = "1"
        }),
        $(".v-pics4").each(function(a) {
            $(this).find("li").click(function() {
                var b = 2 * a + $(this).index() + 1;
                if (window.location.hash = "2-" + b, "" == d[b - 1]) {
                    d[b - 1] = e[b - 1]
                }
            })
        }),
        $(".tagbtn li").click(function() {
            var a = $(this).index();
            $(this).addClass("on").siblings("li").removeClass("on"),
            $(".holder li").removeClass("on").eq(a).addClass("on")
        })
    }
    function o(a, b) {
        var e, f, c = 0,
        d = function() {++c,
            b && b(a.length, c, this)
        };
        for (e = 0; e < a.length; ++e) {
            if (!a[e]) return d(),
            void 0;
            f = new Image,
            f.onload = d,
            f.onabort = d,
            f.onerror = d,
            f.src = h + a[e]
        }
    }
    var b, c, d, e, f, g, h, i, k, l;
    $(window).width(),
    b = $(window).height(),
    d = ["", "", "", ""],
    e = ["lvxing", "jiehun", "shenzao", "zhuangxiu"],
    $(".swiper-container-v,.last-child-h,.page4 li,.last-page,.first-child-h").height(b),
    870 >= b ? $(".last-page").height(870) : $(".last-page").height(b),
    960 > b && $(".contbox,.holder li,.tit0,.red0").addClass("small"),
    h = "img/",
    i = ["a01.png", "a01.jpg", "a02.jpg", "b01.jpg", "a02.png"],
    o(i,
    function(a, b) {
        $("#loading p").html("loading&nbsp;" + Math.round(100 * b / a) + "%"),
        a == b && ($("#loading").remove(), $("img").each(function() {
            $(this).data("src") && $(this).attr("src", $(this).data("src"))
        }), $("#wrap").show(), n())
    }),
    "onhashchange" in window ? window.onhashchange = m: (window.location, k = window.location.href, l = window.location.hash, setInterval(function() {
        var a = window.location.href,
        b = window.location.hash;
        b != l && m(),
        k = a,
        l = b
    },
    100)),
    "#1" != window.location.hash && (c = !0, window.location.hash = "1")
})