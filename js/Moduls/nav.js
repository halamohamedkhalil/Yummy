import { Categories } from "./Categories.js";
import { Search } from "./Search.js";
import { Ingredients } from "./Ingredients.js";
import { Areas } from "./Areas.js";
import { Contact } from "./Contact.js";
export function handleNav(){
    $.each($(".navContent .links li"),function(key,elem){
        $(elem).on("click",function(){
            switchFunc($(this).data("type"));
            hideNav();
        })
    })
    $(".toggleBtn").on("click",function(){
        if($(this).hasClass("fa-x") )
            hideNav();
        else if($(this).hasClass("fa-align-justify"))
            showNav();
    })    
}
export function hideNav(){
    $(".sideNav").stop().animate({left:-$(".navContent").outerWidth(true)},500);
    $(".toggleBtn").addClass("fa-align-justify").removeClass("fa-x")
    $(".navContent ul.links li").stop().animate({
        top: 300
    }, 500)

}
function switchFunc(type){
    switch(type){
        case "Search":
            Search().display();
            break;
        case "Categories":
            Categories().getCategories();
            break;
        case "Areas":
            Areas().getAreas();
            break;
        case "Ingredients":
            Ingredients().getIngredients();
            break;
        case "ContactUs":
            Contact().display();
            break;            
    }
}
function showNav(){
    $(".sideNav").stop().animate({left:0},500);
    $(".toggleBtn").removeClass("fa-align-justify").addClass("fa-x");
    for (let i = 0; i < 5; i++) {
        $(".navContent ul.links li").eq(i).stop().animate({
            top: 0
        }, (i + 5) * 100)
    }    
}
