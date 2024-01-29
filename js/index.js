
function toggleSidebar() {
  $("aside").toggleClass("toggle-sideBar");
  $(".side-list").toggleClass("hamada");
$(".menu").toggleClass("menu-hide");
$(".fa-x").toggleClass("appear");


}

function showLoadingScreen() {
  document.getElementById('loadingScreen').style.opacity = '1';
  document.getElementById('loadingScreen').style.visibility = 'visible';
}

function hideLoadingScreen() {
  document.getElementById('loadingScreen').style.opacity = '0';
  document.getElementById('loadingScreen').style.visibility = 'hidden';
}

async function meals(searchMeal) {
 showLoadingScreen()
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
  let finalResult = await apiResponse.json();
  let allMeals = finalResult.meals;
  
 
  if (apiResponse) {
    hideLoadingScreen();
}
  display(allMeals);
}


async function search(searchMeal) {
 showLoadingScreen()
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchMeal}`
  );
  let finalResult = await apiResponse.json();
  let allMeals = finalResult.meals;
  
  if (apiResponse) {
    hideLoadingScreen();
}
  display(allMeals);
}

async function categories() {
 showLoadingScreen()
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let finalResult = await apiResponse.json();
  let allMeals = finalResult.categories;
  
  if (apiResponse) {
    hideLoadingScreen();
}
  displayCategories(allMeals);
}
async function categoriesFilter(searchMeal) {
 showLoadingScreen()
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchMeal}`
  );
  let finalResult = await apiResponse.json();
  let allMeals = finalResult.meals;
  
  if (apiResponse) {
    hideLoadingScreen();
}
  display(allMeals.slice(0,20));
}

async function details(searchMeal) {
 showLoadingScreen()
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchMeal}`
  );
  let finalResult = await apiResponse.json();
  let allMeals = finalResult.meals;
  let x= Object.values(allMeals[0])
  
   
  // console.log(x[0]);
  console.log(x);
  if (apiResponse) {
    hideLoadingScreen();
}
  displayDetails(allMeals,x);
dis(x)  
  
  toggleSidebar()

  
}



async function area() {
 showLoadingScreen()
  let apiResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let finalResult = await apiResponse.json();
  let allMeals = finalResult.meals;
  // console.log(allMeals);
  
  if (apiResponse) {
    hideLoadingScreen();
}
  areaDisplay(allMeals)

  
  }
  async function getArea(allArea) {
   showLoadingScreen()
    let apiResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${allArea}`
    );
    let finalResult = await apiResponse.json();
    let allMeals = finalResult.meals;
    // console.log(allMeals);
    
    if (apiResponse) {
      hideLoadingScreen();
  }
    display(allMeals)
  
    
    }
  

  function areaDisplay(allMeals) {
    var cartoona = ``;
    for (i = 0; i < allMeals.length; i++) {
      cartoona += ` 
      <div class="col-md-3 text-white g-3 py-3">
      <div onclick="getArea('${allMeals[i].strArea}')" class="rounded-2 text-center cursor-pointer">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${allMeals[i].strArea}</h3>
      </div>
</div>
        `
      ;
    }
    document.querySelector(".container .row ").innerHTML = cartoona;
   toggleSidebar()
  }
  
  async function getingredients() {
   showLoadingScreen()
    let apiResponse = await fetch(
      `  https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let finalResult = await apiResponse.json();
    let allMeals = finalResult.meals;
    
    if (apiResponse) {
      hideLoadingScreen();
  }
    displayIngredients(allMeals.slice(0,20))
     toggleSidebar()
    
    

  
    
    }
   


//     function ingredientsDisplay(allMeals) {
//       var cartoona = ``;
//       for (i = 0; i < allMeals.length; i++) {
//         cartoona += ` 
//         <div class="col-md-3">
//         <div onclick="getingredients('${allMeals[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
//                 <i class="fa-solid fa-drumstick-bite fa-4x"></i>
//                 <h3>${allMeals[i].strIngredient}</h3>
//                 <p>${allMeals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>

//         </div>
// </div>
//           `
//         ;
//       }
//       document.querySelector(".container .row ").innerHTML = cartoona;
     
//     }
// ------------------------------------------------------------------------------------------------
function displayIngredients(allMeals) {
  let cartoona = "";

  for (let i = 0; i < allMeals.length; i++) {
      cartoona += `
      <div class="col-md-3 text-white py-5">
              <div onclick="getMainGredient('${allMeals[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                      <h3>${allMeals[i].strIngredient}</h3>
                      <p>${allMeals[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
              </div>
      </div>
      `
  }

      document.querySelector(".container .row ").innerHTML = cartoona;
 
}


async function getMainGredient(fl) {
 showLoadingScreen()
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${fl}`)
  finalResult = await response.json()
  let allMeals =finalResult.meals;
  
  if (response) {
    hideLoadingScreen();
}
  display(allMeals);
  

}
 




function display(allMeals) {
  var cartoona = ``;
  for (i = 0; i < allMeals.length; i++) {
    cartoona += ` 
      
        <div class="col-md-3">

        <div  onclick="details('${allMeals[i].idMeal}')" class="pics-div position-relative w-100">

            <div class="hover-layer w-100  ">

                <p>${allMeals[i].strMeal}</p>
            </div>
            <img class="w-100  " src="${allMeals[i].strMealThumb}" alt="">
        </div>
    </div>`;
  }
  document.querySelector(".container .row ").innerHTML = cartoona;
 
}

function displayCategories(allMeals) {
  var cartoona = ``;
  for (i = 0; i < allMeals.length; i++) {
    cartoona += ` 
      
        <div class="col-md-3">

        <div onclick="categoriesFilter('${allMeals[i].strCategory}')" class="pics-div position-relative w-100">

            <div class="hover-layer w-100 d-flex flex-column  ">

                <h2 class="py-2">${allMeals[i].strCategory}</h2>
                <h6 class="px-3">${allMeals[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</h6>
            </div>
            <img class="w-100  " src="${allMeals[i].strCategoryThumb}" alt="">
        </div>
    </div>`;
  }
  document.querySelector(".container .row ").innerHTML = cartoona;
  
  toggleSidebar()

  
}



function displayDetails(allMeals,x) 
{
  var cartoona = ``;
  
    cartoona += ` 
      
     
    <div class="left-section  col-md-4">
    <img class="w-100" src="${allMeals[0].strMealThumb}" alt="">
    <h2>${allMeals[0].strMeal}</h2>
</div>

<div class="right-section  col-md-8">
    <h2>Instructions</h2>
    <p>${allMeals[0].strInstructions}</p>
    <h3>Area : ${allMeals[0].strArea}</h3>
    <h3>Category : ${allMeals[0].strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled opo row ">
    </ul>
    <div class="col-md-2">
    <h3>Tags:</h3>
    ${allMeals[0].strTags ? `<li class="alert  text-center jj "> ${allMeals[0].strTags} </li>` : ''}
  </div>
  <a class=" btn btn2  " href="${allMeals[0].strSource}">Source</a>
  <a class="btn " href="${allMeals[0].strYoutube}">Youtube</a>
    </div>
    ;`
  document.querySelector(".container .row ").innerHTML = cartoona;
  toggleSidebar()
  }

function dis(x){
  var cartoona1 = ``;
  for(i=9;i<28;i++){
  cartoona1 += ` 

  <li class=" alert alert-info text-center ">  ${x[i+20]+x[i]} </li>
 
  `
  if(x[i]) {
    document.querySelector(".opo").innerHTML = cartoona1;
  }
  console.log("hello");
  }
}











$(".menu").click(function () {
  toggleSidebar();
});




document.getElementById('ingredients').addEventListener("click" ,function(){

  getingredients()
  
  
  })

document.getElementById('search').addEventListener("click" ,function(){

document.getElementById('searchPage').classList.remove('d-none')
document.querySelector(".container .row ").innerHTML = '';
toggleSidebar()


})
document.getElementById('area').addEventListener("click" ,function(){
  area()


  
  })

document.getElementById('mealName').addEventListener('keyup', function (eventInfo) {
    searchValue = eventInfo.target.value
    meals(searchValue)
})
document.getElementById('firstLetter').addEventListener('keyup', function (eventInfo) {
  searchValue = eventInfo.target.value
  search(searchValue)
})


document.getElementById('Categories').addEventListener('click',function(){
  document.querySelector(".container .row ").innerHTML = '';
  categories()


  
})


meals('');



function showContacts() {
  toggleSidebar()
  rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
  <div class="container w-75 text-center">
      <div class="row g-4">
          <div class="col-md-6">
              <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
              <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Special characters and numbers not allowed
              </div>
          </div>
          <div class="col-md-6">
              <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
              <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Email not valid *exemple@yyy.zzz
              </div>
          </div>
          <div class="col-md-6">
              <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
              <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid Phone Number
              </div>
          </div>
          <div class="col-md-6">
              <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
              <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid age
              </div>
          </div>
          <div class="col-md-6">
              <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
              <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid password *Minimum eight characters, at least one letter and one number:*
              </div>
          </div>
          <div class="col-md-6">
              <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
              <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid repassword 
              </div>
          </div>
      </div>
      <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
  </div>
</div> `
  submitBtn = document.getElementById("submitBtn")


  document.getElementById("nameInput").addEventListener("focus", () => {
      nameInputTouched = true
  })

  document.getElementById("emailInput").addEventListener("focus", () => {
      emailInputTouched = true
  })

  document.getElementById("phoneInput").addEventListener("focus", () => {
      phoneInputTouched = true
  })

  document.getElementById("ageInput").addEventListener("focus", () => {
      ageInputTouched = true
  })

  document.getElementById("passwordInput").addEventListener("focus", () => {
      passwordInputTouched = true
  })

  document.getElementById("repasswordInput").addEventListener("focus", () => {
      repasswordInputTouched = true
  })
}
