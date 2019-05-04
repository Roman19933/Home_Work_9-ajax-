//const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
// promise.then((res) => {
//     res.json().then(data => {
//         console.log('data: ', data);
//     })
// }).catch ((err) => {
//     console.log('some error', err);
// })
// promise.then((res) => {
//     console.log('res:', res);
// }).catch((err) => {
//     console.log('some error', err);
// }).finally(() => {//виконується завжди, незважаючи на те, чи сталася помилка, чи ні
//     console.log('finally')
// });

// const ownPromise = new Promise((resolve, reject) =>{

// });
// const API = 'https://jsonplaceholder.typicode.com/';
// let users = [];
// const getUsers = () => {
//     return fetch(API + 'users').then(res => {
//         return res.json();
//     }).catch(err => {
//         console.log('not', err);
//     })
// };
// const deleteUsers = async (userId,userElement) => {
//     try {
//         const res = await fetch(API + 'users/' + userId, {method: 'DELETE'});
//         userElement.remove();
//         console.log('res:', res);
//     } catch(err) {
//         console.log('not', err);
//     }
// }

// const renderUsers = (users) => {
//     const container = document.querySelector('.users');
//     users.forEach(item => {
//         const userElement = document.createElement('div');
//         userElement.classList.add('user');
//         userElement.innerHTML = `
//         <h4>${item.name}</h4>
//         <h5>${item.email}</h5>`;
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent='Remove Users';
//         removeBtn.addEventListener('click', () => {
//             deleteUsers(item.id,userElement);
//         });
//         userElement.append(removeBtn);
//         container.append(userElement);
        
//     });
// }
// const loadUsers = async () => {
//     const users = await getUsers();
//     renderUsers(users)
// }
// const createUsers = () => {
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//    fetch(API + 'users', {
//         method: 'POST',
//         body:JSON.stringify({name:name, email:email})
//     }).then(res => {
//         return res.json();
//     }).then(data => {
//         const user = {
//             name,
//             email,
//             id:data.id
//         };
//         renderUsers([user]);
//         console.log('user',user);
//     })
//     .catch(err => {
//         console.log('notcreate', err);
//     })
// }
// const loadBtn = document.querySelector('.load-users');
// loadBtn.addEventListener('click', loadUsers);
// const CraeteUsersBtn = document.querySelector('.create-users');
// CraeteUsersBtn.addEventListener('click', createUsers);