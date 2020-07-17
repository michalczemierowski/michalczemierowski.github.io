function Clicked(id, timeout)
{
    let contact = document.getElementById(id);
    let style = contact.style;
    contact.style = "background-color: var(--dark); color: var(--light)";
    contact.style.fontSize = "20px";
    setTimeout(function () {
            contact.style = style;
    }, timeout);
}