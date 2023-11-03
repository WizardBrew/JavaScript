function printFruitFreq(fruit) {
        const freq  = { } // in this empty obj we will store 
        for (let i = 0; i < fruit.length; i++){
                freq[fruit[i]] = (freq[fruit[i]] || 0) +1;
        }
        console.log(freq)

        const sortedFruit = Object.keys(freq).sort((a, b) => {
                if (freq[b] === freq[a]) {
                        return fruit.indexof(a) - fruit.indexof(b)
                }
                return freq[b] - freq[a]; // sort based on freq
        });
        console.log(sortedFruit)
        return sortedFruit;

}

printFruitFreq(['Apple', 'Banana', 'Cherry', 'Apple', 'Apple', 'Cherry'])