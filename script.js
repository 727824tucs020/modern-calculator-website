const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let expression = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if(value === "AC")
        {
            expression = "";
            display.value = "";
        }

        else if(value === "DEL")
        {
            expression = expression.slice(0,-1);

            display.value = expression;
        }
        else if(value === "=")
        {
            try
            {
                expression = eval(expression).toString();

                display.value = expression;
            }

            catch(error)
            {
                display.value = "Error";

                expression = "";
            }
        }
        else
        {
            expression += value;

            display.value = expression;
        }
    });
});
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    )
    {
        expression += key;

        display.value = expression;
    }

    else if(key === "Enter")
    {
        try
        {
            expression = eval(expression).toString();

            display.value = expression;
        }
        catch
        {
            display.value = "Error";

            expression = "";
        }
    }
    else if(key === "Backspace")
    {
        expression = expression.slice(0,-1);

        display.value = expression;
    }
    else if(key === "Escape")
    {
        expression = "";

        display.value = "";
    }

});