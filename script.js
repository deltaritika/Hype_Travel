var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passError = document.getElementById("pass-error");
var repassError = document.getElementById("repass-error");
var phoneError = document.getElementById("phone-error");
var submitError = document.getElementById("submit-error");
function validatename() {
  var name = document.getElementById("full_name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter Full Name";
    return false;
  }
  nameError.innerHTML = '<ion-icon name="checkmark-circle-sharp"></ion-icon>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("Mobile_Num").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be of 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = '<ion-icon name="checkmark-circle-sharp"></ion-icon>';
  return true;
}
function validatemail() {
  var email = document.getElementById("mail").value;
  if (email.length == 0) {
    emailError.innerHTML = "Mail is required";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Email is not in the required form";
    return false;
  }
  emailError.innerHTML = '<ion-icon name="checkmark-circle-sharp"></ion-icon>';
  return true;
}
function validatepass() {
  var password = document.getElementById("pss").value;
  if (password.length == 0) {
    passError.innerHTML = "Password is required";
    return false;
  }
  if (password.length == 1 || password.length == 2 || password.length == 3) {
    passError.innerHTML = "password too short";
    return false;
  }
  passError.innerHTML = '<ion-icon name="checkmark-circle-sharp"></ion-icon>';
  return true;
}
function validaterepass() {
  var repassword = document.getElementById("cnpss").value;
  var check_password = document.getElementById("pss").value;

  if (repassword.length == 0) {
    passError.innerHTML = "Password is required";
    return false;
  }
  if (
    repassword.length == 1 ||
    repassword.length == 2 ||
    repassword.length == 3
  ) {
    repassError.innerHTML = "password too short";
    return false;
  }
  if (repassword != check_password) {
    repassError.innerHTML = "password did not match";
    return false;
  }
  repassError.innerHTML = '<ion-icon name="checkmark-circle-sharp"></ion-icon>';
  return true;
}

function validateForm() {
    if (!validatePhone() || !validatemail() || !validatename() || !validatepass() || !validaterepass()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please Enter the correct value(s) before submitting";
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}