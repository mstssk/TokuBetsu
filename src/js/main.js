$(function () {
    // Add target="_blank" when user opens external link
    $('a').each(function () {
        var a = this;
        if (a.origin !== location.origin) {
            $(a).attr({
                'target': '_blank',
                'rel': 'noopener'
            });
        }
    });

    // history state
    var nav = $(".navbar-collapse").collapse({ toggle: false });
    var history = window.history;
    $("a[href^='#'],a[href='#']").click(function (event) {
        if (event.which != 1 || event.metaKey) {
            return; // Middle click and Ctrl+click should not be overridden.
        }
        nav.collapse("hide");
        var offset = this.hash ? $(this.hash).offset().top : 0;
        $("html,body").animate({ scrollTop: offset }, 250);
        if (history.pushState) {
            history.pushState(null, null, this.hash || "#");
        }
        return false;
    });
});
