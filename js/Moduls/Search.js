import {LoadApi} from "./LoadApi.js";
import { Meal } from "./Meals.js";

export function Search(){
    function display(){
        $(".mainContainer").hide();
        $(".contact").hide();
        $(".search").show();
    }
    function searchByName(name,outerLoading = false,search = true){
        LoadApi(`search.php?s=${name}`,Meal().display,'meals',search,outerLoading)
    }
    function searchByFLetter(letter){
        LoadApi(`search.php?f=${letter}`,Meal().display,'meals',true)
    }
    $("#searchByName").keyup(function() {
        searchByName($(this).val())
     });
     $('#searchByFLetter').keyup(function() {
         searchByFLetter($(this).val())
     });


    return {display,searchByName}
}