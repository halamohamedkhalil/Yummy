import {LoadApi} from "./LoadApi.js";

export function Meal(){
    function display(data){

        let html ="";
        $.each(data,function(key,meal){

            html+= `<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursorPointer" data-id="${meal.idMeal}">
                <img src="${meal.strMealThumb}" alt="" class="w-100">
                <div class="position-absolute d-flex align-items-center text-black p-2 layer">
                    <h3>${meal.strMeal}</h3>
                </div>
            </div>
        </div>
            `
        });
        $("#dataContainer").html(html);
    }

    function displayDetails(meal){
        meal = meal[0];
        let Ingredients = "",
            Tags = "";
        for(let i=1; i<=20; i++){
            if (meal[`strMeasure${i}`] && meal[`strIngredient${i}`])
                Ingredients+=`<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
        if(meal.strTags){
            $.each(meal.strTags.split(","),function(key,tag){
                Tags +=`<li class="alert alert-danger m-2 p-1">${tag}</li>`;
            })
    }
        $("#dataContainer").html(`
        <div class="col-md-4">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  class="w-100">
            <h2>${meal.strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${meal.strInstructions}</p>
            <h3>
                <span class="fw-bolder">Area : </span>${meal.strArea}
            </h3>
            <h3>
                <span class="fw-bolder">Category : </span>${meal.strCategory}
            </h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">${Ingredients}</ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">${Tags}</ul>
            <a href="${meal.strSource}" target="_blank" class="btn btn-success">Source</a>
            <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
        </div>
        `)
        
    }
    function getDetails(id){
        LoadApi(`lookup.php?i=${id}`,displayDetails,'meals',false,false,1)
    }
    $("#dataContainer").on("click",".meal",function(){
        getDetails($(this).data("id"));
    })

    return {display}
}