document.addEventListener('DOMContentLoaded', function (){
    const autoWriteCard = document.getElementById('autoWriteCard');
    const autoWriteContent = document.getElementById('autoWriteContent');
    const textToWrite = '<div class="codeditor"></div>';
    autoWriteContent.textContent = '';
    function autoWriteText(text, index = 0) {
        if (index < text.length) {
            autoWriteContent.textContent += text.charAt(index);
            index++;
            setTimeout(() => autoWriteText(text, index), 100);
        }
    }
    autoWriteText(textToWrite);
   });

   document.addEventListener('DOMContentLoaded', function (){
    const autoWriiteCard = document.getElementById('autoWriiteCard');
    const autoWriiteContent = document.getElementById('autoWriiteContent');
    const textToWrite = 'font-size: 13px; color: orange;';
    autoWriiteContent.textContent = '';
    function autoWriiteText(text, index = 0) {
        if (index < text.length) {
            autoWriiteContent.textContent += text.charAt(index);
            index++;
            setTimeout(() => autoWriiteText(text, index), 100);
        }
    }
    autoWriiteText(textToWrite);
   });

   document.addEventListener('DOMContentLoaded', function (){
    const autoWriiiteCard = document.getElementById('autoWriiiteCard');
    const autoWriiiteContent = document.getElementById('autoWriiiteContent');
    const textToWrite = 'var colors; function animate() {};';
    autoWriiiteContent.textContent = '';
    function autoWriiiteText(text, index = 0) {
        if (index < text.length) {
            autoWriiiteContent.textContent += text.charAt(index);
            index++;
            setTimeout(() => autoWriiiteText(text, index), 100);
        }
    }
    autoWriiiteText(textToWrite);
   });
