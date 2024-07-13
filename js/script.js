function runTypingEffect() {
  const text = "I am Sana Tameem";
  const element = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, element, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(()=>{
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect)