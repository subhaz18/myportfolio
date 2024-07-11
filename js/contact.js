const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Form validation
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const errors = {};

  // Check if all required fields are filled
  if (!object.name) {
    errors.name = 'Please enter your name';
  }
  if (!object.email) {
    errors.email = 'Please enter your email';
  }
  if (!object.message) {
    errors.message = 'Please enter a message';
  }

  // Check if email is valid
  if (object.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(object.email)) {
    errors.email = 'Please enter a valid email';
  }

  // If there are errors, display them and return
  if (Object.keys(errors).length > 0) {
    result.innerHTML = '';
    for (const error in errors) {
      result.innerHTML += `<p>${errors[error]}</p>`;
    }
    return;
  }

  // If no errors, proceed with form submission
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      result.innerHTML = json.message;
    } else {
      console.log(response);
      result.innerHTML = json.message;
    }
  })
  .catch(error => {
    console.log(error);
    result.innerHTML = "Something went wrong!";
  })
  .then(function() {
    form.reset();
    setTimeout(() => {
      result.style.display = "none";
    }, 3000);
  });
});