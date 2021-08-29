const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const fathername = document.getElementById('fathername');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const total_marks_ssc_input = document.getElementById('totalmarksSSC');
const obtained_marks_ssc_input = document.getElementById('obtmarksSSC');
const total_marks_hssc_input = document.getElementById('totalmarksHSSC');
const obtained_marks_hssc_input = document.getElementById('obtmarksHSSC');

const sscLabel = document.getElementById('sscLabel');
const hsscLabel = document.getElementById('hsscLabel')

const SSCbtn = document.getElementById("SSCbtn");
const HSSCbtn = document.getElementById("HSSCbtn");


//percentage calculation logic

SSCbtn.addEventListener("click",calcPercentageSSC);
HSSCbtn.addEventListener("click",calcPercentageHSSC)

function calcPercentageSSC(){
    const num1 = total_marks_ssc_input.value;
    const num2 = obtained_marks_ssc_input.value;
    const result = (Number(num2) / Number(num1))*100;
    sscLabel.innerText = result.toFixed(2);
}

function calcPercentageHSSC(){
    const num1 = total_marks_hssc_input.value;
    const num2 = obtained_marks_hssc_input.value;
    const result = (Number(num2) / Number(num1))*100;
    hsscLabel.innerText = result.toFixed(2);
}


//criteria logic

const register = document.getElementById("register");

register.addEventListener("click",registerlogic);

function registerlogic(){

    if(sscLabel.innerText==00 ||sscLabel.innerText==0.00 
        || sscLabel.innerText == NaN || sscLabel.innerText== Infinity
        || hsscLabel.innerText==00 || hsscLabel.innerText == 0.00 ||
        hsscLabel.innerText == NaN || hsscLabel.innerText == Infinity
        || firstname.value=='' || lastname.value==''
        ||fathername.value=='' || email.value=='' 
        || phone.value=='' ){
        swal("Status", "Please complete the form", "info");
    } else{

        if(sscLabel.innerText>50 && hsscLabel.innerText>60){
            swal("Status", "you are successfully registered", "success");
            } else {
            swal("Status", "SORRY! You're not qualified", "info");
            }

    }

}






//form validation

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});




// running validation check
function checkInputs(){
    //get the values from the inputs
    const firstnameV =firstname.value.trim();
    const lastnameV =lastname.value.trim();
    const fathernameV =fathername.value.trim();
    const emailV = email.value.trim();
    const phoneV = phone.value.trim();
    



    //firstname validation
    if(firstnameV === ""){
        setErrorFor(firstname, "First Name cannot be blank");
    } else {
        setSuccessFor(firstname);
    }

    //lastname validation
    if(lastnameV === ""){
        setErrorFor(lastname, "Last Name cannot be blank");
    } else {
        setSuccessFor(lastname);
    }

    //fathername validation
    if(fathernameV === ""){
        setErrorFor(fathername, "Father Name cannot be blank");
    } else {
        setSuccessFor(fathername);
    }

    //email vaildation
    if(emailV === ""){
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailV)){
        setErrorFor(email, "Invalid Email");
    } else {
        setSuccessFor(email);
    }
    
    //phone validation
    if(phoneV === ""){
        setErrorFor(phone, "Phone No cannot be blank");
    } else if( phoneV.length < 10){
        setErrorFor(phone, "Invalid No")
    }
    
    else {
        setSuccessFor(phone);
    }

    //hssc-totalmarksfields validation
    if(total_marks_hssc_input.value=== ""){
        setErrorFor(total_marks_hssc_input, "This Field cannot be blank");
    } else if(total_marks_hssc_input.value < 0){
        setErrorFor(total_marks_hssc_input, "Negative Number is not allowed");
    } else {
        setSuccessFor(total_marks_hssc_input);
    }

    //hssc-obtainedmarksfields validation
    if(obtained_marks_hssc_input.value=== ""){
        setErrorFor(obtained_marks_hssc_input, "This Field cannot be blank");
    } else if(obtained_marks_hssc_input.value < 0){
        setErrorFor(obtained_marks_hssc_input, "Negative Number is not allowed");
    } else {
        setSuccessFor(obtained_marks_hssc_input);
    }

    //ssc-totalmarksfields validation
    if(total_marks_ssc_input.value=== ""){
        setErrorFor(total_marks_ssc_input, "This Field cannot be blank");
    } else if(total_marks_ssc_input.value < 0){
        setErrorFor(total_marks_ssc_input, "Negative Number is not allowed");
    } else {
        setSuccessFor(total_marks_ssc_input);
    }

    
    //hssc-totalmarksfields validation
    if(obtained_marks_ssc_input.value=== ""){
        setErrorFor(obtained_marks_ssc_input, "This Field cannot be blank");
    } else if(obtained_marks_ssc_input.value < 0){
        setErrorFor(obtained_marks_ssc_input, "Negative Number is not allowed");
    } else {
        setSuccessFor(obtained_marks_ssc_input);
    }


}



// function for error
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}


// function for success
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}