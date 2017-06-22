/**
 * Created by Administrator on 2017/5/9.
 */
$(".left-list li").click(function(){
    $(this).addClass("active").children().children().addClass("circle_on");
    $(this).siblings().removeClass("active").children().children().removeClass("circle_on");

    var list_type=$(this).attr("data-type");
    switch(list_type){
        case "1":
            $(".applyfor-trial").show().siblings().hide();
            $(".title-top").text("申请试用")
            break;
        case "2":
            $(".forget-pass").show().siblings().hide();
            $(".title-top").text("忘记密码")
            break;
    }

})