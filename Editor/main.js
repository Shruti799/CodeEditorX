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

document.addEventListener('DOMContentLoaded', function () {
  const htmlTextarea = document.getElementById('html-code');
  const cssTextarea = document.getElementById('css-code');
  const jsTextarea = document.getElementById('js-code');
  const htmlAutocomplete = document.getElementById('html-autocomplete');
  const cssAutocomplete = document.getElementById('css-autocomplete');
  const jsAutocomplete = document.getElementById('js-autocomplete');

  let htmlSuggestions = [];
  let cssSuggestions = [];
  let jsSuggestions = [];

  htmlTextarea.addEventListener('input', function () {
      const currentText = htmlTextarea.value.toLowerCase();
      htmlSuggestions = htmlTags.filter(tag => tag.startsWith(currentText));

      showSuggestions(htmlAutocomplete, htmlSuggestions);
  });

  cssTextarea.addEventListener('input', function () {
      const currentText = cssTextarea.value.toLowerCase();
      cssSuggestions = cssProperties.filter(property => property.startsWith(currentText));

      showSuggestions(cssAutocomplete, cssSuggestions);
  });

  jsTextarea.addEventListener('input', function () {
      const currentText = jsTextarea.value.toLowerCase();
      jsSuggestions = jsKeywords.filter(keyword => keyword.startsWith(currentText));

      showSuggestions(jsAutocomplete, jsSuggestions);
  });

  htmlTextarea.addEventListener('focus', function () {
      showSuggestions(htmlAutocomplete, htmlSuggestions);
  });

  cssTextarea.addEventListener('focus', function () {
      showSuggestions(cssAutocomplete, cssSuggestions);
  });

  jsTextarea.addEventListener('focus', function () {
      showSuggestions(jsAutocomplete, jsSuggestions);
  });

  htmlAutocomplete.addEventListener('click', function (event) {
      if (event.target.tagName === 'DIV') {
          insertSuggestion(htmlTextarea, event.target.textContent);
      }
  });

  cssAutocomplete.addEventListener('click', function (event) {
      if (event.target.tagName === 'DIV') {
          insertSuggestion(cssTextarea, event.target.textContent);
      }
  });

  jsAutocomplete.addEventListener('click', function (event) {
      if (event.target.tagName === 'DIV') {
          insertSuggestion(jsTextarea, event.target.textContent);
      }
  });

  document.addEventListener('click', function (event) {
      if (event.target !== htmlAutocomplete && !htmlAutocomplete.contains(event.target)) {
          hideSuggestions(htmlAutocomplete);
      }

      if (event.target !== cssAutocomplete && !cssAutocomplete.contains(event.target)) {
          hideSuggestions(cssAutocomplete);
      }

      if (event.target !== jsAutocomplete && !jsAutocomplete.contains(event.target)) {
          hideSuggestions(jsAutocomplete);
      }
  });
});

const htmlTags = [
  '<html></html>', '<h1></h1>', '<h2></h2>', '<h3></h3>', '<h4></h4>', '<h5></h5>', '<h6></h6>', '<p></p>', '<h1></h1>', '<h1></h1>', '<textarea></textarea>','<label></label>','<i></i>','<legend></legend>','<frame></frame>','<head></head>', '<body></body>', '<div></div>', 'span', '<p></p>', '<a></a>', '<img>', '<ul></ul>', '<li></li>', '<ol></ol>', '<table></table>', '<tr></tr>', '<td></td>', '<th></th>','class=" "','href=" "','src=" "','<input>','type=" "','text','select','radio','<button></button>','placeholder=" "',

];

const cssProperties = [
  'color:', 'font-size:', 'margin:', 'padding:', 'background-color:', 'border:', 'display:', 'width:', 'height:','font-style:','transition:','top:','bottom:','left:','right:',

];

const jsKeywords = [
  'var', 'let', 'const', 'function', 'document.getElementById()','document.createElement()','if', 'else', 'for', 'while', 'switch', 'case', 'break', 'return',
  
];

function showSuggestions(autocompleteContainer, suggestions) {
  autocompleteContainer.innerHTML = '';

  suggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.textContent = suggestion;
      suggestionElement.addEventListener('click', function () {
          insertSuggestion(autocompleteContainer.previousElementSibling, suggestion);
      });
      autocompleteContainer.appendChild(suggestionElement);
  });

  // Showing the suggestions container
  autocompleteContainer.style.display = suggestions.length > 0 ? 'block' : 'none';
}

function insertSuggestion(textarea, suggestion) {
  const currentText = textarea.value;
  const cursorPos = textarea.selectionStart;

  //const prefix = currentText.substring(0, cursorPos);
  const suffix = currentText.substring(textarea.selectionEnd);

  const newText = suggestion + suffix;

  textarea.value = newText;
  textarea.focus(); // Setting focus back to the textarea

  hideSuggestions(textarea.nextElementSibling);
}

function hideSuggestions(autocompleteContainer) {
  // Hiding the suggestions container
  autocompleteContainer.style.display = 'none';
}
