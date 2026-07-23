/*=================================

CAMERA ACCESS

=================================*/

const camera = document.getElementById("camera");

const cameraButton = document.querySelector(".mirrorControls .controlBtn");

const placeholder = document.querySelector(".cameraPlaceholder");

let stream = null;

/*=================================

START CAMERA

=================================*/

async function startCamera(){

try{



    stream = await navigator.mediaDevices.getUserMedia({



        video:{

            width:1280,

            height:720,

            facingMode:"user"

        },



        audio:false



    });



    camera.srcObject = stream;



    placeholder.style.display = "none";



    cameraButton.innerHTML =



    `<i class="ri-camera-fill"></i> Camera On`;



}



catch(error){



    alert("Camera permission denied!");



    console.error(error);



}

}

/*=================================

STOP CAMERA

=================================*/

function stopCamera(){

if(stream){



    stream.getTracks().forEach(track=>{



        track.stop();



    });



    stream=null;



}



camera.srcObject=null;



placeholder.style.display="flex";



cameraButton.innerHTML=



`<i class="ri-camera-line"></i> Camera`;

}

/*=================================

BUTTON EVENT

=================================*/

cameraButton.addEventListener("click",()=>{

if(stream){



    stopCamera();



}



else{



    startCamera();



}

});

/*=================================

PRODUCT SELECTION

=================================*/

const products = document.querySelectorAll(".product");

const shirtOverlay = document.getElementById("shirtOverlay");

const overlays = [

"assets/shirts/white-overlay.png",



"assets/shirts/black-overlay.png",



"assets/shirts/denim-overlay.png",



"assets/shirts/polo-overlay.png",



"assets/shirts/oversized-overlay.png",



"assets/shirts/hoodie-overlay.png"

];

/*=================================

CHANGE OUTFIT

=================================*/

products.forEach((product, index) => {

product.addEventListener("click", () => {



    products.forEach(item => {



        item.classList.remove("active");



    });



    product.classList.add("active");





    shirtOverlay.style.opacity = "0";





    setTimeout(() => {



        shirtOverlay.src = overlays[index];



        shirtOverlay.style.opacity = "1";



    }, 200);



});

});

/*=================================

AI STYLIST

=================================*/

const fitScore = document.querySelectorAll(".metric strong")[0];

const lighting = document.querySelectorAll(".metric strong")[1];

const weather = document.querySelectorAll(".metric strong")[2];

const occasion = document.querySelectorAll(".metric strong")[3];

const recommendation = document.querySelector(".recommendation p");

const aiStatus = document.querySelector(".aiStatus");

const statusItems = document.querySelectorAll(".statusItem h3");

const aiData = [

{

    fit: "96%",

    light: "Perfect",

    weather: "27°C",

    occasion: "College",

    recommendation:

        "Pair this shirt with beige chinos and white sneakers."

},



{

    fit: "94%",

    light: "Excellent",

    weather: "27°C",

    occasion: "Office",

    recommendation:

        "Looks great with black trousers and leather shoes."

},



{

    fit: "98%",

    light: "Perfect",

    weather: "26°C",

    occasion: "Casual",

    recommendation:

        "Best paired with blue jeans and white sneakers."

},



{

    fit: "95%",

    light: "Excellent",

    weather: "25°C",

    occasion: "Dinner",

    recommendation:

        "Wear with cream chinos and a silver watch."

},



{

    fit: "97%",

    light: "Perfect",

    weather: "28°C",

    occasion: "Travel",

    recommendation:

        "Comfortable with cargo pants and sneakers."

},



{

    fit: "99%",

    light: "Perfect",

    weather: "18°C",

    occasion: "Winter",

    recommendation:

        "Layer with denim jeans and winter boots."

}

];

/*=================================

UPDATE AI PANEL

=================================*/

function updateAI(index){

aiStatus.innerHTML =



`<i class="ri-loader-4-line"></i> Analyzing...`;



setTimeout(() => {



    fitScore.textContent = aiData[index].fit;



    lighting.textContent = aiData[index].light;



    weather.textContent = aiData[index].weather;



    occasion.textContent = aiData[index].occasion;



    recommendation.textContent = aiData[index].recommendation;



    statusItems[0].textContent = aiData[index].fit;



    statusItems[1].textContent = "30 FPS";



    statusItems[2].textContent = "Ready";



    aiStatus.innerHTML =



    `<i class="ri-checkbox-circle-fill"></i> AI Ready`;



},700);

}
