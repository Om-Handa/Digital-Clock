let hourst= document.querySelector(".timeh")
let minst= document.querySelector(".timem")
let sect= document.querySelector(".times")
let day= document.querySelector(".day")
    function time(){    
        const dat= new Date()
        const hours=dat.getHours().toString().padStart(2,'0')
        const mins=dat.getMinutes().toString().padStart(2,'0')
        const sec=dat.getSeconds().toString().padStart(2,'0')
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
        let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let timehour=`${hours} :`
        let timemin=`${mins} : `
        let timesec=`${sec}`
        hourst.textContent=timehour
        minst.textContent=timemin
        sect.textContent=timesec
        day.innerHTML=`${dat.getDate()}-${months[dat.getMonth()]}-${dat.getFullYear()}  (${days[dat.getDay()]})`
        
    }
setInterval(time,1000)
time()
    