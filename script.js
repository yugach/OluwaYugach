function validateForm() {
  var name = document.forms["contactForm"]["name"].value;

  if (name == null || name == "") {
    alert("error: kindly enter name!");
    return false;
  }

  if (name.length < 3) {
    alert("error: Name must be at least 3 characters!");
    return false;
  }

  var mail = document.forms["contactForm"]["mail"].value;
  // console.log(mail);
  if (mail == null || mail == "") {
    alert("error: kindly enter your email address");
    return false;
  }

  var msg = document.forms["contactForm"]["msg"].value;
  // console.log(msg);
  if (msg == null || msg == "") {
    alert("error: kindly enter your message!");
    return false;
  }

  if (msg.length < 5) {
    alert("error: message too short.\n kindly re-enter!");
    return false;
  } else
    alert(
      "Thanks for contacting us.\n We'll reply through your email within 24hrs."
    );

  return true;
}

// const thanksDiv = document.querySelector(`thanksDiv`);

// const send = document
//   .querySelector(`send`)
//   .addEventListener(`click`, modifyDom);

// function modifyDom(e) {
//   document.querySelector(`contForm`).style.display = `none`;

//   thanksDiv.style.display = `block`;

//   e.preventDefault;
// }
