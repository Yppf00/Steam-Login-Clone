let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.getElementById('login');


login.addEventListener('click', () => {
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://6224cc206c0e39662047071b.mockapi.io/user_data', true);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(JSON.stringify({
      username: username.value,
      password: password.value
   }));
   xhr.onload = () => {
      fetch('https://6224cc206c0e39662047071b.mockapi.io/user_data')
         .then(response => response.json())
         .then(data => {
            console.log(data);
         }
         );
   }
})