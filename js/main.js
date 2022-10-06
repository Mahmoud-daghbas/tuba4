document.addEventListener('click' , function(e){
  if(e.target.classList.contains('gallery-item'))  {
    const src=e.target.getAttribute('src');
    // console.log('src');
    document.querySelector('.modal-img').src =src;
    const myModal = new bootstrap.Modal(document.getElementById('gallary-modal'));
    myModal.show();


  }
})


  
window.addEventListener('scroll' , reveal);

function reveal(){
 var reveals  = document.querySelectorAll('reveal'); 
 for(var i=0; i<reveals.length ;i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight-revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
 }
} 

