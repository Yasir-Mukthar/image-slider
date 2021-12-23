let slides=document.getElementsByClassName("slider");
let back=document.getElementById("back");
let next=document.getElementById("next");
let flag=0;
autorun(flag);
function autorun(num){
    for(i=0; i<slides.length; i++){
    slides[i].style.display='none';
}
    slides[num].style.display='block';
    
}

back.addEventListener('click', function(){
    if(flag<=0){
        
        flag=slides.length-1;
        autorun(flag);
    }else{
        
        flag=flag -1;
        autorun(flag);
    }
    

})


next.addEventListener("click", function(){
    if(flag==slides.length-1){
    flag=0;
     autorun(flag);
    }
    else{
        flag=flag + 1;
        autorun(flag); 
    }
     


})