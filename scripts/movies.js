// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let url = "http://www.omdbapi.com/?apikey=5807364a&s=${search}"

let movie = document.getElementById("search").value

async function searchmovie(){

    try{

        let search = document.getElementById("search").value

        const res = await fetch (url)
    
        const data = res.json()
        appendmovies(data)
    
        //const movies = data.search

    }catch(err){
        console.log(err)
    }

      function appendmovies(data){
          console.log(data)

        data.foreach(function(ele,index){

            let div = document.createElement("div") 

            let image = document.createElement("img")
            image.src = ele.poster

            let name = document.createElement("p")
            name.innerText = ele.Title
            
            let button = document.createElement("button")
            button.innerText = "Book Now"
             button.addEventListener("click",function(){

                 addmovie(ele,index)

             })

             div.append(image,name,button)
             document.getElementById("movie").append(div)





        })
      }

       function addmovie(ele,index){
            
       }
    

}