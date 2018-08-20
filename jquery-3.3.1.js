$(document).ready(function () {

    function slider() {

        $current = $('.slider img.active');
        if ($current.length == 0) {
            $('.slider img:first-child').addClass('active');
        } else {
            $next = $current.removeClass('active').next();
            if ($next.length == 0) {

                $('.slider img:first-child').addClass('active');
            } else {
                $next.addClass('active');
            }
        }
    }
    setInterval(slider, 5000);
});