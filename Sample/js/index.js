const foodList = document.querySelector('.foods');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div>Logged in as ${user.email}</div>
      <div>${doc.data().bio}</div>
      `;
      accountDetails.innerHTML = html;
    })
    
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // hide account info
    accountDetails.innerHTML = '';
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

//setup foods
const setupFoods = (data) => {

  if (data.length) {
    let cross = document.createElement('div');
    let html = '';
    data.forEach(doc => {
      const food = doc.data();
      cross.textContent = 'x';
      const li = `
        <li>
          <div class="collapsible-header blue-grey lighten-4">${food.title}</div>
          <div class="collapsible-body deep-orange lighten-4">${food.content}</div>
          <div class="collapsible-body deep-orange lighten-4">${food.address}</div>
        </li>
      `;
      html += li
      
    });
    
    foodList.innerHTML = html;
  } else {
    foodList.innerHTML = '<h5 class="deep-orange-text">Login or Sign up to reserve foods</h5>'
  }

}



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });