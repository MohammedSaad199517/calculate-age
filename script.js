let year = document.getElementById('year')
let month = document.getElementById('month')
let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('second')
//--------------------------------------
let timer = setInterval(()=>{
    var dob = new Date("01/07/2025");  // the date of my age 30
    var myBirthday= new Date("01/07/1995"); 
    var age_30 = dob.getTime() -  new Date("01/07/1995").getTime() ;  
    var currentAge= Date.now() - myBirthday.getTime() 
    var to30 = age_30 - currentAge;
    year.innerHTML = `${new Date(to30).getUTCFullYear() -1970}`;
    month.innerHTML=`${ new Date(to30).getMonth()}`;
    day.innerHTML = `${new Date(to30).getUTCDate() -1}`;
    hour.innerHTML = `${new Date(to30).getHours() - 3}`;
    min.innerHTML= `${new Date(to30).getMinutes()}`
    sec.innerHTML = `${new Date(to30).getSeconds()}`   
    if( (new Date(to30).getUTCFullYear() -1970) ===0 &&
        ( new Date(to30).getMonth()) === 0 && 
        (new Date(to30).getUTCDate() -1) === 0 && 
        (new Date(to30).getHours() - 3) === 0 &&
        (new Date(to30).getMinutes()) === 0 &&
        (new Date(to30).getSeconds()) === 0 ){
            document.getElementById('massage').innerHTML='عيد ميلاد سعيد'
            clearInterval(timer)
        }
},1000)