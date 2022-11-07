const ROW_IN_EDIT = "inEdit"
const DELETE_BTN_CLASS = "deleteBtn"
const EDIT_BTN_CLASS = "editBtn"
const INVALID_CLASS = "invalid-input"

const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputEmail = document.querySelector("#email");
const contactsList = document.querySelector("#contactsList");
const saveContactBtn = document.querySelector("#saveContact");

const BASE_USERS_URL = "https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/";

let editableRow = undefined;
const inputs = [inputName, inputSurname, inputEmail];

const resetValidation = (inputs) => inputs.forEach((input) => input.classList.remove(INVALID_CLASS));

const resetValidationOnInput = ({target}) => target.classList.contains(INVALID_CLASS) ? resetValidation([target]) : null;

const validateInputsValue = () => {
    resetValidation(inputs);

    let isInputsValid = true;

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.classList.add(INVALID_CLASS);
            isInputsValid = false;
        }
    })

    return isInputsValid
}

const resetValues = () => inputs.forEach((input) => input.value = "");

const getValues = () => ({
    name: inputName.value,
    surname: inputSurname.value,
    email: inputEmail.value,
});

const onEditContact = (rowElement) => {
    resetValidation(inputs);

    inputName.value = rowElement.children[0].textContent;
    inputSurname.value = rowElement.children[1].textContent;
    inputEmail.value = rowElement.children[2].textContent;

    editableRow = rowElement;
    rowElement.classList.add(ROW_IN_EDIT)
}

const onDeleteContact = (rowElement) => {
    const contactId = rowElement.dataset.contactId;

    fetch(`${BASE_USERS_URL}${contactId}`, {method: "DELETE"}).then(() => {
        contactsList.removeChild(rowElement);
        editableRow = undefined;
    })
}


const getContactEl = (contact) => {
    const rowEl = document.createElement("tr");
    rowEl.dataset.contactId = contact.id;

    const nameTd = document.createElement("td");
    nameTd.textContent = contact.name;

    const surnameTd = document.createElement("td");
    surnameTd.textContent = contact.surname;

    const emailTd = document.createElement("td");
    emailTd.textContent = contact.email;

    const actionsTd = document.createElement("td");
    actionsTd.innerHTML = `<div class="btn-container">
<button class="${DELETE_BTN_CLASS}">Delete</button>
<button class="${EDIT_BTN_CLASS}">Edit</button>
</div>`;

    const deleteBtn = actionsTd.querySelector(`.${DELETE_BTN_CLASS}`)
    deleteBtn.addEventListener("click", () => onDeleteContact(rowEl));

    const editBtn = actionsTd.querySelector(`.${EDIT_BTN_CLASS}`)
    editBtn.addEventListener("click", () => onEditContact(rowEl))

    rowEl.append(nameTd);
    rowEl.append(surnameTd);
    rowEl.append(emailTd);
    rowEl.append(actionsTd);

    return rowEl;
}

const onSave = () => {
    if (!(validateInputsValue())) {
        return;
    }

    const url = !editableRow ? BASE_USERS_URL : BASE_USERS_URL + editableRow.dataset.contactId;
    const method = !editableRow ? "POST" : "PUT"

    fetch(url, {
        method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(getValues())
    })
        .then((response) => response.json())
        .then((contact) => {
            const contactEl = getContactEl(contact);

            if (!editableRow) {
                contactsList.append(contactEl);
            } else {
                editableRow.parentNode.replaceChild(contactEl, editableRow);
                editableRow = undefined;
            }
        })

    resetValues();
}

inputs.forEach((input) => input.addEventListener("input", resetValidationOnInput));

saveContactBtn.addEventListener("click", onSave);

const initRender = () => {
    fetch(BASE_USERS_URL)
        .then((response) => response.json())
        .then((list) => list.forEach((el) => {
                const contactEl = getContactEl(el);
                contactsList.append(contactEl);
            })
        )
}

initRender();
