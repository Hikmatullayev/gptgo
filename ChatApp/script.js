const btn = document.querySelector('.user_input__button');
const answers = document.querySelector('.answers');


function getAnswer() {
    let input = document.querySelector('.user_input__input').value;
    if (input !== '') {
        answers.innerHTML += `USER: ${input}\n`;
        document.querySelector('.user_input__input').value = '';
        
        fetch("https://api.betterapi.net/youdotcom/chat?message=" + input + "&key=IOOQTBPKAU86E3PDA6NME959YOJFC5OZNN0")
        .then(response => response.json())
        .then(data => {
            answers.innerHTML += `BOT: `
            
            for (let i = 0; i < data.message.length; i++) {
                answers.innerHTML += `${data.message[i]}`
            }
            
            answers.innerHTML += `\n`
        })
    }
}

btn.onclick = () => getAnswer();

document.querySelector('.user_input__input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getAnswer();
    }
})