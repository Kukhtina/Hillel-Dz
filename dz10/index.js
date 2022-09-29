const ROW_IN_EDIT = "inEdit"
const DELETE_BTN_CLASS = "deleteBtn"
const EDIT_BTN_CLASS = "editBtn"
const INVALID_CLASS = "invalid-input"

const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPhone = document.querySelector("#phone");
const contactsList = document.querySelector("#contactsList");
const saveContactBtn = document.querySelector("#saveContact");

let editedRow = undefined;
const inputs = [inputName, inputSurname, inputPhone];

const resetValidation = (inputs) => {
    inputs.forEach((input) => input.classList.remove(INVALID_CLASS))
}

const resetValidationOnInput = ({target}) => {
    if (target.classList.contains(INVALID_CLASS)) {
        resetValidation([target])
    }
}

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

const resetValues = () => {
    inputs.forEach((input) => input.value = "")
}

const getValues = () => ({
    name: inputName.value,
    surname: inputSurname.value,
    phone: inputPhone.value,
});

const onEditContact = (rowElement) => {
    resetValidation(inputs);

    inputName.value = rowElement.children[0].textContent;
    inputSurname.value = rowElement.children[1].textContent;
    inputPhone.value = rowElement.children[2].textContent;

    editedRow = rowElement;
    rowElement.classList.add(ROW_IN_EDIT)
}

const getContactEl = (contact) => {
    const rowEl = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = contact.name;

    const surnameTd = document.createElement("td");
    surnameTd.textContent = contact.surname;

    const phoneTd = document.createElement("td");
    phoneTd.textContent = contact.phone;

    const actionsTd = document.createElement("td");
    actionsTd.innerHTML = `<div class="btn-container">
<button class="${DELETE_BTN_CLASS}">Delete</button>
<button class="${EDIT_BTN_CLASS}">Edit</button>
</div>`;

    const removeBtn = actionsTd.querySelector(`.${DELETE_BTN_CLASS}`)
    removeBtn.addEventListener("click", () => {
        contactsList.removeChild(rowEl);
        editedRow = undefined;
    })

    const editBtn = actionsTd.querySelector(`.${EDIT_BTN_CLASS}`)
    editBtn.addEventListener("click", () => onEditContact(rowEl))

    rowEl.append(nameTd);
    rowEl.append(surnameTd);
    rowEl.append(phoneTd);
    rowEl.append(actionsTd);

    return rowEl;
}

const saveContact = (contactValues) => {
    const contactEl = getContactEl(contactValues);

    if (editedRow) {
        editedRow.innerHTML = contactEl.innerHTML;
        editedRow.classList.remove(ROW_IN_EDIT);
        editedRow = undefined;
    } else {
        contactsList.append(contactEl);
    }
}

const onSave = () => {
    if (!(validateInputsValue())) {
        return;
    }

    const contactValue = getValues();
    saveContact(contactValue);

    resetValues();
}

inputs.forEach((input) => input.addEventListener("input", resetValidationOnInput));

saveContactBtn.addEventListener("click", onSave);
