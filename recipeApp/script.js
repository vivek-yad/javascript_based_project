
const meals= document.getElementById('meals');

getRandomMeal();
async function getRandomMeal(){
  var resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData=await resp.json();
    const randomMeal=respData.meals[0];
    

    //load random meal
    addRandomMeal(randomMeal,true);
}

async function getMealById(id){
const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}

async function getMealsBySearch(term){
   const meals = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+term);

}
function addRandomMeal(mealData,random=false){
    const meal=document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML=`            
            <div class="meal-header">
            ${random? `<span class="random">Random Reciep</span>`:''}

                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
            
                </div>

            <div class="meal-body">
            <h4>${mealData.strMeal}"</h4>
            <!-- add eventlistener to when click fav button it will go to favourite meal and change the color your favourit-->
            <button class="fav-btn " onclick="">
                    <i class="fa fa-heart" ></i>
            </button>
            </div>
    `;
    const btn=meal.querySelector(".meal-body .fav-btn");
    btn.addEventListener("click",()=>{
        btn.classList.toggle("active");
    });
  meals.appendChild(meal); 
}
function addMealToLS(mealId){
    const mealIds=getMealsFormals();
    localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));
}
function removeMealFromLS(mealId){
    const mealIds=getMealsFormals();
    localStorage.setItem('mealIds',JSON.stringify(mealIds.filter(id=>id!==mealId)));

}

function getMealsFromLS(){
    const mealIds=JSON.parse(localStorage.getItem('mealIds'));
    return mealIds;
}