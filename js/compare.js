$(document).ready(function () {
    var item_count_golbal = document.getElementById("item-count");
    $(".add-comp").click(function () {
        var item_count = document.getElementById("item-count");
        addcomp_classlist = $(this).attr('class');
        addcomp_find_class = (addcomp_classlist.match(/[item]+\-[added]+\-[1-3]/g) || []).join(" ");
        if ($(this).hasClass(addcomp_find_class) == false) {
            if(parseInt(item_count.innerHTML) < 3){
                item_count.innerHTML ++;
                $(".comp").css("opacity", "1");
                $(this).css("color", "#ffc107");
                for (let i = 0; i < 3; i++) {
                    if(document.getElementsByClassName("card-title")[i].innerHTML == ""){
                        $(this).addClass("item-added-" + (i+1));
                        document.getElementsByClassName("fa-xmarkc")[i].style.opacity = "1";
                        document.getElementsByClassName("modal-img")[(i)].setAttribute("src", $(this).parent().parent().parent().children('a').children('img').attr("src"));
                        document.getElementsByClassName("card-title")[(i)].innerHTML = $(this).parent().parent().parent().parent().children('.product-content').children('.title').children('a').html();
                        document.getElementsByClassName("card-text")[(i)].innerHTML = $(this).parent().parent().parent().parent().children('.product-content').children('div').html();
                        break;
                    }
                }
            }
        } else {
            item_count.innerHTML --;
            if(parseInt(item_count.innerHTML) == 0){
                $(".comp").css("opacity", "0");
            }
            $(this).removeClass (function (index, className) {
                return (className.match(/[item]+\-[added]+\-[1-3]/g)).join(' ');
            });
            $(this).css("color", "");
            document.getElementsByClassName("fa-xmarkc")[(addcomp_find_class.match(/[1-3]/g))-1].style.opacity = "0";
            document.getElementsByClassName("modal-img")[(addcomp_find_class.match(/[1-3]/g))-1].setAttribute("src", "");
            document.getElementsByClassName("card-title")[(addcomp_find_class.match(/[1-3]/g))-1].innerHTML = "";
            document.getElementsByClassName("card-text")[(addcomp_find_class.match(/[1-3]/g))-1].innerHTML = "";
        }
    });

    $(".fa-xmarkc").click(function() {
        item_count_golbal.innerHTML --;
        if(parseInt(item_count_golbal.innerHTML) == 0){
            $(".comp").css("opacity", "0");
        }
        fa_index = $(".fa-xmarkc").index(this);
        $(".item-added-" + (fa_index+1)).css("color", "");
        $(".add-comp").removeClass("item-added-" + (fa_index+1));
        $(this).css("opacity", "0");
        document.getElementsByClassName("modal-img")[fa_index].setAttribute("src", "");
        document.getElementsByClassName("card-title")[fa_index].innerHTML = "";
        document.getElementsByClassName("card-text")[fa_index].innerHTML = "";
    });
});