// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Submit the form via JavaScript
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
    .then(response => {
        // Check if the response is successful (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        window.location.href = 'thankyou.html'; // Redirect to thank you page
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function search() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var selectedTopic = document.querySelector('input[name="topic"]:checked');

  if (selectedTopic) {
      var topicValue = selectedTopic.value;
      window.location.href = topicValue + '_blog.html';
  } else {
      alert('Please select a topic.');
  }
}

function toggleTopics() {
  var topicOptions = document.getElementById('topicOptions');
  if (topicOptions.style.display === 'block') {
      topicOptions.style.display = 'none';
  } else {
      topicOptions.style.display = 'block';
  }
}