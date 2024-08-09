const registrationSect = document.querySelector(".registration")
const topicsSect = document.querySelector(".interest-topics")
const summary = document.querySelector(".summary")
const steps = document.querySelectorAll(".step-btn")
const submitBtn = document.querySelectorAll(".submit-btn")
const form = document.querySelector("form")
const { name: userName, email } = form.elements
const topicsList = document.querySelectorAll("li")
let sectionIndex = 1
let userTopics = []

topicsList.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
        
        item.classList.contains("active") ? userTopics.push(item.textContent) : userTopics.pop();
    })
})

function toggleSection(section, nextSection) {
    
    if (nextSection.dataset.index === topicsSect.dataset.index) {
        sectionIndex +=1
        section.style.display = "none"
        nextSection.style.display = "flex"
        steps[sectionIndex - 1].classList.add("active")
    } else if (nextSection.dataset.index === summary.dataset.index) {
        sectionIndex += 1
        section.style.display = "none"
        nextSection.style.display = "flex"
        steps[sectionIndex - 1].classList.add("active")
    }
}

function updateSummary() {
   
    const emailUser = document.querySelector(".user-email") 
    const nome = document.querySelector(".user-name") 
    const interestTopics = document.querySelector(".topics-list") 
    nome.textContent = userName.value;
    emailUser.textContent = email.value;
    interestTopics.innerHTML = userTopics.map(topic =>
    `<li>${topic}</li>`).join("");
    
}



function nextStep(btn) {
    const section1 = btn.parentElement.parentElement
    const section2 = btn.parentElement.parentElement.nextElementSibling;

    if (userTopics.length) {
        toggleSection(btn.parentElement, btn.parentElement.nextElementSibling)
        updateSummary()
    } else if (userName.value && email.value) {
        toggleSection(section1, section2)
    } else return;    
}


submitBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        nextStep(btn)
        console.log(index);
        if (index === 2) {
            alert("✅ Success!")
        }        
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
});
