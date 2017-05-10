/**
 * Created by Administrator on 2017/5/8.
 */

$(".left-list li").click(function(){
    $(this).addClass("active").children().children().addClass("circle_on");
    $(this).siblings().removeClass("active").children().children().removeClass("circle_on");

    var list_type=$(this).attr("data-type");
    switch(list_type){
        case "1":
            $(".userchange").show().siblings().hide();
            break;
        case "2":
            $(".useradd").show().siblings().hide();
            break;
    }

})