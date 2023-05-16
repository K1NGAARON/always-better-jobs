const job = [
    {
        title: "Personal coach",
        body: "Tekstje voor personal coach job",
        img: "https://start.alwaysbetter.be/ambassador-traject/img/ab-image.jpg",
        tag: "coach",
        link: "/job-openings/personal-coach/",
    },
    {
        title: "Growth hacker",
        body: "Tekstje voor growth hacker job",
        img: "https://start.alwaysbetter.be/ambassador-traject/img/ab-image.jpg",
        tag: "marketing",
        link: "/job-openings/growth-hacker/",
    },
    {
        title: "Marketing- en communicatieverantwoordelijke",
        body: "Tekstje voor marketing communicatie job",
        img: "https://start.alwaysbetter.be/ambassador-traject/img/ab-image.jpg",
        tag: "marketing",
        link: "/job-openings/marketing-communicatie-verantwoordelijke/",
    },
];

function filterContent(e) {
    // Toggle Active Class on Filter
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.job-openings .card').fadeOut();

    // Selected Tag
    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.job-openings .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
};

function createCards(e) {
    const target = document.querySelector('#jobs-openings');

    if (target) {
        const cards = job.map(job => {
            const tagWithSpaces = job.tag.replace(/-/g, ' ');


            return `
                <div class="card ${job.date} ${job.category} ${job.tag}">
                    <div class="card-image">
                        <img src="${job.img}" alt="${job.title}">
                        <div class="overlay"></div>
                    </div>
                    <div class="card-content">
                        <p class="tag">
                            ${tagWithSpaces}
                        </p>
                        <h5>
                            ${job.title}
                        </h5>
                        <a href="${job.link}" class="btn ghost no-border">
                            Lees meer <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    
        target.innerHTML = cards;
    }
};


$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});