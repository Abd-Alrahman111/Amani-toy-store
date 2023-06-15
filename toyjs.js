 // Get the review form and its elements
 const reviewForm = document.querySelector('.form-review');
 const reviewBtn = document.querySelector('.btn-review');
 const cancelBtn = document.querySelector('.btn-cancel');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const ratingInput = document.querySelector('#rating');
 const reviewInput = document.querySelector('#review');
 
 // Add event listeners to the review button and cancel button
 reviewBtn.addEventListener('click', () => {
   reviewForm.style.display = 'block';
 
   // Scroll to the review form
   reviewForm.scrollIntoView({ behavior: 'smooth' });
 });
 
 cancelBtn.addEventListener('click', () => {
   reviewForm.style.display = 'none';
 });
 
 // Handle form submission
 reviewForm.addEventListener('submit', (e) => {
   e.preventDefault();
 
   // Get the form data
   const name = nameInput.value;
   const email = emailInput.value;
   const rating = ratingInput.value;
   const review = reviewInput.value;
 
   // TODO: Send the form data to a server using AJAX or fetch
 
   // Display a success message
   alert('Thank you for your review!');
 
   // Reset the form
   reviewForm.reset();
   reviewForm.style.display = 'none';
 });