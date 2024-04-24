const fetchUsersBtn = document.getElementById('fetchUsersBtn');
const usersContainer = document.getElementById('usersContainer');

fetchUsersBtn.addEventListener('click', () => {
    fetch('https://reqres.in/api/users?page=2/')
        .then(response => response.json())
        .then(data => {
            usersContainer.innerHTML = '';
            data.data.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('userCard');
                userCard.innerHTML = `
                    <img src="${user.avatar}" alt="Avatar" class="userAvatar">
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>Email: ${user.email}</p>
                `;
                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
