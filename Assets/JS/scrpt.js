const studentsInfo=[
    {image:"https://placehold.co/600x400",
    Name:"Swapna",
     Course:"BCA",
     Location:"Bangalore"
      
    },
    {image:"https://placehold.co/600x400",
    Name:"Yuga",
     Course:"BCA",
     Location:"Mysore"
      
    },
      {image:"https://placehold.co/600x400",
    Name:"Zoro",
     Course:"BCA",
     Location:"Japan"
      
    },
      {image:"https://placehold.co/600x400",
    Name:"Sanji",
     Course:"BCA",
     Location:"South Blue"
      
    }
   ]
  document.querySelector("#students").innerHTML=studentsInfo.map(students =>`
  <div class="col-sm-12 col-md-4 my-2">
          <div class="card" style="width: 18rem;">
    <img src="${students.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">
      ${students.Name}</h5>
      <p class="card-text">${students.Location}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>  
  `).join(``)