// handle scroll event on window
// check skill container is visible or not
// ensure that initial width of colored skill div is zero->initialised or reset
// start enimation on every skill level -> increse screen width from 0 to skill level
// store skill level -> HTML with the help of data-attribute

// 706.4000244140625

// handling scroll event
let id  = setInterval(scrollFun, 50);
let skills = document.querySelectorAll('.skill');
let filled = false;
function reset_length(){
  for(let i of skills){
      i.style.width = "0%";
  }
}
reset_length();
function scrollFun(){
    let target = 600.4000244140625;
    // let target = 284.79998779296875;
    let ofY = window.pageYOffset;
    if(ofY >= target && ofY <= 958.4000244140625){
        if(!filled){
        for(let i of skills){
            let val = i.getAttribute('data-val');
            let filled_val = 0;
            let fillId = setInterval(()=>{
                if(filled_val > val){
                    clearInterval(fillId);
                }
                i.style.width = `${filled_val}%`;
                filled_val += 5;
            }, 40);
          
            i.style.overflow = "hidden";
        }
        filled = true;
    }else{
        clearInterval(id);
    }
    }
    // clearInterval(id);

}


