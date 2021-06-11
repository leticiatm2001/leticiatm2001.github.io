document.addEventListener('DOMContentLoaded', function() {

    ul = document.querySelector('ul')

    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        li = document.createElement('li')
        li.innerHTML = text.value
        ul.appendChild(li)
        text.value = ""

        event.preventDefault()
    })

})