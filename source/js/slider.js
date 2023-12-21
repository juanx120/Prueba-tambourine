//Inicializacion de las constantes, obteniendo el apartado correspondiente del html
const btnRight = document.querySelector(".right_arrow")//boton flecha derecha
const btnLeft = document.querySelector(".left_arrow")//boton flecha izquierda
const cardimg = document.querySelector("#card_img")//imagen de la tarjeta
const backimg = document.querySelector("#cards_background")//imagen de fondo de la secciond e tarjetas
const title = document.querySelector("#hotel_name")//titulo del hotel en las tarjetas
const description=document.querySelector("#hotel_description")//descripciond el hotel en las tarjetas
const n_card=document.querySelector("#n_card")//numero de la tarjeta 
const cards=document.querySelector("#cards")//Selecciona toda la tarjeta
//variable para el indice
var i=1
//Rutas de las imagenes
var images= [
    'source/img/HiltonCartagena.jpg',
    'source/img/TheCrescent.jpg',
    'source/img/UrbanRoyalCartagena.jpg'
]
//Rutas de las imagenes en blanco y negro
var back_images=[
    'source/img/HiltonCartagenaByN.jpg',
    'source/img/TheCrescentByN.jpg',
    'source/img/UrbanRoyalCartagenaByN.jpg'
]
//textos del titulo
var t_text=[
    "Beautiful Location", 
    "Stunning Location", 
    "Funny Location"
]
//Descripciones del hotel
var d_text=[
    "From the breathtaking views of the Caribbean Sea to the luxurious event halls, the Hilton Hotel in Cartagena offers dreamy settings for unforgettable celebrations and events.", 
    "From the picturesque Linear Park to the sprawling and elegant Grande Ballroom, Reunion Resort & Golf Club offers gorgeous ceremony settings.",
    "From the vibrant cityscape views to the sophisticated interiors, Urban Royal Cartagena Hotel presents a blend of urban elegance and coastal charm, offering guests a memorable stay in the heart of the city."
]
//Numero de las tarjetas
var num_card=["01","02","03"]

//funcion para mostrar la siguiente imagen
function Nextcard() {
    //desaparece la tarjeta
    cards.style.opacity = '0';

    setTimeout(function() {
        i++;
        //se comprueba que el numero no esta fuera del limite, si no se reinicia
        if (i > 2) {
            i = 0;
        }
        //se realiza el cambio de la imagen y texto
        cardimg.src = images[i];
        backimg.style.backgroundImage = "url(" + back_images[i] + ")";
        title.textContent = t_text[i];
        description.textContent = d_text[i];
        n_card.textContent=num_card[i]
        //aparece la tarjeta con la nueva informacion
        cards.style.opacity = '1';
    }, 500); // Espera 0.5 segundos antes de realizar el cambio
}

//funcion para mostrar la imagen anterior
function Aftercard() {
    //desaparece la tarjeta
    cards.style.opacity = '0';

    setTimeout(function() {
        i--;
        //se comprueba que el numero no esta fuera del limite, si no se reinicia
        if (i < 0) {
            i = 2;
        }
        //se realiza el cambio de la imagen y texto
        cardimg.src = images[i];
        backimg.style.backgroundImage = "url(" + back_images[i] + ")";
        title.textContent = t_text[i];
        description.textContent = d_text[i];
        n_card.textContent=num_card[i]
        //aparece la tarjeta con la nueva informacion
        cards.style.opacity = '1';
    }, 500); // Espera 0.5 segundos antes de realizar el cambio
}

//Espera el click para llamar a la funcion de siguiente tarjeta
btnRight.addEventListener('click',function(){Nextcard()})
//Espera el click para llamar a la funcion de la anterior tarjeta
btnLeft.addEventListener('click',function(){Aftercard()})