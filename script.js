const breedList = ["Calico", "Tabby", "Orange", "Bengal", "Bombay", "Burmese", "Persian", "Ragdoll", "Siamese", "Sphynx", "Russian", "British", "American", "Scottish", "Norwegian", "Turkish", "Himalayan", "Ginger"];

const relatedWords = ["Chicken", "Tenders", "Jack", "Back", "Hack", "Red", "Blue", "Orange", "Green", "Gator", "Violet", "Swamp", "Albert", "Alberta", "Chmop", "Offensive", "Defensive", "Fries"];

let locations = ["Gainesville", "Orlando", "Roschester", "Charles", "Jacksonville", "Miami", "Tampa", "Charlotte", "Dallas", "Tallahassee", "Ocala", "Sarasota", "Naples", "Melbourne", "Reitz", "Marston", "Turlington", "Broward", "Smathers", "Shands", "Norman", "Anderson", "Malachowsky", "Newell", "Weil","Carleton", "Little", "Hume", "Rawlings"];

const numPasswords = 10;

const generatePasswordsButton = document.getElementById("generateButton");
generatePasswordsButton.addEventListener("click", generatePasswords);

const passwordContainer = document.getElementById("passwords");

function generatePasswords() {
  passwordContainer.innerHTML = "";
  for (let i = 0; i < numPasswords; i++) {
    const [breed1, breed2] = pickRandomElements(breedList, 2);
    const relatedWord = pickRandomElement(relatedWords);
    const location = pickRandomElement(locations);
    const password = `${breed1}-${relatedWord}-${location}-${padNumber(getRandomInt(0,99))}`;
    const passwordElement = document.createElement("div");
    passwordElement.onclick = (evt) => {
      copyToClipboard(password);
    }
    passwordElement.classList.add("password");
    passwordElement.title = "Click to copy password to clipboard!";
    passwordElement.textContent = password;
    passwordContainer.appendChild(passwordElement);
  }
}

function pickRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickRandomElements(arr, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(pickRandomElement(arr));
  }
  return result;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

function showCopyNotification() {
      const notification = document.getElementById("copyNotification");
      notification.classList.add("show");

      // Hide the notification after 2 seconds
      setTimeout(() => {
          notification.classList.remove("show");
      }, 800);
  }

function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  showCopyNotification();
  document.body.removeChild(el);
}

generatePasswords()
