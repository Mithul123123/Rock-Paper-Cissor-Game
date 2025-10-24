let boxchange=document.getElementById("box1");
 const rockbutton=document.getElementById("rockbtn");
  const papserbutton=document.getElementById("paperbtn");
   const cissorbutton=document.getElementById("cissorbtn");
   let random;
   let box2change=document.getElementById("box2");
   let bar1=document.getElementById("progress1");
     let bar2=document.getElementById("progress2");
     let count;
     let label1=document.getElementById("label1");
          let label2=document.getElementById("label2");
          let bar1value=bar1.value;
           let bar2value=bar2.value;
           label1.textContent=`${bar1value}%`;
           label2.textContent=`${bar2value}%`;
           let finallabel=document.getElementById("finallabel");
           let xxx=0;
           
          
   function randomsetting(num,count)
   {
    let valuedecrease1;
    let valuedecrease2;
     if(num==1)
     {
         box2change.innerHTML=` <img src="images\\Screenshot 2025-07-06 080937.png" id="box1img" class="imgs">`;
     }
     else if(num==2)
     {
             box2change.innerHTML=` <img src="images\\Screenshot 2025-07-06 080951.png" id="box1img" class="imgs">`
     }
     else if(num==3)
     {
             box2change.innerHTML=` <img src="images\\Screenshot 2025-07-06 080944.png" id="box1img" class="imgs">`
     }
     if((num==1) && (count==2) )
     {
       bar2.value-=10;
      valuedecrease2=label2.textContent.split("%");
     valuedecrease2[0]=Number(valuedecrease2[0]);
      valuedecrease2[0]-=10;
      label2.textContent=`${valuedecrease2[0]}%`;
      
     }else if((num==1) && (count==3) )
     {
       bar1.value-=10;
      
      valuedecrease1=label1.textContent.split("%");
     valuedecrease1[0]=Number(valuedecrease1[0]);
      valuedecrease1[0]-=10;
      label1.textContent=`${valuedecrease1[0]}%`;
     }
     else if((num==2) && (count==1) )
     {
       bar1.value-=10;
       valuedecrease1=label1.textContent.split("%");
     valuedecrease1[0]=Number(valuedecrease1[0]);
      valuedecrease1[0]-=10;
      label1.textContent=`${valuedecrease1[0]}%`;
     }
     else if((num==2) && (count==3) )
     {
       bar2.value-=10;
       valuedecrease2=label2.textContent.split("%");
     valuedecrease2[0]=Number(valuedecrease2[0]);
      valuedecrease2[0]-=10;
      label2.textContent=`${valuedecrease2[0]}%`;
     } else if((num==3) && (count==1) )
     {
       bar2.value-=10;
       valuedecrease2=label2.textContent.split("%");
     valuedecrease2[0]=Number(valuedecrease2[0]);
      valuedecrease2[0]-=10;
      label2.textContent=`${valuedecrease2[0]}%`;
     } else if((num==3) && (count==2) )
     {
       bar1.value-=10;
       valuedecrease1=label1.textContent.split("%");
     valuedecrease1[0]=Number(valuedecrease1[0]);
      valuedecrease1[0]-=10;
      label1.textContent=`${valuedecrease1[0]}%`;
     }
     
     

   }
function rockclick()
{
    
    count=1;

boxchange.innerHTML=` <img src="images\\Screenshot 2025-07-06 080937.png" id="box1img" class="imgs">`;
random=Math.floor((Math.random()*3)+1);

setTimeout(()=>{randomsetting(random,count);},100);
rockbutton.disabled=true;
papserbutton.disabled=true;
 cissorbutton.disabled=true;

setTimeout(()=>{papserbutton.disabled=false;
                rockbutton.disabled=false;
                cissorbutton.disabled=false;
                box2change.innerHTML=` <img src="" id="box1img" class="imgs">`;
                boxchange.innerHTML=` <img src="" id="box1img" class="imgs">`;
                if(bar1.value==0 || bar2.value==0)
                {
                       rockbutton.disabled=true;
                       papserbutton.disabled=true;
                       cissorbutton.disabled=true;
                       if(bar1.value>bar2.value)
                       {
                                                 finallabel.innerHTML=`<div  id="xz"><label id="fl2">Game Over<br>You Win😁!!</label></div></div><div><button onclick="btn2click()" id="btn22">Play Again</button></div>`;

                       }else{
                                          finallabel.innerHTML=`<div id="xy"><label id="fl1">Game Over<br>You Lose😒!!</label></div></div><div><button onclick="btn2click()" id="btn22">Play Again</button></div>`;
                       }

                }},2000);

}
function paperclick()
{
     count=2;
    boxchange=document.getElementById("box1");
boxchange.innerHTML=` <img src="images\\Screenshot 2025-07-06 080951.png" id="box1img" class="imgs">`;
random=Math.floor((Math.random()*3)+1);
randomsetting(random);
setTimeout(()=>{randomsetting(random,count);},100);
rockbutton.disabled=true;
papserbutton.disabled=true;
 cissorbutton.disabled=true;
setTimeout(()=>{papserbutton.disabled=false;
                rockbutton.disabled=false;
                cissorbutton.disabled=false;
             box2change.innerHTML=` <img src="" id="box1img" class="imgs">`;
             boxchange.innerHTML=` <img src="" id="box1img" class="imgs">`;
             if(bar1.value==0 || bar2.value==0)
                {
                       rockbutton.disabled=true;
                       papserbutton.disabled=true;
                       cissorbutton.disabled=true;
                       if(bar1.value>bar2.value)
                       {
                                                 finallabel.innerHTML=`<div  id="xz"><label id="fl2">Game Over<br>You Win😁!!</label></div></div><div><button onclick="btn2click()" id="btn22">Play Again</button></div>`;

                       }else{
                                          finallabel.innerHTML=`<div id="xy"><label id="fl1">Game Over<br>You Lose😒!!</label></div></div><div><button onclick="btn2click()" id="btn22">Play Again</button></div>`;
                       }

                }
              },2000);


}

function cissorclick()
{
     count=3;
  boxchange=document.getElementById("box1");
boxchange.innerHTML=` <img src="images\\Screenshot 2025-07-06 080944.png" id="box1img" class="imgs">`;
random=Math.floor((Math.random()*3)+1);
setTimeout(()=>{randomsetting(random,count);},100);
rockbutton.disabled=true;
papserbutton.disabled=true;
 cissorbutton.disabled=true;
setTimeout(()=>{papserbutton.disabled=false;
                rockbutton.disabled=false;
                cissorbutton.disabled=false;
              box2change.innerHTML=` <img src="" id="box1img" class="imgs">`;
              boxchange.innerHTML=` <img src="" id="box1img" class="imgs">`;
            if(bar1.value==0 || bar2.value==0)
                {
                       rockbutton.disabled=true;
                       papserbutton.disabled=true;
                       cissorbutton.disabled=true;
                       if(bar1.value>bar2.value)
                       {
                                                 finallabel.innerHTML=`<div id="xz"><label id="fl2">Game Over<br>You Win😁!!</label></div><button onclick="btn2click()" id="btn22">Play Again</button>`;

                       }else{
                                           finallabel.innerHTML=`<div id="xy"><label id="fl1">Game Over<br>You Lose😒!!</label></div><button onclick="btn2click()" id="btn22">Play Again</button>`;
                       }

                }},2000);


}  
//<div id="xz"><label id="fl1">PLAYING<br>🎭</label>
                      //</div><button id="btn22">Play Again</button>
function btn2click()
{                
  xxx++;
             console.log("aa");
              rockbutton.disabled=false;
                       papserbutton.disabled=false;
                       cissorbutton.disabled=false;
                       bar1.value=100;
                       bar2.value=100;
                       label1.textContent=`100%`;
           label2.textContent=`100%`;
         /*  finallabel.innerHTML=`<div id="xz"><label id="fl1">PLAYING<br>🎭</label>
                      </div><button id="btn22">Play Again</button></div>`;*/
}

rockbutton.onclick=rockclick;
document.getElementById("btn22").onclick=btn2click;
papserbutton.onclick=paperclick;
cissorbutton.onclick=cissorclick;

