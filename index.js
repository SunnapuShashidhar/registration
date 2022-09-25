
var form = document.getElementById('form-data');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(form.action, {
      method: "post",
      body: new FormData(document.getElementById("form-data")),

    }).then(
      response => {
        response.json();
        alert("success")
      }
    ).then((html) => {
      alert("success");
      // window.location.href = "./show.html";
    }
    )
  })
}




// const url = "https://onedrive.live.com/edit.aspx?resid=C398AD873DB92869!444877&cid=d59cc5dc-c0c9-4a7b-bf1d-356c4940c392&ithint=file%2cxlsx&wdOrigin=OFFICECOM-WEB.START.REC"
// const form = document.forms['google-sheet'];

// form.addEventListener('submit', e => {
//   fetch(url, {
//     method: 'POST', body: new FormData(form)
//   }).then((responce) => alert("Thanks for contacting us")).catch(console.error("error"))
// })


