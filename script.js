const URL = 'https://test-users-api.herokuapp.com/users/';
const container = document.querySelector('.container');
const form = document.querySelector('.form');
let users = [];

const labelName = document.createElement('label');
labelName.textContent = 'Name';
labelName.classList.add('labelName');

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.classList.add('inputName');

const labelAge = document.createElement('label');
labelAge.textContent = 'Age';
labelAge.classList.add('labelAge');

const inputAge = document.createElement('input');
inputAge.type = 'number';
inputAge.classList.add('inputAge');

const createBtn = document.createElement('button');
createBtn.type = 'submit';
createBtn.classList.add('create');
createBtn.textContent = 'Create Users';

const loadBtn = document.createElement('button');
loadBtn.type = 'button';
loadBtn.classList.add('load');
loadBtn.textContent = 'Load Users';

container.append(form);
form.append(labelName);
form.append(inputName);
form.append(labelAge);
form.append(inputAge);
form.append(createBtn);
form.append(loadBtn);

const getUsers = () => {
    return axios.get(URL).then(res => {
        return res.data;
        
    }).then (user => {
        return user.data;
      
    })
    .catch(err => {
        console.log('Couldnt find users', err);
        return [];
    })
}
console.log(axios.get(URL));

const renderUsers = (users) => {
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');

        const labelName = document.createElement('label');
        labelName.textContent = 'Name';
        labelName.classList.add('labelName');
        
        const inputNameCard = document.createElement('input');
        inputNameCard.type = 'text';
        inputNameCard.classList.add('inputNameCard');
        inputNameCard.value = `${user.name}`;
       
        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age';
        labelAge.classList.add('labelAge');

        const inputAgeCard = document.createElement('input');
        inputAgeCard.type = 'number';
        inputAgeCard.classList.add('inputAgeCard');
        inputAgeCard.value = `${user.age}`; 

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.textContent = 'X'
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', () => {deleteUsers(user.id, userItem)});

        const saveBtn = document.createElement('button');
        saveBtn.type = 'button';
        saveBtn.textContent = 'Save change'
        saveBtn.classList.add('saveBtn');
        saveBtn.addEventListener('click', () => {updateUsers(user.id)});

        container.append(userItem);
        userItem.append(labelName);
        userItem.append(inputNameCard);
        userItem.append(labelAge);
        userItem.append(inputAgeCard);
        userItem.append(saveBtn);
        userItem.append(deleteBtn);
    });
    }
const loadUsers = async () => {
        const users = await getUsers();
        renderUsers(users)
    }

const createUsers = () => {
    const ageValue = document.querySelector('.inputAge').value;
    const nameValue = document.querySelector('.inputName').value;
    if (ageValue !== '' && nameValue !=='' && ageValue >= 1) {

        axios.post(URL,{
           
                name:nameValue,
                age:ageValue
           
        }).then(res => {
            console.log('res:' + res);
            
        }).then(() => {
            const user = {
                name:nameValue,
                age:ageValue,
                
            };
            // users.push(user);
            renderUsers([user]);
        })
        .catch(err => {
            console.log('some err:' + err);
        });
    } else {
        alert('Введіть будь ласка дані в форму правильно!');
    }
}

const updateUsers = (userId) => {
    const ageValueCard = document.querySelector('.inputAgeCard').value;
    const nameValueCard = document.querySelector('.inputNameCard').value;
          axios.put(URL + userId,{
            name:nameValueCard,
            age:ageValueCard
          }).then(res => {
            console.log('res:' + res);
            
        }).catch(err => {
            console.log('some err:' + err);
        });;
       
}

const deleteUsers =  async (userId, item) => {
    try {
        const res = await axios.delete(URL + userId);
        item.remove();
    } catch (err) {
        console.log(`Can't delete a user`, err);   
    }
}

document.addEventListener('DOMContentLoaded', () => {
        loadBtn.addEventListener('click', loadUsers);
        createBtn.addEventListener('click',createUsers);
    });


