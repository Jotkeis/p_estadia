window.onload = () => {
    const spinner = $("#spinner-loading")
    spinner.css("opacity", "0.0")
    spinner.css("transition", "3s ease")
    setTimeout(() => {
        spinner.remove()
    }, 1000);
}