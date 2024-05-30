// Array of photography quotes
const photographyQuotes = [
    "“Photography is the story I fail to put into words.” - Destin Sparks",
    "“In photography there is a reality so subtle that it becomes more real than reality.” - Alfred Stieglitz",
    "“Taking pictures is savoring life intensely, every hundredth of a second.” - Marc Riboud",
    "“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.” - Aaron Siskind",
    "“The best thing about a picture is that it never changes, even when the people in it do.” - Andy Warhol"
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * photographyQuotes.length);
    return photographyQuotes[randomIndex];
}

// Display the random quote on the webpage every 10 seconds
const quoteElement = document.getElementById('quote');
setInterval(function() {
    quoteElement.textContent = generateRandomQuote();
}, 10000); // 10 seconds in milliseconds


document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    // Load gallery images (Assuming the images are in an array)
    const images = [
        'assets\\images\\1.jpg',
        'assets\\images\\3.jpg',
        'assets\\images\\2.jpg',
        'assets\\images\\4.jpg',
        'assets\\images\\5.jpg',
        'assets\\images\\6.jpg',
        'assets\\images\\7.jpg',
        'assets\\images\\8.jpg',
        'assets\\images\\9.jpg',
        'assets\\images\\10.jpg',
        'assets\\images\\11.jpg',
        'assets\\images\\12.jpg',
        'assets\\images\\13.jpg',
        'assets\\images\\14.jpg',
        'assets\\images\\15.jpg',
        'assets\\images\\16.jpg',
        'assets\\images\\17.jpg',
        'assets\\images\\18.jpg',
        'assets\\images\\19.jpg',
        'assets\\images\\20.jpg',
        'assets\\images\\21.jpg',
        'assets\\images\\22.jpg',
        'assets\\images\\23.jpg',
        'assets\\images\\24.jpg',
        'assets\\images\\25.jpg',
        'assets\\images\\26.jpg',
        'assets\\images\\27.jpg',
        'assets\\images\\28.jpg',
        'assets\\images\\29.jpg',
        'assets\\images\\30.jpg',
        'assets\\images\\31.jpg',
        'assets\\images\\32.jpg',
        'assets\\images\\33.jpg',
        'assets\\images\\34.jpg',
        'assets\\images\\35.jpg',
        'assets\\images\\36.jpg',
        'assets\\images\\37.jpg',
        'assets\\images\\38.jpg',
        'assets\\images\\39.jpg',
        'assets\\images\\40.jpg',
        'assets\\images\\41.jpg',
        'assets\\images\\42.jpg',
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery Image';
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = src;
        });
        galleryContainer.appendChild(img);
        console.log("Image added");
    });

    // Close the lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
