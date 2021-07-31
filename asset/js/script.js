let data = [
    {
        name: "asraful Haq",
        photo: "asset/image/6.jpg",
        gender: "male",
        age: 40,
        address: "tongi",
        email: "asraful@gmail.com",
        about: "rum molestiae praesentium labore minimarum molestiae praesentium labore minima"
    },
    {
        name: "Jahan",
        photo: "asset/image/1.jpg",
        gender: "female",
        age: 30,
        address: "Uttara",
        email: "jahan@gmail.com",
        about: "rum molestiae praesentium labore  praesentium labore minimarum molestiae praesentium labore minima"
    },
    {
        name: "shofia",
        photo: "asset/image/3.jpg",
        gender: "female",
        age: 60,
        address: "Uttara",
        email: "shofia@gmail.com",
        about: "rum molestiae  molestiae praesentium labore minima"
    },
    {
        name: "rabbi",
        photo: "asset/image/4.jpg",
        gender: "male",
        age: 80,
        address: "Uttara",
        email: "rabbi@gmail.com",
        about: "rum molestiae  molestiae praesentium labore minima"
    },
    {
        name: "milon",
        photo: "asset/image/8.jpg",
        gender: "male",
        age: 90,
        address: "gazipur",
        email: "milon@gmail.com",
        about: "rum molestiae  molestiae praesentiumpraesentiumpraesentium labore minima"
    },
    {
        name: "shalim",
        photo: "asset/image/7.jpg",
        gender: "male",
        age: 12,
        address: "gazipur",
        email: "shalim@gmail.com",
        about: "rum molestiae  molestiae praesentium labore minima"
    },
    {
        name: "kobori",
        photo: "asset/image/9.jpg",
        gender: "female",
        age: 99,
        address: "cozbazar",
        email: "kobori@gmail.com",
        about: "rum molestiae  molestiae praesentiumpraesentiumpraesentium labore minima"
    },
    {
        name: "kabila",
        photo: "asset/image/2.jpg",
        gender: "male",
        age: 2,
        address: "sherpur",
        email: "kabila@gmail.com",
        about: "rum molestiae  molestiae praesentium labore minima"
    },
    {
        name: "halana",
        photo: "asset/image/4.jpg",
        gender: "male",
        age: 20,
        address: "dhaka",
        email: "halana@gmail.com",
        about: "rum molestiae  molestiae praesentiumpraesentiumpraesentiumpraesentium labore minima"
    },

]

/**
 * get element 
 */

let section = document.querySelector('.slider');
let img = document.querySelector('.slider img');
let name = document.querySelector('.slider h2');
let email = document.querySelector('.slider h5');
let about = document.querySelector('.slider p');
let prev_btn = document.querySelector('.slider #prev');
let next_btn = document.querySelector('.slider #next');
let alluser = document.querySelector('#allsuer');
let gender = document.getElementsByName('gender');
let gender_tab = document.querySelector('.gender-tab');
let user_location = document.querySelector('#location');
let age = document.querySelector('#age');







let defult_index = 0;



/**
 * slide next
 */
function next() {
    if (defult_index > data.length - 2) {
        defult_index = 0;
       // console.log(defult_index);
    } else {
        
        defult_index++;
        //console.log(defult_index);

    }
    showuser(defult_index);
}
/**
 * next button 
 */
next_btn.onclick = () => {

    next();

}

/**
 * slide previous
 */
function prev(){
    if (defult_index < data.length - 2) {
        defult_index = data.length - 1;
       // console.log(defult_index);
    } else {
        
        defult_index--;
        //console.log(defult_index);

    }
    showuser(defult_index);
}
/**
 * Previous button 
 */
prev_btn.onclick = () => {

    prev()
}
/**
 * slider auto play
 */
let auto_play_slider;
autoPlay("play");
function autoPlay(action) {
    if (action == "play") {
         auto_play_slider = setInterval(next, 1500)
    } else {
        clearInterval(auto_play_slider);
    }
}



section.onmouseover = () => {
    autoPlay("push");;   
    //console.log("in");
}
section.onmouseout = () => {
    autoPlay("play");
    //console.log("out");
}


/**
 * Render data form data array in slider
 */
showuser()
function showuser(index = 0) {
    img.setAttribute('src', data[index].photo);
    name.innerHTML = data[index].name;
    email.innerHTML = "E-mail: " + data[index].email;
    about.innerHTML = "E-mail: " + data[index].about;
    
}
/**
 * render all user data in graid 
 */

showAlluser()
function showAlluser(gen="", loc="", age="") {
    let allUserData = "";
    // filter for gender
    if (gen != "") {
        
        
        data.map(user => {

            if (user.gender == gen) {
        
                allUserData+= `<div class="col-md-4 mb-3">
                <div class="card shadow">
                    <img class="card-img-top" src="${user.photo}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${user.name}</h5>
                      <h6 class="card-title">Email: ${user.email}</h6>
                      <label>gender:<b> ${user.gender}</b></label>
                      <label>Age:<b> ${user.age}</b></label>
                      <h6 class="card-title mt-1">Address: ${user.address}</h6>
                      <hr>
                      <p class="card-text">${user.about}</p>
                    </div>
                  </div>
            </div>` 
            }
        });
        alluser.innerHTML = allUserData;

    //filter for location  
    } else if (loc != "") {
        
            data.map(user => {

                if (user.address.toLowerCase().includes(loc)) {
            
                    allUserData+= `<div class="col-md-4 mb-3">
                    <div class="card shadow">
                        <img class="card-img-top" src="${user.photo}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <h6 class="card-title">Email: ${user.email}</h6>
                        <label>gender:<b> ${user.gender}</b></label>
                        <label>Age:<b> ${user.age}</b></label>
                        <h6 class="card-title mt-1">Address: ${user.address}</h6>
                        <hr>
                        <p class="card-text">${user.about}</p>
                        </div>
                    </div>
                </div>` 
                }
            });
            alluser.innerHTML = allUserData;
        
    //filter for age 
    } else if (age != "") {
        
        data.map(user => {

            if (user.age <= age) {
        
                allUserData+= `<div class="col-md-4 mb-3">
                <div class="card shadow">
                    <img class="card-img-top" src="${user.photo}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <h6 class="card-title">Email: ${user.email}</h6>
                    <label>gender:<b> ${user.gender}</b></label>
                    <label>Age:<b> ${user.age}</b></label>
                    <h6 class="card-title mt-1">Address: ${user.address}</h6>
                    <hr>
                    <p class="card-text">${user.about}</p>
                    </div>
                </div>
            </div>` 
            }
        });
        alluser.innerHTML = allUserData;

    }
    else{
        
        data.map(user => {
            allUserData+= `<div class="col-md-4 mb-3">
            <div class="card shadow">
                <img class="card-img-top" src="${user.photo}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${user.name}</h5>
                  <h6 class="card-title">Email: ${user.email}</h6>
                  <label>gender:<b> ${user.gender}</b></label>
                  <label>Age:<b> ${user.age}</b></label>
                  <h6 class="card-title mt-1">Address: ${user.address}</h6>
                  <hr>
                  <p class="card-text">${user.about}</p>
                </div>
              </div>
        </div>` 
        });
        alluser.innerHTML = allUserData;
    }
    
}


let filter_location;
let filter_gender;
let filter_age;

gender_tab.onclick = () => {

    for (let index = 0; index < gender.length; index++) {
        //get check valu
        if (gender[index].checked) {

                showAlluser(gender[index].value);
            
            //console.log(gender[index].value);
        }
           
        
        
    }
}


age.onkeyup = () => {
    
    user_location.value = "";
    showAlluser("", "", age.value);
    
}


user_location.onkeyup = () => {

    age.value = ""
    showAlluser("", user_location.value);
    
    
}


