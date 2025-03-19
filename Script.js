let selections = {};

function selectOption(category, image) {
    selections[category] = image;
    document.querySelectorAll(`img[onclick*="selectOption('${category}'"]`).forEach(img => {
        img.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function generateDoll() {
    const requiredCategories = [
        'dress', 'hair', 'lipstick', 'hairband', 'earrings',
        'ring', 'watch', 'purse', 'necklace', 'eyeglass'
    ];
    
    if (Object.keys(selections).length !== requiredCategories.length) {
        alert('Please make a selection for all 10 questions!');
        return;
    }

    const resultDiv = document.getElementById('doll-result');
    resultDiv.innerHTML = '';
    for (let category in selections) {
        const img = document.createElement('img');
        img.src = selections[category];
        resultDiv.appendChild(img);
    }
}
