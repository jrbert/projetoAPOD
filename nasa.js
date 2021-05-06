    $('#pesquisa').on('click', async function (event) {
        event.preventDefault();
    

        let data = $('#dataApod').val();
        let url = `https://api.nasa.gov/planetary/apod?api_key=lBaydwlnrAb6KfYEKOn6nvLpcvQv16QJNYNkwpdj&date=${data}` 
        let tralala = await fetch(url).then(response => response.json());
        
        img = document.getElementById("imgApod");
        img.src = tralala.url;
    })