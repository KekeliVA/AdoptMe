const key = 'cxyhnll5ScFfHdAHD2pKJ0hAOREZIlaSFRx6MnajQy35qxKJVn';

const secret = 'O4kyEkoJkbFd5OfhhPaYja1c8GHtSPyI9W1eCyBc';

var image;


async function getToken() {
    let parm = new URLSearchParams();

    parm.append("grant_type", "client_credentials")
    parm.append("client_id", key);
    parm.append("client_secret",secret)

    const petToken = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
            method: 'POST',
            body: parm
        }
    )

    let obj = await petToken.json();


    console.log(obj);
     sendData(obj)
}
async function sendData(data) {
    console.log(data.access_token);

    const resp = await fetch(
        'https://api.petfinder.com/v2/animals?type=dog&location=06064',
        {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
                Accept: '*/*'
            }
        });
    

    const respData = await resp.json();
    renderCard(respData);

    if (respData == null) {

      console.log('retrieving data')
      return sendData(respData)

    } 
    else {

      console.log('success')
      //console.log(respData)
      return respData;

    }

}

function renderCard(info) {
    console.log(info);

    $("#img").attr('src', info.animals[1].photos[0].medium);

    console.log(info.animals[1].name);

    $("#title").text(info.animals[1].name);

    $("#dist").text(info.animals[1].distance + " Miles away");



 

    for(let i in info.animals){
        console.log(info.animals[i].name);

        if(info.animals[i].photos.length != 0) {
            image = info.animals[i].photos[0].full;
        }
        
        $("#cards").append(
            `
            <div>
                <div class="col s6 m4">
                    <div class="card">
                        <div class="card-image">
                            <img id="img" src="${image}" alt="pet">
                        </div>
                        <div class="card-content">
                            <a class="btn-floating right waves-effect waves-light red"><i class="material-icons">add</i></a>
                            <p id="dist">${info.animals[i].name} \n ${info.animals[i].distance} Miles away</p>
                        </div>
                        <div class="card-action">
                             <a href="${info.animals[i].url}">More info</a>
                        </div>
                    </div>
                </div>
            </div>
        `
        )
       
    }
}    


getToken();