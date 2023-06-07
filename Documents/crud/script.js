
fetch('./users.json')
.then(response => response.json())
.then(json => 
  {
    var employees = json;
    // console.log(employees);
    // console.log(employees[1]);

    localStorage.clear();
    localStorage.setItem("employee_data", JSON.stringify(employees));



// Showing Employee data in grid card

    function gridRead(){
      let section1 = "";
      

      for (var employee in employees){
        var newCard = 
        `<div class="col ml-2 mt-4" >
        <div class="card">
                <i class="fal fa-times text-danger h1 x "  onclick="delBoth(${employee})" ></i>  
                <img src="${employees[employee].img}" width="200px" height="220px" alt="">
                    <div class="card-body">

                      <table class="table">
                        <tr>
                          <td><b> Name </b></td>
                          <td><b>:</b></td>
                          <td> ${employees[employee].name}</td>

                        </tr>  
                        <tr>
                          <td><b> ID:</b></td>
                          <td><b>:</b></td>
                          <td> ${employees[employee].eno}</td>
                        </tr>  
                        <tr>
                          <td> <b>Skills</b></td>
                          <td><b>:</b></td>
                          <td>  <span id="id${employee}"> ${employees[employee].skills}</span></td>
                        </tr>  
                        <tr>
                          <td> <b>Project</b></td>
                          <td><b>:</b></td>
                          <td> ${employees[employee].project}  </td>
                        </tr>
                        <tr>
                          <td> <b>HCM</b></td>
                          <td><b>:</b></td>
                          <td> ${employees[employee].HCM}</td>
                        </tr>
                      </table>  
                                   
            <button class="btn text-primary ml-auto" id="bte${employee}" onclick="editSkill(${employee})">Edit Skills</button>
       <button class="btn text-primary save" id="bts${employee}" onclick="saveSkill(${employee})" >Save</button>
       <button class="btn text-primary cancel button"  id="btc${employee}" onclick="cancelSkill(${employee})" >Cancel</button>
          
</div>
</div>
</div>`;

section1 += newCard;
      }

      let gridCard = document.querySelector(".gridCard");
      gridCard.innerHTML = section1;
    }
  gridRead();


// Showing Employee data in list tables

function listRead(){
  let section2 = "";

  for(let employee in employees){
    let newRow = `
    <tr class="tRowDelete">

     <td>${employees[employee].name}</td>
     <td>${employees[employee].eno}</td>
          
     <td> <span id="sd1${employee}"> ${employees[employee].skills}</span> </td>
      <td>${employees[employee].project}</td>
      <td>${employees[employee].HCM}</td>
     <td>   <button class="btn text-primary fad fa-edit h4" id="bte2${employee}" onclick="editSkill(${employee})"></button> &nbsp;
                           <button class="btn text-primary save" id="bts2${employee}" onclick="saveTable(${employee})" >Save</button>
                           <button class="btn text-primary cancel button" style="display:none"  id="btc2${employee}" onclick="cancelSkill(${employee})" >Cancel</button> 
                           <i class="far fa-minus-octagon text-danger del h4" onclick="delBoth(${employee})"></i>
                           </td>
                          
                           
                           </tr>                            
    `;

    section2 += newRow;
  }

  let tableRow = document.querySelector(".tableRow");
  tableRow.innerHTML = section2;
}
listRead();


s


  });

