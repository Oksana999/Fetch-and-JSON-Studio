// TODO: add code here
window.addEventListener("load", function () {
    // let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {

        response.json().then(function (json) {

            const div = document.getElementById("container");
            json.sort(function (first, second) {
                return second.hoursInSpace - first.hoursInSpace;
            });

            for (let i = 0; i < json.length; i++) {
                div.innerHTML +=
                    `<div class="astronaut">
                       <div class="bio">
                          <h3>${json[i].firstName} ${json[i].lastName}</h3>
                          <ul>
                             <li>Hours in space: ${json[i].hoursInSpace}</li>
                             <li id="${i}">Active: ${json[i].active}</li>
                             <li>Skills: ${json[i].skills.join(', ')}</li>
                          </ul>
                       </div>
                       <img class="avatar" src="${json[i].picture}" height="150">
                    </div>`;
                if (json[i].active) {
                    document.getElementById(i).className = 'active';
                }

            }

            let htmlHeadingElement = document.createElement("h3");
            htmlHeadingElement.innerHTML = "Numbers of astronauts: " + json.length;
            document.body.appendChild(htmlHeadingElement);

        });
    });

});