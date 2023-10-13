function toggleSignUpForm() {
    const signUpForm = document.getElementById('signup-form');
    if (signUpForm.style.display === 'none' || signUpForm.style.display === '') {
        signUpForm.style.display = 'block';
    } else {
        signUpForm.style.display = 'none';
    }
}

function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode +"<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}

function clearPlaceholder(textarea) {
    if (textarea.value === textarea.defaultValue) {
      textarea.value = '';
    }
  }
  
function restorePlaceholder(textarea) {
  if (textarea.value === '') {
    textarea.value = textarea.defaultValue;
  }
}

