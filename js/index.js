
window.onload = (e)=> {

//page set up on load

    let today = new Date();
    let thisYear = today.getFullYear();

    let footer = document.querySelector("footer ul")
    let copyright = document.createElement("p");
    copyright.innerHTML = `Nayeli Peña Arce ${thisYear}`;

    footer.append(copyright)


    let skills = ["javascript","css", "MongoDB", "Express","NodeJS", "React", "SQL", "Bootstrap", "jQuery", "Handlebars", "Pug", "Wordpress", "SASS"];
    let skillsSection = document.querySelector("#skills");
    let skillsList = skillsSection.querySelector("ul");

    //the free api site i was using to get images did not return these 
    let missingAPI = { 
        MongoDB: "color/48/000000/mongodb.png", 
        Express: "material-outlined/24/000000/js.png",
        NodeJS: "windows/32/000000/node-js.png",
        React: "ios-glyphs/30/000000/react.png",
        Bootstrap: "windows/32/000000/bootstrap.png",
        Handlebars: "ios-glyphs/30/000000/handlebar-mustache.png",
        Pug: "color/30/000000/pug.png"
    }

    for(let i = 0; i < skills.length; i++){
        let skill = document.createElement("li");
        skill.classList.add("container");
        let current = skills[i];
        let src =  (missingAPI.hasOwnProperty(current) ) ? missingAPI[current] : current.toLowerCase();
        
        skill.innerHTML = `<img src="https://img.icons8.com/${src}" /><div class="language-description"> <p class="skill-style"> ${skills[i]}  </p> </div>`;
        skillsList.append(skill);
    }




    //Handling form submit
    let messageCount = 0;
    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");

    let messageForm = document.querySelector("form[name='leave_message']");

    
    messageForm.addEventListener("submit", (e)=>{
        e.preventDefault();


        //variables hold form values
        let name = e.target.name.value, email = e.target.email.value, message = e.target.message.value;
        

        //create new content
        let newMessage = document.createElement("li");
        let removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.innerHTML = "remove";
        removeButton.classList.add("remove-button");
        removeButton.classList.add("button");

        newMessage.innerHTML = `
            
                <p>
                    <a href="mailto:${email}">${name}</a> \n 
                    wrote:
                    <span>${message}<span>
                </p>
                `;
        newMessage.appendChild(removeButton);
        newMessage.appendChild(createEditButton());
        //append
        messageList.appendChild(newMessage)
        
        //add even listener to button
        removeButton.addEventListener("click", (e)=> {
            e.preventDefault();
            let entry = e.target.parentNode;
            entry.remove();
            messageCount-= 1;
            countMsgs();
        })

        //reset form
        messageCount+= 1;
        countMsgs();
        messageForm.reset();
    })

    let countMsgs = () =>{
      if (messageCount > 0) {
        console.log("disspllaayy")
        messageSection.style.display = "block"
      }else{
        messageSection.style.display = "none"
      }
    }

    countMsgs();

    // create edit button
    let createEditButton = () => {
        let editButton = document.createElement("button");
        editButton.innerText = "edit";
        editButton.classList.add("button");
        editButton.classList.add("edit-button");

        editButton.addEventListener('click', (event) => {
            let e = event.target, parent = e.parentNode
        
            if (e.innerText === "edit") {
                let message = parent.querySelector("span");
                let input = document.createElement("input");
                input.type = "text";
                input.value = message.innerText;
        
                message.after(input);
                message.remove();
        
                e.innerText = "save";
            } else {
                const input = parent.querySelector('input')
                const message = document.createElement('span')
                message.innerText = input.value
        
                input.after(message)
                input.remove()
        
                e.innerText = "edit";
            }
        });

        return editButton;
    }
     




    //CREATES THE NAV BAR
        const sectionIDs = document.querySelectorAll("section");
        const navList = document.querySelector("#nav-list");
        const navBar = document.querySelector("#nav-bar");
        sectionIDs.forEach(i=>{
            let listItem = document.createElement("li");
            listItem.innerHTML = `<a href='#${i.id}'> ${i.id} </a>`;
            return navList.appendChild(listItem);
        })


    const toggleSwitch = document.querySelector("#toggle-switch");

    //display the navbar
    toggleSwitch.addEventListener("click", ()=>{
        toggleSwitch.classList.toggle("switch-display1");
        toggleSwitch.classList.toggle("switch-display2");
        navBar.classList.toggle("display-toggle");
    })
    

// External Data Request
    
    let githubRequest = new XMLHttpRequest();
    githubRequest.open("GET", "https://api.github.com/users/nayeli10/repos");
    githubRequest.send();


    githubRequest.addEventListener("load", function () {
        const data = JSON.parse(this.response);
        let projectSection = document.querySelector("#projects");
        let projectList = projectSection.querySelector("ul")

            //iterate through each project return & create list item
        data.forEach(item => {
            let project = document.createElement("li");
            project.innerHTML = `<a href=${item.html_url}> ${item.name} </a> <p> Created on: ${makeDate(item.created_at)}</p>`;
            projectList.appendChild(project);

        })
    });
    
    let makeDate = (date) =>{
        let d = new Date(date);
        return d.toLocaleString();
    }
};


    