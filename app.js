const OMDbApiKey = '';
const googleApiKey = '';
const useApis = false;

let currentView = 'home';
let searchResultsDiv;
let topMoviesDiv;
let topSeriesDiv;
let topBooksDiv;

const sectionsData = {
    search: {
        id: 'search',
        title: 'Search results',
        catalogDiv: null
    },
    movies: {
        id: 'movies',
        title: 'Top 10 movies of the year',
        link: 'https://editorial.rottentomatoes.com/guide/box-office-top-10-movies-of-the-year/',
        linkDescription: 'According to Rotten Tomatoes',
        catalogDiv: topMoviesDiv
    },
    series: {
        id: 'series',
        title: 'Top 10 best series of all time',
        link: 'https://www.adorocinema.com/series-tv/melhores/',
        linkDescription: 'According to Adoro Cinema',
        catalogDiv: topSeriesDiv
    },
    books: {
        id: 'books',
        title: 'Top 10 best-selling fiction books',
        link: 'https://www.nytimes.com/books/best-sellers/trade-fiction-paperback/',
        linkDescription: 'According to The New York Times',
        catalogDiv: topBooksDiv
    }
};

const searchContainer = document.querySelector('.search-container');
const input = document.querySelector('.search-input');
const modalContent = document.querySelector(".modal-content");

searchContainer.addEventListener('mouseover', () => input.focus());
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') search();
});

loadView('home');

function loadView(view) {
    currentView = view;
    cleanAllSections();

    switch (currentView) {
        case 'home':
            createMainSections();
            fillMainSections();
            break;
        case 'movies':
            createSection(view);
            topMoviesDiv = document.getElementById('top10-movies');
            fillTop10Catalog(topMovies, topMoviesDiv, view);
            break;
        case 'series':
            createSection(view);
            topSeriesDiv = document.getElementById('top10-series');
            fillTop10Catalog(topSeries, topSeriesDiv, view);
            break;
        case 'books':
            createSection(view);
            topBooksDiv = document.getElementById('top10-books');
            fillTop10Catalog(topBooks, topBooksDiv, view);
            break;
        default:
            break;
    }
}

function cleanAllSections() {
    const sections = ['search', 'movies', 'series', 'books'];

    sections.forEach(section => {
        cleanSection(section)
    });
}

function cleanSection(catalogType) {
    const section = document.getElementById(sectionsData[catalogType].id);
    
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}

function createMainSections() {
    const sections = ['movies', 'series', 'books'];

    sections.forEach(section => {
        createSection(section)
    });

    topMoviesDiv = document.getElementById('top10-movies');
    topSeriesDiv = document.getElementById('top10-series');
    topBooksDiv = document.getElementById('top10-books');
}

function createSection(catalogType) {
    const section = document.getElementById(sectionsData[catalogType].id);  
    const sectionHeader = document.createElement('div');
    const sectionContent = document.createElement('div');

    if (catalogType != 'search') {
        sectionHeader.innerHTML = `
            <div class="subtitle flex-row">
                <h2>${sectionsData[catalogType].title}
                    <a
                        href="${sectionsData[catalogType].link}"
                        target="_blank"
                        title="${sectionsData[catalogType].linkDescription}">
                    ⓘ</a>
                </h2>
            </div>
        `;

        sectionContent.innerHTML = `<div id="top10-${sectionsData[catalogType].id}" class="catalog flex-row"></div>`;
    
        section.appendChild(sectionHeader);
        section.appendChild(sectionContent);
    } else {
        sectionHeader.innerHTML = `<h2 class="subtitle">${sectionsData[catalogType].title}</h2>`;
        sectionContent.innerHTML = `<div id="${sectionsData[catalogType].id}-results" class="catalog flex-row"></div>`;

        section.insertBefore(sectionContent, section.firstChild);
        section.insertBefore(sectionHeader, section.firstChild);
    }
}

function fillMainSections() {
    const sections = [topMovies, topSeries, topBooks];
    const divs = [topMoviesDiv, topSeriesDiv, topBooksDiv];
    const types = ['movies', 'series', 'books'];

    sections.forEach((section, index) => {
        fillTop10Catalog(section, divs[index], types[index]);
    });
}

function fillTop10Catalog(list, catalogElement, catalogType) {
    list.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <div class="item" onclick="openModal('${item.title}','${catalogType}')">
                <img src="${item.cover}" alt="${item.title}" class="cover">
                <div class="info flex-column">
                    <h3 class="title">${item.title}</h3>
                </div>
            </div>
        `;

        catalogElement.appendChild(itemDiv);
    });
}

function search() {
    if (input.value == '') return;

    cleanSection('search');
    createSection('search');
    searchResultsDiv = document.getElementById('search-results');

    switch (currentView) {
        case 'home':
            searchAllCatalogData();
            searchMovies(input.value);
            searchSeries(input.value);
            searchBooks(input.value);
            break;
        case 'movies':
            searchCatalogData(topMovies, 'movies');
            searchMovies(input.value);
            break;
        case 'series':
            searchCatalogData(topSeries, 'series');
            searchSeries(input.value);
            break;
        case 'books':
            searchCatalogData(topBooks, 'books');
            searchBooks(input.value);
            break;
        default:
            break;
    }
}

function searchAllCatalogData() {
    const lists = [topMovies, topSeries, topBooks];
    const types = ['movies', 'series', 'books'];

    lists.forEach((list, index) => {
        searchCatalogData(list, types[index]);
    });
}

function searchCatalogData(list, catalogType) {
    const searchTerm = input.value.toLowerCase();
    let results = '';

    list.forEach(item => {
        if (item.title.toLowerCase().includes(searchTerm)) {
            results += `
                <div class="item" onclick="openModal('${item.title}','${catalogType}')">
                    <img src="${item.cover}" alt="${item.title}" class="cover">
                    <div class="info flex-column">
                        <h3 class="title">${item.title}</h3>
                    </div>
                </div>
            `;
        }
    });

    if (!results && !useApis) {
        results = `<p class="not-found">No results found</p>`;
    }
    searchResultsDiv.innerHTML = results;
}

function searchMovies(movieTitle) {
    if (!useApis) return;
 
    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${OMDbApiKey}&type=movie`)
        .then(response => response.json())
        .then(movie => {
            if (movie.Response === 'False') return; 

            const movieDiv = document.createElement('div');

            movieDiv.innerHTML = `
                <div class="item">
                    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
                        <img src="${movie.Poster}" alt="${movie.Title}" class="cover">
                        <div class="info flex-column">
                            <h3 class="title">${movie.Title}</h3>
                        </div>
                    </a>
                </div>
            `;

            searchResultsDiv.appendChild(movieDiv);
        })
        .catch(error => {
            console.error('Erro ao buscar informações do filme: ', error);
        });
}

function searchSeries(serieTitle) {
    if (!useApis) return;

    fetch(`http://www.omdbapi.com/?s=${serieTitle}&apikey=${OMDbApiKey}&type=series`)
        .then(response => response.json())
        .then(data => {
            if (data?.Response === 'False') return; 
    
            const results = data.Search;
            results.forEach(serie => {
                const serieDiv = document.createElement('div');
            
                serieDiv.innerHTML = `
                    <div class="item">
                        <a href="https://www.imdb.com/title/${serie.imdbID}" target="_blank">
                            <img src="${serie.Poster}" alt="${serie.Title}" class="cover">
                            <div class="info flex-column">
                                <h3 class="title">${serie.Title}</h3>
                            </div>
                        </a>
                    </div>
                `;

                searchResultsDiv.appendChild(serieDiv);
            });

        })
        .catch(error => {
            console.error('Erro ao buscar informações da série: ', error);
        });
}

function searchBooks(bookTitle) {
    if (!useApis) return;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${googleApiKey}`)
        .then(response => response.json())
        .then(data => {
            const results = data.items;
            results.forEach(book => {
                const bookDiv = document.createElement('div');
            
                bookDiv.innerHTML = `
                    <div class="item">
                        <a href="${book.volumeInfo.infoLink}" target="_blank">
                            <img src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="${book.volumeInfo.title}" class="cover">
                            <div class="info flex-column">
                                <h3 class="title">${book.volumeInfo.title}</h3>
                            </div>
                        </a>
                    </div>
                `;

                searchResultsDiv.appendChild(bookDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar informações do livro: ', error);
        });
}

function openModal(title, catalogType) {
    const item = findByTitle(title, catalogType)
    createModal(item, catalogType);

    document.querySelector(".modal").style.display = "flex";
}

function createModal(item, catalogType) {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = `
        <button class="close-button" onclick="closeModal()">
            <img class="icon" src="assets/imgs/close.svg">
        </button>
    `;
    modalContent.appendChild(closeButton);

    if (catalogType != 'books') {
        const trailerPreview = document.createElement('iframe');
        trailerPreview.src = item.trailerLink;
        trailerPreview.title = item.trailerTitle;
        trailerPreview.setAttribute("frameborder", "0");

        modalContent.appendChild(trailerPreview);
    } else {
        const bookCover = document.createElement('div');
        bookCover.innerHTML = `
            <div class="modal-image flex-row">
                <img src="${item.cover}" alt="${item.title}" class="modal-cover">
            </div>
        `;
        modalContent.appendChild(bookCover);
    }
  
    const modalInfo = document.createElement('div');
    modalInfo.innerHTML = `
        <div class="modal-info flex-column">
            <div class="modal-title flex-row">
                <h1>${item.title}</h1>
                <span>${item.year} | ${item.duration}</span>
            </div>
    
            <div class="description flex-row">
                <p>${item.plot}</p>
                <div class="more-info flex-column">
                    <p>${item.director}</p>
                    <a href="${item.link}" target="_blank" title="IMDb">More info</a>
                </div>
            </div>
        </div>
    `;
    modalContent.appendChild(modalInfo);
}

function findByTitle(title, catalogType) {
    const items = { movies: topMovies, series: topSeries, books: topBooks }[catalogType];
    return items?.find(item => item.title === title) || null;
}

function closeModal() {
    while (modalContent.firstChild) {
        modalContent.removeChild(modalContent.firstChild);
    }

    document.querySelector(".modal").style.display = "none";
}