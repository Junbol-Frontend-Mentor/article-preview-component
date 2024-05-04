let myButton = document.getElementById('shareButton');
let mainModal = document.getElementById('myModal');

myButton.addEventListener('click', (e) => {
  mainModal.style.opacity = '1';
  setTimeout(() => {
    mainModal.style.opacity = '0';
  }, 5000); //after 5sec the modal is gone
});
