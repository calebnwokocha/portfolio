function home() {
    var homeButton = document.getElementById("home");
    
    if (homeButton.onclick == true) {
        document.getElementsByClassName("row").innerHTML = '<div class="left-side">' +
        '<p>Hello,</p><br><div><img src="me.jpg" alt="image of me" width="200px"></div>' +
        '<p>I am 23 years old, an undergraduate student, and I like working with web and mobile software technologies. ' + 
        'Looking for Human Computer Interface Developer work where I would gain industry experience in web or mobile software development ' + 
        'while earning money to pay my tuition.</p><br><h3>Research Interests</h3><p>Modern technologies for web software development.' +
        '</p><p>Methodologies of Software Engineering.</p><p>Machine creativity in Artificial Intelligence.</p><br><h3>Education</h3>' +
        '<p>Bachelor of Science in Applied Computer Science.</p><p>University of Winnipeg - current student.</p></div><div class="main">' +
        '<h2>Material UI</h2><h5>Title description, Dec 7, 2017</h5><div class="fakeimg2"><img src="material_ui.webp" alt="material_ui"></div>' +
        '<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p><br><h2>FoodFight</h2>' +
        '<h5>Android software</h5><div class="fakeimg2"><img src="foodfight_activities.png" alt="foodfight_activities"></div>' +
        '<p>FoodFight application was team project of Software Design and Development course. We implemented Model View Presenter (MVP) design ' +
        'pattern in the application architecture and added functionalities that helps users track their daily/weekly calories and goals. ' +
        'The main objective of this project was to learn and practice collaboration in software development.</p></div><div class="right-side">' +
        '<h4>Suggested Readings</h4></div>';
    } 
}

function about() {
    var aboutButton = document.getElementById("about");

    if (aboutButton.onclick == true) {
        
    } 
}

function contact() {
    var contactButton = document.getElementById("contact");

    if (contactButton.onclick == true) {
        
    } 
}