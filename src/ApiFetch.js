
import { latDomData , longDomData , userDomData  } from './DomLoader';

function getSatData(){
    fetch("https://api.wheretheiss.at/v1/satellites/25544").then(response =>{
      
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json()
      })
      .then(data =>{        
        latDomData.innerHTML = data.longitude;
        longDomData.innerHTML = data.latitude;
      })
      .catch(error =>{
          console.log(error);
      });

}
setInterval( getSatData, 1000);

function getApiData(){
    fetch("https://reqres.in/api/users").then(response =>{
      
      if(!response.ok){
          throw Error("ERROR");
      }
      return response.json()
    })
    .then(data =>{
       // let i = data.data;
       // console.log(i);

        const html = data.data.
        map(user => {
            return `
            <div class = "user">
                
                <p><img src= "${user.avatar}" alt="${user.first_name}"></p>
                <p>Name: ${user.first_name} ${user.last_name}</p>
                <p>Name: ${user.email}</p>
            </div>
            
            `;
        })
        .join("");
       userDomData.innerHTML = html;
    })
    .catch(error =>{
        console.log(error);
    });
}
getApiData();