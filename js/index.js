function preloader() {
    const imagesList = [
        "img/content1-img.jpg",
        "img/content2-img.jpg",
        "img/content3-img.jpg"

    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


const buttons = document.querySelectorAll('button');

let data = {
    content1: {
        headingContent: "Governemnt Subsidies and Incentives",
        imageUrl: "img/content1-img.jpg",
        imgAlt: "img1",
        bodyText: "Governments can offer subsidies, tax credits, or rebates to individuals and businesses investing in renewable energy systems such as solar panels, wind turbines, or geothermal heat pumps. These incentives help offset the upfront costs and make green energy more accessible to a wider range of people."
    },
    content2: {
        headingContent: "Community Solar Programs",
        imageUrl: "img/content2-img.jpg",
        imgAlt: "img2",
        bodyText: "Community solar projects allow multiple individuals or households to collectively invest in a solar energy system installed on a shared property, such as a community center or unused land. Participants can then receive credits on their electricity bills based on their share of the energy produced. This model enables individuals without suitable rooftops or financial resources to access solar power."
    },
    content3: {
        headingContent: "Education and Outreach",
        imageUrl: "img/content3-img.jpg",
        imgAlt: "img3",
        bodyText: "Educating consumers about the long-term cost savings and environmental benefits of green energy can encourage more widespread adoption. Outreach programs, workshops, and online resources can help individuals make informed decisions about investing in renewable energy technologies."
    }
};
let container = document.querySelector(".dynamic-content");

function onClick(event) {
    
    console.log("onClick has been triggered");

    let pageContent = document.querySelector(".dynamic-content");
    
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild);
    }
    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    
    event.target.setAttribute("id", "active-button");
    
    let heading = document.createElement("h2");
    let para = document.createElement("p");
    let image = document.createElement("img");
    let selectedContent = event.target.getAttribute("data-content");

    console.log(selectedContent);
    
    heading.innerHTML = data[selectedContent].headingContent;
    para.innerHTML = data[selectedContent].bodyText;
    image.src = data[selectedContent].imageUrl;
    image.alt = data[selectedContent].imgAlt;
    
    pageContent.appendChild(heading);
    pageContent.appendChild(image);
    pageContent.appendChild(para);
    
    container.appendChild(pageContent);
};

for (let i = 0; i < buttons.length; i++) {   
    buttons[i].addEventListener("click", onClick);
};