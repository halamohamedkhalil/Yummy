import {LoadApi} from "./LoadApi.js";
import {Meal} from "./Meals.js";

export function Categories(){
    function display(data){
        let html ="";
        $.each(data,function(key,category){
console.log(category.strCategoryDescription.split(" ").slice(0,20).join(" "))
            html+= ` <div class="col-md-3">
            <div class="category position-relative overflow-hidden rounded-2 cursorPointer" data-id="${category.strCategory}">
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}" srcset="" class="w-100">
                <div class="position-absolute text-center text-black p-2 layer">
                    <h3>${category.strCategory}</h3>
                    <p>${category.strCategoryDescription=="" ?? category.strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
            </div>
        </div>
            `
        });
        $("#dataContainer").html(html);
    }
    function getCategories(){
        LoadApi(`categories.php`,display,'categories',false,false);
    }
    function getMeals(id){
        LoadApi(`filter.php?c=${id}`,Meal().display,'meals',false,false,20);
    }
    $("#dataContainer").on("click",".category",function(){
        getMeals($(this).data("id"));
    })
    return{getCategories}
}
