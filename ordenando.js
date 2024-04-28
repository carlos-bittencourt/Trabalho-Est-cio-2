const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

const quick_sort = (array, left, right) => {
    if (left < right) {
        const pivot = partition(array, left, right);
        quick_sort(array, left, pivot - 1);
        quick_sort(array, pivot + 1, right);
    }
};

const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, right);
    return i + 1;
};

const add = () => {
    const inputValue = document.getElementById('valor').value;
    const lista = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(inputValue);
    node.appendChild(textNode);
    lista.appendChild(node);
};

const ordenar = () => {
    const lista = document.getElementById('valores');
    const selection = document.getElementById('algoritmo');
    const values = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    let algorithm = bubble_sort;
    if (selection.selectedIndex === 1) {
        algorithm = selection_sort;
    } else if (selection.selectedIndex === 2) {
        algorithm = quick_sort;
    }
    algorithm(values, 0, values.length - 1);
    lista.innerHTML = '';
    values.forEach(value => {
        const node = document.createElement('li');
        const textNode = document.createTextNode(value);
        node.appendChild(textNode);
        lista.appendChild(node);
    });
};

const misturar = () => {
    const lista = document.getElementById('valores');
    const values = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(values, values.length * 2);
    lista.innerHTML = '';
    values.forEach(value => {
        const node = document.createElement('li');
        const textNode = document.createTextNode(value);
        node.appendChild(textNode);
        lista.appendChild(node);
    });
};
