
let display = document.getElementById("displayer")
let buttons = Array.from(document.getElementsByTagName("button"))

buttons.map(button => {
    button.addEventListener("click", (e) => {

        switch (e.target.value) {

            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);

                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'delete':
                if (display.innerText) display.innerText = display.innerText.slice(0, -1);

                break;
            default:
                display.innerText += e.target.value;
                break;
        }

    })
})
