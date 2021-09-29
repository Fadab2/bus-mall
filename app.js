


let allImages = [];
let totalclicks = 0;


function Catalog(url, name) {
    this.name = name;
    this.url = `assets/images/${url}`;
    this.timeShown = 0;
    this.clicks = 0;
    allImages.push(this);
}

let productImagesEl = document.getElementById("all-images");
let leftImageEl = document.getElementById("left-image");
let centerImageEl = document.getElementById("center-image");
let rightImageEl = document.getElementById("right-image");
let divResults = document.getElementById("results");

let buttonEl = document.getElementById('result-button');

// choose 3 images from catalog
function selectImages() {
    let leftImageIndex = Math.floor(Math.random() * allImages.length);
    let centerImageIndex = Math.floor(Math.random() * allImages.length);
    let rightImageIndex = Math.floor(Math.random() * allImages.length);

    while (leftImageIndex === centerImageIndex || leftImageIndex === rightImageIndex || centerImageIndex === rightImageIndex) {
        centerImageIndex = Math.floor(Math.random() * allImages.length);
        rightImageIndex = Math.floor(Math.random() * allImages.length);

    }
    totalclicks++;
    console.log('Totals clicks ' + totalclicks);

    let left = allImages[leftImageIndex];
    let center = allImages[centerImageIndex];
    let right = allImages[rightImageIndex];

    leftImageEl.src = left.url;
    leftImageEl.name = left.name;
    left.timeShown++;

    centerImageEl.src = center.url;
    centerImageEl.name = center.name;
    center.timeShown++;

    rightImageEl.src = right.url;
    rightImageEl.name = right.name;
    right.timeShown++;

    console.log(left);
}

// render data to chart
function renderChart() {
    let chartEl = document.getElementById("my-chart");
    chartEl.innerHTML = '';

    // canvas element
    let ctx = chartEl.getContext("2d");
    let votesReceived = [];
    let timesViewed = [];
    let labels = [];

    for (let i = 0; i < allImages.length; i++) {
        votesReceived.push(allImages[i].clicks);
        timesViewed.push(allImages[i].timeShown);
        labels.push(allImages[i].name);

    }
    console.log("votes received " + votesReceived);
    console.log("times viewed " + timesViewed);
    // create chart and add data to it
    let catalogChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Votes Received",
                data: votesReceived,
                backgroundColor: [
                    'rgba(83, 51, 237, 1)'
                ],
            }, {
                label: "Times Shown",
                data: timesViewed,
                backgroundColor: [
                    'rgba(207, 0, 15, 1)'
                ],
            }],

        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }


    });

}


function handleClick(event) {

    event.preventDefault();

    let catalogElement = event.target.name;
    console.log(event.target.name);
    console.log(allImages);

    for (let i = 0; i < allImages.length; i++) {
        if (catalogElement === allImages[i].name) {
            allImages[i].clicks++;
            console.log(allImages[i]);

        }
    }
    selectImages();
    if (totalclicks >= 25) {
        leftImageEl.removeEventListener('click', handleClick);
        centerImageEl.removeEventListener('click', handleClick);
        rightImageEl.removeEventListener('click', handleClick);


    }
}

function renderResults() {

    let ulList = document.createElement('ul');
    for (let i = 0; i < allImages.length; i++) {
        let liList = document.createElement('li');
        //liList.textContent = `${allImages[i].name}: ${allImages[i].clicks} votes`;
        // ulList.appendChild(liList);
    }
    //divResults.appendChild(ulList);
    renderChart();
}

leftImageEl.addEventListener('click', handleClick);
centerImageEl.addEventListener('click', handleClick);
rightImageEl.addEventListener('click', handleClick);

// display results on button click
buttonEl.addEventListener('click', renderResults);


new Catalog('dog-duck.jpg', 'dog-duck');
new Catalog('pen.jpg', 'pen');
new Catalog('shark.jpg', 'shark');
new Catalog('sweep.png', 'sweep');
new Catalog('water-can.jpg', 'water-can');
new Catalog('bag.jpg', 'bag');
new Catalog('banana.jpg', 'banana');
new Catalog('bathroom.jpg', 'bathroom');
new Catalog('boots.jpg', 'boots');
new Catalog('chair.jpg', 'chair');
new Catalog('cthulhu.jpg', 'cthulhu');
new Catalog('breakfast.jpg', 'breakfast');
new Catalog('bubblegum.jpg', 'bubblegum');
new Catalog('dragon.jpg', 'dragon');
new Catalog('pet-sweep.jpg', 'pet-sweep');
new Catalog('scissors.jpg', 'scissors');
new Catalog('tauntaun.jpg', 'tauntaun');
new Catalog('unicorn.jpg', 'unicorn');
new Catalog('water-can.jpg', 'water-can');


selectImages();


