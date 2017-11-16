$(document).ready(function () {
    $("#assist-meu-ul").on("click", "li", function () {
        if ($(this).hasClass('active')) {
            return false;
        }
        $(this).addClass("active").siblings().removeClass("active")
        $(".assist-content").find(".assist-item-box").eq($(this).index()).show().siblings(".assist-item-box").hide()
    })
})