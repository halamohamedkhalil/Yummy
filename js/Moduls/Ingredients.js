import {LoadApi} from "./LoadApi.js";
import {Meal} from "./Meals.js";

export function Ingredients(){
    function display(data){
        let html ="";
        $.each(data,function(key,ingredient){

            html+= `  <div class="col-md-3">
            <div class="ingredient text-center rounded-2 cursorPointer" data-id="${ingredient.strIngredient}">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${ingredient.strIngredient}</h3>
                <p>${ingredient.strDescription==""? "": ingredient.strDescription.split(" ").slice(0,20).join(" ")}</p>
            </div>
        </div>
            `
        });
        $("#dataContainer").html(html);
    }
    function getIngredients(){
        // if you want to show the all Ingredients uncomment the next line
        //LoadApi(`list.php?i=list`,display,'meals',false,false);
        //but I notice that the viewed Ingredients in the demo are 20 so I passed the count 20 to this
        LoadApi(`list.php?i=list`,display,'meals',false,false,20);
    }
    function getMeals(id){
        LoadApi(`filter.php?i=${id}`,Meal().display,'meals',false,false,20);
    }
    $("#dataContainer").on("click",".ingredient",function(){
        getMeals($(this).data("id"));
    })
    return{getIngredients}
}
