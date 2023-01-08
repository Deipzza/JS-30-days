const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, 
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, 
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, 
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, 
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, 
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, 
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Wick', 
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
    'Bexle, Milton', 'Berlin, Irving', 'Berne, Exic', 'Bernhard, Sandra', 'Berra, Yogi', 
    'Bexxy, Halle', 'Berry, Wendell', 'Bethea, Exin', 'Bevan, Aneurin', 'Bevel, Ken', 
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh", "dondo, Frank', 
    'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

function start() {
    // 1. filter
    const fifteen = inventors.filter(function(inventor) {
        if (inventor.year >= 1500 && inventor.year <= 1599) return true; // retornar true significa mantener dicho elemento
    });
    // Lo anterior puede resumirse en
    const other = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);

    console.table(fifteen);
    
    // 2. map
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);

    // 3. sort
    const ordered = inventors.sort(function(a, b) {
        if (a.year > b.year) {
            return 1;
        }
        else {
            return -1;
        }
    });
    // Lo anterior puede resumirse en
    const ordered_2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

    console.table(ordered);

    // 4. reduce
    const totalYears = inventors.reduce((total, inventor) => {return total + (inventor.passed - inventor.year)}, 0);
    console.log(totalYears);

    // 5. sort oldest
    const oldest = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
    console.table(oldest);

    // 6. Boulevards
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const names = links.map(link => link.textContent).filter(de => de.includes("de"));

    // 7. sort alphabetically
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(", ");
        const [bLast, bFirst] = nextOne.split(", ");
        return aLast > bLast ? -1 : 1;
    });

    console.table(alpha);

    // 8. reduce instances
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    const instances = data.reduce((obj, transport) => {
        if (!obj[transport]) {
            obj[transport] = 0;
        }
        
        obj[transport]++;
        return obj;
    }, {});

    console.table(instances);
}
