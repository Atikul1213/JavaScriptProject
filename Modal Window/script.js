const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll(".show-modal");

//console.log("btnopenModal: ",btnsOpenModal);

btnsOpenModal.forEach(x=>{

    //console.log("click x: ",x);
    x.addEventListener('click',function(){
       // modal.style.display = 'block';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});

const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

document.addEventListener('keydown', function(e){
    console.log('any key pressed', e.key);
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        console.log("Escape key pressed");
        closeModel();
    }
});