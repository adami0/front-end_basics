(function app() {

    let nb, res, wrap, btn;

    //to identify elements of the DOM
    function identifyElements() {
        wrap = document.getElementById("wrap");
    }

    //to count number of dom elements
    function countDomElements() {
        nb = wrap.getElementsByTagName("*").length;
        displayNbInRes();
    }

    //to display nb variable in the #res elment
    function displayNbInRes() {
        res = document.getElementById("res");
        res.textContent = nb;
    }

    //to associate click on #btn to the function countDomElements
    function associateBtnToCount() {
        btn = document.getElementById("btn");
        btn.addEventListener("click", countDomElements);
    }

    //to display prompt
    function displayPrompt(e) {
        e.cancelBubble = true;
        let elementToBeRemoved = e.srcElement;
        console.log(e);
        let result = prompt("saisissez y afin de supprimer l'élément " + elementToBeRemoved.outerHTML);
        if (result === "y") {
            console.log("y");
            elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
            associateElementsToPrompt();
        } else {
            console.log("n");
        }
    }


    //to associate click on elements to a prompt display
    function associateElementsToPrompt() {
        let clickableElements = wrap.getElementsByTagName("*");
        console.log(clickableElements);
        for (let i = 0; i<clickableElements.length-1; i++) {
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
