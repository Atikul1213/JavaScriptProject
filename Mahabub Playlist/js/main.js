const milestonesData = JSON.parse(data).data;


// load course milestones data

function loadMilestones()
{
    const milestones = document.querySelector(".milestones");
    
    milestones.innerHTML = ` ${milestonesData.map(function(milestone){
        return `    <div class="milestone border-b" id="${milestone._id}">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick="markMileStone(this,${milestone._id})"/></div>
              <div onclick="openMilestone(this,${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>

            <div class="hidden_panel">
               ${milestone.modules.map(function(module){
               
                    return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`;
               }).join("")}
            </div>

          </div>
        </div> `;
    }).join("")}`;
}


function openMilestone(milestoneElement,id)
{
    const currentPanel = milestoneElement.parentNode.nextElementSibling;


    const active = document.querySelector(".active");

    if(active && !milestoneElement.classList.contains("active"))
        active.classList.remove("active");

    milestoneElement.classList.toggle("active");

    const shownPanel = document.querySelector(".show");
    
    if(!currentPanel.classList.contains("show") && shownPanel)
        shownPanel.classList.remove("show");
    
    currentPanel.classList.toggle("show");


    showMilestone(id);


}


function showMilestone(id){
    const milestoneImage = document.querySelector(".milestoneImage");
    milestoneImage.src = milestonesData[id].image;
   
    milestoneImage.style.opacity = "0";

    const title = document.querySelector(".title");
    title.innerText = milestonesData[id].name; 


    const details = document.querySelector(".details");

    details.innerText = milestonesData[id].description;
}


// Listen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");

milestoneImage.onload = function(){
    this.style.opacity = "1";
    }
    



function markMileStone(checkbox,id){
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
    console.log("ok id: ",id);

    const doneItem = document.getElementById(id);


    if(checkbox.checked){
        milestonesList.removeChild(doneItem);
        doneList.appendChild(doneItem);

    }
    else{
        doneList.removeChild(doneItem);
        milestonesList.appendChild(doneItem);

    }

}


loadMilestones();