import {LoadApi} from "./LoadApi.js";
import {Meal} from "./Meals.js";

export function Areas(){
    function display(data){
        let html ="";
        $.each(data,function(key,area){

            html+= `  <div class="col-md-3">
            <div class="area text-center rounded-2 cursorPointer" data-id="${area.strArea}">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${area.strArea}</h3>
            </div>
        </div>
            `
        });
        $("#dataContainer").html(html);
    }
    function getAreas(){
        LoadApi(`list.php?a=list`,display,'meals',false,false,20);
    }
    function getMeals(id){
        LoadApi(`filter.php?a=${id}`,Meal().display,'meals',false,false,20);
    }
    $("#dataContainer").on("click",".area",function(){
        getMeals($(this).data("id"));
    })
    return{getAreas}
}