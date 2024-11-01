
function update(){
    //Title and Name Update//
   let input= document.getElementById("name").value;
   let output=document.getElementById("Title");
   output.innerHTML=input;
   document.getElementById("Title1").innerHTML=input;
   document.getElementById("Title2").innerHTML=document.getElementById("name1").value;
   document.getElementById("Title4").innerHTML=document.getElementById("name1").value;

   //contact//
   document.getElementById("contactT").innerHTML=document.getElementById("contact").value;
   //Address//
   document.getElementById("AddressT").innerHTML=document.getElementById("Address").value;
   //email//
   document.getElementById("emailT").innerHTML=document.getElementById("email").value;
   //education//
   document.getElementById("educationT").innerHTML=document.getElementById("education").value;
   //skills//
   document.getElementById("skillsT").innerHTML=document.getElementById("skills").value;
   //hobbies//
   document.getElementById("hobbiesT").innerHTML=document.getElementById("hobbies").value;
   //workExpirence//
   document.getElementById("workExpirenceT").innerHTML=document.getElementById("workExpirence").value;
   //reffrence//
   document.getElementById("refrenceT").innerHTML=document.getElementById("refrence").value;
   //Linkedin//
   document.getElementById("linkedinT").href=document.getElementById("linkedin").value;
   //profilephoto//
   let file=document.getElementById("photo").files[0];
   let reader=new FileReader();
   reader.readAsDataURL(file);
   reader.onload=function(){
    document.getElementById("photoT").src=reader.result;
   };
};

function validateForm() {
    let isValid = true; // Flag to check if the form is valid

    // First Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        alert("First name is required.");
        isValid = false;
    }

    // Last Name
    const lastName = document.getElementById("name1").value.trim();
    if (lastName === "") {
        alert("Last name is required.");
        isValid = false;
    }

    // Contact Number
    const contact = document.getElementById("contact").value.trim();
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        isValid = false;
    }

    // Address
    const address = document.getElementById("Address").value.trim();
    if (address === "") {
        alert("Address is required.");
        isValid = false;
    }

    // Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    // Photo
    const photo = document.getElementById("photo").files[0];
    if (!photo) {
        alert("Please upload a photo.");
        isValid = false;
    }

    // Country
    const country = document.getElementById("country").value.trim();
    if (country === "") {
        alert("Country is required.");
        isValid = false;
    }

    // Education
    const education = document.getElementById("education").value.trim();
    if (education === "") {
        alert("Education information is required.");
        isValid = false;
    }

    // Hobbies
    const hobbies = document.getElementById("hobbies").value.trim();
    if (hobbies === "") {
        alert("Please enter your hobbies.");
        isValid = false;
    }

    // Skills
    const skills = document.getElementById("skills").value.trim();
    if (skills === "") {
        alert("Skills are required.");
        isValid = false;
    }

    // Work Experience
    const workExperience = document.getElementById("workExpirence").value.trim();
    if (workExperience === "") {
        alert("Work experience is required.");
        isValid = false;
    }

    // LinkedIn ID
    const linkedin = document.getElementById("linkedin").value.trim();
    if (linkedin === "") {
        alert("LinkedIn ID is required.");
        isValid = false;
    }

    // Reference
    const reference = document.getElementById("refrence").value.trim();
    if (reference === "") {
        alert("Reference link is required.");
        isValid = false;
    }

    // If the form is valid, submit it; otherwise, prevent submission
    if (isValid) {
        alert("Form is valid and ready to submit!");
        return true;
    } else {
        alert("Please correct the errors in the form.");
        return false;
    }
}