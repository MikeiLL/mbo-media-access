(function ($) {

    $(document).on('click', "a[data-target=mzModal]", function (e) {
        e.preventDefault();
        var target = $(this).attr("href"),
            popUpContent = '<h3>Let\'s Do This.</h3>',
            choice = $(this).data("choice"),
            modalBox = '<div id="mzModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mzSmallModalLabel" aria-hidden="true"></div>';

        // load the url and show modal on success
        $(modalBox).load(target, function () {
            $.colorbox({html: popUpContent, href: target});
            $(modalBox).colorbox();
        });
        return false;
    });

}(jQuery, document, window));