
window.onload = (e)=> {
    console.log('The page has fully loaded');
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

    
};