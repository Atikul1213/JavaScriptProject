 let Name = document.querySelector(".name");
 console.log("name: ",Name.value);

 let Email = document.querySelector(".email");
 console.log("Email: ",Email.value);

let Designation = document.querySelector(".designation");
console.log("Designation: ",Designation.value);

let Permanent = document.querySelector(".permanent");
console.log("Permanent: ",Permanent);

 let Submit = document.querySelector(".submit");
 
 let Clear = document.querySelector(".clear");



 const tableBody = document.querySelector("table tbody");



const Data = [];


function RenderTable(){
    
    tableBody.innerHTML='';
    
    
    Data.forEach( (row,index)=>{
        const newRow = document.createElement("tr");
        newRow.innerHTML = ` <td> ${row.name} </td>
        <td>${row.designation}</td>
        <td>${row.email}</td>
        <td>${row.permanent}</td>
        <td><button type="button" class="edit" data-index="${index}">Edit</button></td>
        <td><button type="button" class="delete" data-index="${index}">Delete</button></td>
        `;
        
        
        tableBody.appendChild(newRow);
    });
    
    
    document.querySelectorAll('.edit').forEach(button => {
       button.addEventListener('click', handleEdit);
    });
    
    
    document.querySelectorAll(".delete").forEach(btn=>{
      btn.addEventListener('click',handleDelete);
    });


}



 Submit.addEventListener('click',function(){
    console.log("Output: ",Name.value + " "+Email.value+ "  "+Designation.value+ "  "+Permanent.checked);

    let name = Name.value;
    let email = Email.value;
    let designation = Designation.value;

    let permanent="No";
    if(Permanent.checked)
        permanent = "Yes";
    Data.push({name,email,designation,permanent});

    RenderTable();
 

 });




 Clear.addEventListener('click',function(){
    console.log("click the clear button");
    Name.value = "";
    Email.value = "";
    Permanent.checked = false;
    Designation.value = "trainee"; 
        

 });


 




 function handleEdit(event){
    console.log("Click the Edit button");
    let idx = event.target.getAttribute('data-index');
    console.log("idx: ",idx);
    Name.value = Data[idx].name;
    Email.value = Data[idx].email;
    Designation.value = Data[idx].designation;

    if(Data[idx]=="Yes")
        Permanent.checked = true;
    else 
    Permanent.checked = false;

    Data.splice(idx,1);
    RenderTable();
 }







function handleDelete(event){
    console.log("Click the delete button");
    let idx = event.target.getAttribute('data-index');
    console.log("idx: ",idx);

    Data.splice(idx,1);
    RenderTable();

}


 

 
  
 
