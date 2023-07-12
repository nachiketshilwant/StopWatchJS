let ms=0, sc=0,mn=0,hr=0;
let st;
let tm=document.querySelector(".time");

//reset
let rst=document.querySelector("#reset");
rst.addEventListener('click', ()=>{
    clearInterval(st);
    ms=sc=mn=hr=0;
    tm.innerHTML=`00 : 00 : 00: 000`;


    //remove flag
    var flg1=document.querySelector('.flg')
    while (flg1.firstChild){
        flg1.removeChild(flg1.firstChild)
    }

    let p=document.createElement('p')
    p.innerHTML="Flagged Time"
    flg1.appendChild(p);

});

//start
let srt=document.querySelector("#start");
srt.addEventListener('click', ()=>{
   st=setInterval(timer,10);
  function timer(){
      ms+=10;
      if(ms>999){
          sc++;
          ms=0;
      }
      if(sc>59){
          mn++;
          sc=0;
      }
      if(mn>59){
          hr++;
          mn=0;
      }
      let hr1 = ("0" + hr).slice(-2), mn1 = ("0" + mn).slice(-2),sc1 = ("0" + sc).slice(-2),ms1 = ("0" + ms).slice(-3);
      let s=`${hr1} : ${mn1} : ${sc1} : ${ms1}`;
      tm.innerHTML=s;
}
});

//pause
let ps=document.querySelector('#pause');
ps.addEventListener('click',()=>{
    clearInterval(st);
})

//fla time
let c=0;
let fg=document.querySelector('#flag');
fg.addEventListener('click',()=>{
    let flg=document.querySelector('.flg')
    let p=document.createElement('h5')
    let hr1 = ("0" + hr).slice(-2), mn1 = ("0" + mn).slice(-2),sc1 = ("0" + sc).slice(-2),ms1 = ("0" + ms).slice(-3);
    let s=`${hr1} : ${mn1} : ${sc1} : ${ms1}`;
    p.innerHTML=s;
    flg.appendChild(p);
})