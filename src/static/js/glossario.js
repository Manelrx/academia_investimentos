// /home/ubuntu/investidor_academia/src/static/js/glossario.js

document.addEventListener("DOMContentLoaded", () => {
    const searchTermInput = document.getElementById("searchTerm");
    const searchBtn = document.getElementById("searchBtn");
    const alphabetFilter = document.querySelector(".glossary-alphabet-filter");
    const glossaryList = document.getElementById("glossaryList");
    const allDtElements = glossaryList.querySelectorAll("dt");
    const allDdElements = glossaryList.querySelectorAll("dd");

    // Store all terms initially
    const allTerms = [];
    allDtElements.forEach((dt, index) => {
        allTerms.push({
            term: dt.textContent.trim(),
            definition: allDdElements[index].textContent.trim(),
            dtElement: dt,
            ddElement: allDdElements[index]
        });
        // Hide all initially to show only filtered results
        dt.style.display = 'none';
        allDdElements[index].style.display = 'none';
    });

    const displayTerms = (termsToDisplay) => {
        // Hide all first
        allTerms.forEach(term => {
            term.dtElement.style.display = 'none';
            term.ddElement.style.display = 'none';
        });

        // Show only the filtered terms
        termsToDisplay.forEach(term => {
            term.dtElement.style.display = ''; // Show dt
            term.ddElement.style.display = ''; // Show dd
        });
    };

    const filterTerms = (filter) => {
        filter = filter.toLowerCase();
        const filteredTerms = allTerms.filter(term => {
            return term.term.toLowerCase().includes(filter) || term.definition.toLowerCase().includes(filter);
        });
        displayTerms(filteredTerms);
    };

    const filterByLetter = (letter) => {
        if (letter === 'all') {
            displayTerms(allTerms);
        } else {
            const filteredTerms = allTerms.filter(term => {
                return term.term.toLowerCase().startsWith(letter.toLowerCase());
            });
            displayTerms(filteredTerms);
        }
        // Update active class in alphabet filter
        alphabetFilter.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        alphabetFilter.querySelector(`[data-letter="${letter}"]`).classList.add('active');
    };

    // Event listener for search button
    searchBtn.addEventListener("click", () => {
        filterTerms(searchTermInput.value);
    });

    // Event listener for Enter key in search input
    searchTermInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            filterTerms(searchTermInput.value);
        }
    });

    // Event listener for alphabet filter
    alphabetFilter.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const letter = event.target.getAttribute("data-letter");
            filterByLetter(letter);
            searchTermInput.value = ''; // Clear search input when using letter filter
        }
    });

    // Initial display (show all)
    filterByLetter('all');
});
