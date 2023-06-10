// binary search

/* The Problem
    problem We need to write a program to find the position 
    of a given number in a list of numbers arranged in 
    decreasing order. We also need to minimize the number of 
    times we access elements from the list.
*/

/* Edge cases

    The number query occurs somewhere in the middle of the list cards.
    query is the first element in cards.
    query is the last element in cards.
    The list cards contains just one element, which is query.
    The list cards does not contain number query.

    The list cards is empty.
    The list cards contains repeating numbers.
    The number query occurs at more than one position in cards.
    (can you think of any more variations?)
*/

// Data
const tests = [
  {
    name: "testQueryIsInMiddle",
    input: {
      cards: [13, 11, 10, 7, 4, 3, 1, 0],
      query: 7,
    },
    output: 3,
  },

  {
    name: "testQueryIsTheFirst",
    input: {
      cards: [13, 11, 10, 7, 4, 3, 1, 0],
      query: 13,
    },
    output: 0,
  },

  {
    name: "testQueryIsTheLast",
    input: {
      cards: [13, 11, 10, 7, 4, 3, 1, 0],
      query: 0,
    },
    output: 7,
  },

  {
    name: "testCardsContainsJustOneElementWichIsQuery",
    input: {
      cards: [13],
      query: 13,
    },
    output: 0,
  },

  {
    name: "testListCardsDoesNotContainNumberQuery",
    input: {
      cards: [13, 11, 10, 7, 4, 3, 1, 0],
      query: 15,
    },
    output: -1,
  },

  {
    name: "testNumberCanRepeatInCards",
    input: {
      cards: [8, 8, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
      query: 6,
    },
    output: 7,
  },
];

// Algorithms

function linearSearch(cards, query) {
  console.log("CARDS", cards, "QUERY", query);
  let position = 0;
  const finalPosition = cards.length - 1;

  while (position <= finalPosition) {
    if (cards[position] === query) {
      return position;
    } else {
      position += 1;
    }
  }
  return -1;
}

function binarySearch(cards, query) {
  console.log("CARDS", cards, "QUERY", query);
  let position = 0;
  let finalPosition = cards.length - 1;

  while (position <= finalPosition) {
    let middle = Math.floor((position + finalPosition) / 2);
    console.log('MEIO', middle, 'POSITION', position, 'FINAL POSITION', finalPosition)
    if (cards[middle] === query){
        if (middle - 1 >= 0 && cards[middle -1] === query) {
            finalPosition = middle - 1
        }
        return middle
    } else if (cards[middle] < query) {
        finalPosition =  middle - 1
    } else if (cards[middle] > query) {
        position = middle + 1
    }

}
return -1
}


// Main

const algorithms = {
  linearSearch: linearSearch,
  binarySearch: binarySearch,
};

function search(algorithm) {
  tests.forEach((test) => {
    console.log("#", tests.indexOf(test) + 1, test.name);
    const cards = test.input.cards;
    const query = test.input.query;
    const result = algorithm(cards, query);

    if (result === test.output) {
      console.log("PASSOU NO TESTE", test.name);
      console.log("Valor esperado", test.output, "=", "valor obtido", result);
      console.log('\n');
    } else {
        console.log("Valor esperado", test.output);
        console.log("Valor obtido", result);
        console.log("FALHOU NO TESTE", test.name);
      console.log('\n');
    }
  });
}

// search(algorithms.linearSearch);
search(algorithms.binarySearch);
