/* let url = "https://api.unsplash.com/search/photos?query=all&client_id=PYY3q6HNb60EehBacxC8TNW0A8orDHMTV1kTh0AjraI";



let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let imagenesDiv = document.getElementById("imagenesjson");
  
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
        let fotos = result.results;

        for (let foto of fotos){
        
            let nuevoDiv = document.createElement("div");
            let imgApi = foto.urls.smoll;

            let markHtml = `
            <div class="box">
            <img id="" src="${imgApi}" alt="">
            </div>
            `;
            nuevoDiv.innerHTML = markHtml;
            imagenesDiv.appendChild(nuevoDiv);
            
        }
    })
    .catch(error => console.log('error', error)); */


    