/* jslint plusplus: true, evil:true */
/* Global alert; console; prompt */

let input = document.querySelector(".input").firstElementChild,
    counterTask = document.querySelector(".taske_count span"),
    containerOfTask = document.querySelector(".con_msg_task"),
    counterFn = document.querySelector(".taske_compalted span");

// this is function for do onfocus and onblur for input
function fxOnFocus() {

    "use strcit";
    input.setAttribute("data_store", input.getAttribute("placeholder"))
    input.setAttribute("placeholder", "")

}

document.querySelector(".sweet-alert-lan span").onclick = function () {

    "use strict";

    document.querySelector(".sweet-alert-lan").classList.add("hidden");

    document.querySelector(".con_input_add .input").classList.remove("no-clicking");

    fxOnload();

}

function fxOnBlur() {

    "use strcit";
    input.setAttribute("placeholder", input.getAttribute("data_store"))

}

function fxOnload() {

    "use strict";

    input.focus()

}


// create message of task
function fxMsgTask() {

    "use strcit";
    // create parrent ellement for message taske
    let parrentEll = document.createElement("div");

    // create the childs of parrent ellement
    let ChildOfPareent = document.createElement("span");

    let ChildTextOfPareent = document.createTextNode("No Taske Show");

    ChildOfPareent.appendChild(ChildTextOfPareent)

    parrentEll.appendChild(ChildOfPareent);


    // create className For parrentEllement
    parrentEll.setAttribute("class", "msg");

    // append parrent ellement in its palce at in html
    document.querySelector(".con_msg_task").appendChild(parrentEll);


}

window.onload = fxMsgTask(), fxOnload();

// create function for the task 
function fxCreating() {

    "use strict";

    // create parrent ellement
    let myParrentEll = document.createElement("div");

    // create class for parrent ellement
    myParrentEll.setAttribute("class", "task_button");

    // create the childs of parrent ellement
    // first child
    let fstChildOfPareent = document.createElement("span");

    fstChildOfPareent.setAttribute("class", "taske");

    let textOfFstChild = document.createTextNode(input.value);

    fstChildOfPareent.appendChild(textOfFstChild)

    myParrentEll.appendChild(fstChildOfPareent);

    // second child
    let sndChildOfPareent = document.createElement("span");

    sndChildOfPareent.setAttribute("class", "delete");

    let textOfSndChild = document.createTextNode("delete");

    sndChildOfPareent.appendChild(textOfSndChild)

    myParrentEll.appendChild(sndChildOfPareent);

    // append parrent ellement in its palce at in html
    document.querySelector(".con_msg_task").appendChild(myParrentEll);


}

document.querySelector(".con_input_add span").onclick = function () {

    "use strict";

    if (input.value === "") {

        document.querySelector(".sweet-alert-lan p").innerHTML = "the feild is empty you must type you'r task";

        document.querySelector(".sweet-alert-lan").classList.remove("hidden");

        document.querySelector(".con_input_add .input").classList.add("no-clicking");

        fxMsgTask();

    } else {

        fxCreating();

        fxOnload();

        input.value = "";

        countingTask();

        let childOfTask = Array.from(containerOfTask.children);

        if (document.querySelectorAll(".task_button").length >= 2) {

            document.querySelector(".taske_count_complated .delete_all").classList.add("hiddenAllTask");

            document.querySelector(".taske_count_complated .finshed_all").classList.add("hiddenAllFinshed");



            document.querySelector(".taske_count .delete_all").onclick = function () {

                "uses strict";

                childOfTask.forEach((task) => {

                    task.remove();

                    fxOnload();

                })

                fxMsgTask()

                document.querySelector(".taske_count_complated .finshed_all").classList.remove("hiddenAllFinshed");

                document.querySelector(".taske_count_complated .delete_all").classList.remove("hiddenAllTask");

            }


            document.querySelector(".taske_compalted .finshed_all").onclick = function () {

                "uses strict";

                childOfTask.forEach((task) => {

                    task.firstElementChild.classList.toggle("finshed");
                    if (task.firstElementChild.classList.contains("finshed")) {

                        document.querySelector(".finshed_all").innerHTML = "Clear Finshed All";

                    } else {

                        document.querySelector(".finshed_all").innerHTML = "finshed all";

                    }

                    fxOnload();

                })

            }

        }

    }


    if (document.body.contains(document.querySelector(".con_msg_task"))) {

        document.querySelector(".msg").remove();

    }


}

document.addEventListener("click", function (e) {

    "use strcit";

    if (e.target.classList.contains("delete")) {

        e.target.parentNode.remove();

        if (document.querySelector(".con_msg_task").childElementCount == 0) {

            fxMsgTask();

        }

    }

    if (e.target.classList.contains("taske")) {

        e.target.classList.toggle("finshed");

    }

    countingTask();

})

function countingTask() {

    "use strict";

    counterTask.innerHTML = document.querySelectorAll(".con_msg_task .task_button").length;

    counterFn.innerHTML = document.querySelectorAll(".con_msg_task .finshed").length;

}
