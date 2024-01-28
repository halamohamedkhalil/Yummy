import { Loading } from "./Loading.js";
import {hideNav } from "./nav.js";
import {clearInputs} from "./clearInputs.js";
export function LoadApi(link,func,value,search= false,outerLoading = false,count = null){
    hideNav();
    if(outerLoading){
        Loading().showInner();Loading().show();
    }else{
        Loading().showInner();
    }
    $(".contact").hide();
    $("#dataContainer").empty();
    if(!search){$(".search").hide();clearInputs();}
    $(".mainContainer").show();
    $.get(`https://www.themealdb.com/api/json/v1/1/${link}`, function(data, status){
        if(status=="success"){
            func(count !== null ?data[`${value}`].slice(0, count): data[`${value}`]);
        }
        if(outerLoading){
            Loading().hideInner();Loading().hide();
        }else{
            Loading().hideInner();
        }
      });
}