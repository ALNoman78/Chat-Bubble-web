document.getElementById('send-btn').addEventListener('click', function(){
    const inputField = document.getElementById('text-field')
    const newElement = inputField.value;
    // step - 02
    const chatBox = document.getElementById('chat');
    const newBox = document.createElement('div')
    newBox.innerText = newElement;
    newBox.classList.add("chat-bubble")
    newBox.style.margin = "8px"
    chatBox.append(newBox)
    inputField.value = ""
})