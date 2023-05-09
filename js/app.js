const job = [
    {
        title: "Content Creator met strategisch inzicht",
        body: "Dit is de body van job uno",
        img: "https://start.alwaysbetter.be/ambassador-traject/img/ab-image.jpg",
        tag: "marketing",
        url: "",
    },
    {
        title: "Content Creator met strategisch inzicht",
        body: "Dit is de body van job uno",
        img: "https://start.alwaysbetter.be/ambassador-traject/img/ab-image.jpg",
        tag: "coach",
        url: "",
    },
    {
        title: "Content Creator met strategisch inzicht",
        body: "Dit is de body van job uno",
        img: "https://start.alwaysbetter.be/ambassador-traject/img/ab-image.jpg",
        tag: "admin",
        url: "",
    },
];

// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const headerLogo = $('.header .logo');
    const darkHeader = document.querySelector('.header.dark');

    if (darkHeader) {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        }
    } else {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/logo-white.png")
        }
    }
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

$('.small-menu-content .nav').click(closeMenu);

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

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
                        <a href="/posts/${job.link}" class="btn ghost no-border">
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