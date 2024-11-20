let users=[]
let usersContainer=document.getElementById('userscontainer');
let alert=document.getElementById("alert")
function renderUsers(){
    usersContainer.innerHTML=""
    users.forEach((user)=>{
        let div = document.createElement('div');
        let name=document.createElement('p');
        let email=document.createElement('p');
        div.classList.add('user');
        name.innerText=user.name;
        email.innerText=user.email;
        usersContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
});
}
hidealert=()=>{
    setTimeout(()=>{
        alert.classList.remove("success","danger");
    },2000)
}
function doesuserexist(email){
    let user=users.filter((user)=>{
        return user.email == email;
    })
    return user.length > 0 ? true : false;
}
function adduser(){
    let name=document.getElementById('name')
    let email=document.getElementById('email')
    let user={
        name:name.value,
        email:email.value
    }
    let userexist= doesuserexist(email.value);
    if (userexist == false) {
        users.push(user);
        alert.classList.add("success")
        alert.innerText="user added successfully"
        hidealert()
    }
    else{
        alert.classList.add("danger")
        alert.innerText="Email already exist"
        hidealert()
    }
    renderUsers()
}