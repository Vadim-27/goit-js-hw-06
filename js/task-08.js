// const refs = {
//     form: document.querySelector(".login-form"),
   
// }


// const onSubmint = (e) => {
//     e.preventDefault();
//     const {
//         elements: { email, password }
//     } = e.currentTarget;

//     if (email.value === "" || password.value === "") {
//         alert("Заполните все поля пожалуйста!")
//     }
    
//     console.log(`email: ${email.value}, Password: ${password.value}`);
//     e.currentTarget.reset();
// }
// refs.form.addEventListener("submint", onSubmint);

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Заполните все поля пожалуйста!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}