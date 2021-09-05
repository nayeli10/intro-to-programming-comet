
window.onload = (e)=> {

    //page set up on load
    let today = new Date();
    let thisYear = today.getFullYear();

    let footer = document.querySelector("footer");
    let copyright = document.createElement("p");
    copyright.innerHTML = "Nayeli" + thisYear;

    footer.append(copyright);

    let skills = ["Javascript","CSS", "MongoDB", "Express","Node", "React", "SQL"];
    let skillsSection = document.querySelector("#skills");
    let skillsList = skillsSection.querySelector("ul");

    for(let i = 0; i < skills.length; i++){
        let skill = document.createElement("li");
        skill.innerHTML = skills[i];
        skillsList.append(skill)
    }


    //Handling form submit
    let messageForm = document.querySelector("form[name='leave_message']");
    messageForm.addEventListener("submit", (e)=>{
        e.preventDefault();

        //hold form values
        let name = e.target.name.value;
        let email = e.target.email.value;
        let message = e.target.message.value;

        //query page elements
        let messageSection = document.querySelector("#messages");
        let messageList = messageSection.querySelector("ul");

        //create new content
        let newMessage = document.createElement("li");
        let removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.innerHTML = "remove";

        newMessage.innerHTML = `
                <p>
                    <a href="mailto:${email}">${name}</a> \n 
                    wrote:
                    <span>${message}<span>
                </p>
                `;
                
        //append
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage)
        
        //add even listener to button
        removeButton.addEventListener("click", (e)=> {
            e.preventDefault();
            let entry = e.target.parentNode;
            entry.remove()
        })
        //reset form
        messageForm.reset();
    })

//CREATES THE NAV BAR
    const sectionIDs = document.querySelectorAll("section");
    const navList = document.querySelector("#nav-list");
    const navBar = document.querySelector("#nav-bar")
    sectionIDs.forEach(i=>{
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href='#${i.id}'> ${i.id} </a>`;
        return navList.appendChild(listItem)
    })


    const navbar = document.querySelector("#nav-display")

    //display the navbar
    navbar.addEventListener("click", ()=>{
        navBar.style.left = "0px" ;
    })
    

   // External Data Request
    let gitUrl = "https://api.github.com/users/nayeli10/repos";

    function usesFetch(url){
        fetch(url)    
            .then( res => res.json())
            .then( data => dataHandler(data))
            .catch( error => console.error('Error:', error) );
    }
    
    //iterate through each project return & create list item
    let dataHandler = (arr) =>{
        let projectSection = document.querySelector("#projects");
                let projectList = projectSection.querySelector("ul");
                arr.forEach(item => {
                    let project = document.createElement("li");
                    project.innerHTML = `<a href=${item.html_url}> ${item.name} </a> <p> Created on: ${makeDate(item.created_at)}</p>`;
                    projectList.appendChild(project);
                })
    }
    
    let makeDate = (date) =>{
        var d = new Date(date);
        return d.toLocaleString();
    }

    usesFetch(gitUrl);
};


    