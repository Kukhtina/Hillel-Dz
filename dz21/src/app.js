import './style.css';

const messages = document.querySelector("#messages");
const inputName = document.querySelector(".input-name");
const inputMsg = document.querySelector(".input-msg");
const sentBtn = document.querySelector(".sent-msg");


const wssUrl = "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";
const socket = new WebSocket(wssUrl);

socket.onopen = () => console.log("wss connection opened");
socket.onclose = () => console.log("wss connection closed");
socket.onerror = () => console.log("error");


const resetInput = () => {
    inputMsg.value = "";
    inputName.value = "";
}

const sendMsg = () => {
    socket.send(
        JSON.stringify({
            type: 'message',
            payload: {
                name: inputName.value,
                message: inputMsg.value,
                now: new Date(),
            },
        })
    );
    resetInput();
}

sentBtn.addEventListener("click", sendMsg);

const formatDataTime = (dateString) => {
    const date = new Date(dateString);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return `${day}.${month}.${year}/${time}`;
}

const showMsg = (payload) => {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("msg-content");
    messages.append(messageContainer);

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");
    nameContainer.append(payload.name + ": ");
    messageContainer.append(nameContainer);

    const dataNow = document.createElement("span")
    dataNow.classList.add("data-time");
    dataNow.append(formatDataTime(payload.now) + " ");
    nameContainer.prepend(dataNow);

    const msgTextContainer = document.createElement("div");
    msgTextContainer.classList.add("msg-container");
    msgTextContainer.append(payload.message);
    messageContainer.append(msgTextContainer);
}


socket.onmessage = (event) => {
    const parsedEventData = JSON.parse(event.data);

    if (parsedEventData.payload) {
        showMsg(parsedEventData.payload);
    }
};
