console.log("Hello world!")
//? Does line 1 show up in your console, if it does not
//? check the HTML and make sure the script is linked correctly

//! Create an object that contains four movies. Each of these
//! movies will have a title, and an image url
//* Note: Find images in google and click on "copy image address"
//* in the drop down when doing a two finger click on the image
//* paste this into your image url

const movies = [
    {
title: "Old Boy",
image: "https://m.media-amazon.com/images/M/MV5BZWZkNjVhZDEtZTNkZi00OWIxLTk3N2UtNjBkMjgzZGMwMDI2XkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"
},
{
title: "Friday",
image: "https://images.moviesanywhere.com/0f0eda9096f7023c33fae1fcd0ac17b2/69c9fa37-d4e7-44be-ab72-bea656ab4958.jpg"
    },
    {
title: "Creed 3",
image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Creed_III_poster.png"

        }
        ,
    {
title: "Cult",
image: "https://upload.wikimedia.org/wikipedia/en/2/27/A_Colt_Is_My_Passport_poster.jpg"
        }
]



//! In the HTML, there is an id associated with a div element
//TODO: Get the element with the id of "body"
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//TODO: Iterate throgh the object using forEach
////////////////////////////////////////////////////////
movies.forEach(movie => {
//TODO: Create an "h3" and "img" tag that will contain your
//TODO: movies object's title and image url
//! REMEMBER, you want to create these HTML tags FOR EACH
//! movie inside your object 
////////////////////////////////////////////////////////
const h3 = document.createElement("h3")
const img = document.createElement("img")
document.getElementById("body").append(h3, img)
////////////////////////////////////////////////////////
//TODO: Modify the inner text of the elements created
//TODO: to match your movies object
////////////////////////////////////////////////////////
h3.innerText = movie.title
img.src = movie.image
////////////////////////////////////////////////////////
//! Bonus
//TODO: create a "click" event that changes the title
//TODO: of the movie when you click the image
////////////////////////////////////////////////////////
img.addEventListener("click", ()=> {
h3.innerText = "It Works!"
})


////////////////////////////////////////////////////////
//* Keep in mind that I purposed kept all of this code 
//* inside the for each iteration so we won't run into 
//* scope problems
})

