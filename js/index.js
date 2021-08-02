
window.onload = (e)=> {

    //page set up on load
    let today = new Date();
    let thisYear = today.getFullYear();

    let footer = document.querySelector("footer")
    let copyright = document.createElement("p");
    copyright.innerHTML = "Nayeli" + thisYear;

    footer.append(copyright)


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

        //variables hold form values
        let name = e.target.name.value;
        let email = e.target.email.value;
        let message = e.target.message.value;

        //query  page elements
        let messageSection = document.querySelector("#messages");
        let messageList = messageSection.querySelector("ul");

        //create new content
        let newMessage = document.createElement("li");
        let removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.innerHTML = "remove";

        newMessage.innerHTML = `
            
                <a href="mailto:${email}">${name}</a> wrote :
                <span>${message}</span>
                `;
        newMessage.appendChild(removeButton);

        //append
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
    
};