$(document).ready(function () {
    $("#analyzeMenu").on('click', 'li a', function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active').next('.nemu-item').hide()
        $(this).next('.nemu-item').show()
    })
})