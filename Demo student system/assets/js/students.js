let proList = document.querySelector('#pro-list');
let addBtn = document.querySelector('#addPro');
addBtn.addEventListener('click', addProfile);

function addProfile(e) {
    let profileName = document.querySelector('#profileName').value;
    let profileComment = document.querySelector('#profileComment').value;
    let profileData = document.querySelector('#profileData').value;
    let newProfile = yeniProfile(profileName, profileComment, profileData);


    proList.appendChild(newProfile);
    document.forms['add'].reset();

    sayGoster();

}

function silmek(args) {
    args.preventDefault();
    let li = args.currentTarget.parentElement;

    proList.removeChild(li);

    sayGoster();
}

function yeniProfile(profileName, profileComment, profileData) {


    let profileLi = document.createElement('li');
    profileLi.classList.add('list-group-item');

    let h3 = document.createElement('h3');
    h3.textContent = profileName;

    let p = document.createElement('p');
    p.textContent = profileComment;

    let div = document.createElement('div');
    div.textContent = profileData

    profileLi.appendChild(h3);
    profileLi.appendChild(p);
    profileLi.appendChild(div);

    let removeBtn = document.createElement('a');
    removeBtn.setAttribute('href', '#');
    removeBtn.classList.add('text-danger');

    removeBtn.addEventListener('click', silmek);


    let icon = document.createElement('i');
    icon.classList.add('fa-trash-alt', 'far')
    removeBtn.appendChild(icon);
    profileLi.appendChild(removeBtn);
    return profileLi;

}

function sayGoster() {
    let say = proList.childElementCount;

    document.querySelector('#pro-footer > .status').textContent = `Şərh sayı : ${say}`;
}