(function app() {

    let nb;

    //to identify elements of the DOM
    function identifyElements() {
        let btn = document.getElementById("#btn");
        let res = document.getElementById("#res");
        let wrap = document.getElementById("wrap");
        clickableElements = wrap.querySelectorAll("*");
        console.log(clickableElements);
    }

    //to count number of dom elements
    function countDomElements() {
        nb = wrap.getElementsByTagName("*").length;
        displayNbInRes();
    }

    //to display nb variable in the #res elment
    function displayNbInRes() {
        res.textContent = nb;
    }

    //to associate click on #btn to the function countDomElements
    function associateBtnToCount() {
        btn.addEventListener("click", countDomElements);
    }

    //to display prompt
    function displayPrompt(e) {
        let elementToBeRemoved = e.srcElement;
        console.log(e.srcElement.outerHTML);
        var result = prompt("saisissez y afin de supprimer l'élément " + elementToBeRemoved.outerHTML);
        if (result === "y") {
            console.log("y");
            elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
        } else {
            console.log("n");
        }
    }

    //to associate click on elements to a prompt display
    function associateElementsToPrompt() {
        for (let i = 0; i<clickableElements.length; i++) {
            if (clickableElements[i].childElementCount === 0) {
                clickableElements[i].addEventListener("click", displayPrompt);
            }
        }
    }

    window.addEventListener("DOMContentLoaded", function () {
        identifyElements();
        associateBtnToCount();
        associateElementsToPrompt();
    })
})();
