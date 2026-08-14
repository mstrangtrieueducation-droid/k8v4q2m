const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    key: "A", label: "A", title: "Look and circle the correct words.",
    note: "Choose the word that matches each original picture.", points: 3,
    questions: [
      choice("A1", "1.", ["computer mouse", "stapler"], "computer mouse", "The picture shows a computer mouse beside a keyboard.", A + "page1-img2-385x275.png"),
      choice("A2", "2.", ["broom", "door"], "door", "The picture shows a door opening into a room.", A + "page1-img3-385x275.png"),
      choice("A3", "3.", ["desk drawer", "suitcase"], "desk drawer", "The picture shows an open desk drawer.", A + "page1-img5-385x275.png")
    ]
  },
  {
    key: "B", label: "B", title: "Listen and write the opposite of the words.",
    note: "Play the audio and type the opposite word you hear.", points: 4,
    audio: "assets/audio/Listening-B.mp3",
    questions: [
      input("B1", "1.", ["sad", "angry"], "The official key accepts sad or angry for this item."),
      input("B2", "2.", ["dangerous"], "Dangerous is the opposite word required by the audio."),
      input("B3", "3.", ["quiet"], "Quiet is the opposite of noisy or loud."),
      input("B4", "4.", ["light"], "Light is the opposite of heavy.")
    ]
  },
  {
    key: "C", label: "C", title: "Write the words. Then match.",
    note: "The letters a, b, and c are the original picture labels. Complete each word, then choose its picture.", points: 6,
    questions: [
      { id: "C1", type: "pictureWord", points: 2, prompt: "1. _ _ _ _ the suitcase", pictures: [
        { value: "a", image: A + "page1-img6-525x301.png" }, { value: "b", image: A + "page1-img7-525x301.png" }, { value: "c", image: A + "page1-img8-525x356.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows a woman pulling a suitcase." },
        { key: "word", label: "Complete the word", type: "input", answers: ["pull"], explanation: "Pull means to move something toward or behind you." }
      ]},
      { id: "C2", type: "pictureWord", points: 2, prompt: "2. _ _ _ _ the box", pictures: [
        { value: "a", image: A + "page1-img6-525x301.png" }, { value: "b", image: A + "page1-img7-525x301.png" }, { value: "c", image: A + "page1-img8-525x356.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows a worker pushing a box." },
        { key: "word", label: "Complete the word", type: "input", answers: ["push"], explanation: "Push means to move something away from you." }
      ]},
      { id: "C3", type: "pictureWord", points: 2, prompt: "3. _ _ _ _ _ the ball", pictures: [
        { value: "a", image: A + "page1-img6-525x301.png" }, { value: "b", image: A + "page1-img7-525x301.png" }, { value: "c", image: A + "page1-img8-525x356.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows a boy throwing a ball." },
        { key: "word", label: "Complete the word", type: "input", answers: ["throw"], explanation: "Throw means to send something through the air with your hand." }
      ]}
    ]
  },
  {
    key: "D", label: "D", title: "Look and write the words.",
    note: "Complete each comparison with the correct adjective form.", points: 4,
    questions: [
      input("D1", "1. Tom is ___ than Bill. (fast)", ["faster"], "For a short adjective, add -er: fast becomes faster.", A + "page2-img7-210x128.png"),
      input("D2", "2. Lee is ___ than Ron. (short)", ["shorter"], "Add -er to short: Lee is shorter than Ron.", A + "page2-img1-385x240.png"),
      input("D3", "3. Meg is ___ than Sue. (slow)", ["slower"], "Add -er to slow: Meg is slower than Sue.", A + "page2-img8-207x132.png"),
      input("D4", "4. Jan is ___ than Ana. (tall)", ["taller"], "Add -er to tall: Jan is taller than Ana.", A + "page2-img6-386x240.png")
    ]
  },
  {
    key: "E", label: "E", title: "Look and write the questions and answers.",
    note: "Write a complete question and a complete short answer for each picture.", points: 8,
    questions: [
      { id: "E1", type: "paired", points: 2, prompt: "1. the box / heavier / the ball", image: A + "page2-img2-440x220.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["Is the box heavier than the ball?", "Is the box heavier than the ball"], explanation: "Use Is + subject + comparative + than: Is the box heavier than the ball?" },
        { key: "answer", label: "Answer", type: "input", answers: ["Yes, it is.", "Yes, it is", "Yes it is.", "Yes it is"], explanation: "The box is heavier, so the answer is Yes, it is." }
      ]},
      { id: "E2", type: "paired", points: 2, prompt: "2. the car / smaller / the bicycle", image: A + "page2-img3-600x300.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["Is the car smaller than the bicycle?", "Is the car smaller than the bicycle"], explanation: "The complete question is: Is the car smaller than the bicycle?" },
        { key: "answer", label: "Answer", type: "input", answers: ["No, it isn't.", "No, it isn't", "No it isn't.", "No it isn't", "No, it is not.", "No, it is not", "No it is not.", "No it is not"], explanation: "The car is not smaller, so the answer is No, it isn't." }
      ]},
      { id: "E3", type: "paired", points: 2, prompt: "3. the bus / longer / the train", image: A + "page2-img4-600x300.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["Is the bus longer than the train?", "Is the bus longer than the train"], explanation: "The complete question is: Is the bus longer than the train?" },
        { key: "answer", label: "Answer", type: "input", answers: ["No, it isn't.", "No, it isn't", "No it isn't.", "No it isn't", "No, it is not.", "No, it is not", "No it is not.", "No it is not"], explanation: "The train is longer, so the answer is No, it isn't." }
      ]},
      { id: "E4", type: "paired", points: 2, prompt: "4. the dog / bigger / the cat", image: A + "page2-img5-440x220.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["Is the dog bigger than the cat?", "Is the dog bigger than the cat"], explanation: "The complete question is: Is the dog bigger than the cat?" },
        { key: "answer", label: "Answer", type: "input", answers: ["Yes, it is.", "Yes, it is", "Yes it is.", "Yes it is"], explanation: "The dog is bigger, so the answer is Yes, it is." }
      ]}
    ]
  },
  {
    key: "F", label: "F", title: "Look and circle the correct words.",
    note: "Choose the sport shown in each original picture.", points: 3,
    questions: [
      choice("F1", "1.", ["hockey", "soccer"], "soccer", "The picture shows a soccer ball going into a goal.", A + "page3-img1-337x241.png"),
      choice("F2", "2.", ["tennis", "golf"], "tennis", "The picture shows a tennis racket and ball.", A + "page3-img8-338x241.png"),
      choice("F3", "3.", ["baseball", "basketball"], "basketball", "The picture shows a basketball and hoop.", A + "page3-img3-337x241.png")
    ]
  },
  {
    key: "G", label: "G", title: "Complete the sentences.",
    note: "Use the word box. One word is extra.", points: 4,
    wordBank: ["angry", "mountain", "stubborn", "west", "wet"],
    questions: [
      input("G1", "1. She spilled water out of the glass. The floor is ___.", ["wet"], "Water on the floor makes it wet."),
      input("G2", "2. Her mother asked her to sit down about six times. The girl did not sit down. She was very ___.", ["stubborn"], "A stubborn person refuses to change or do what is requested."),
      input("G3", "3. The man shouted and his face was red. He was very ___.", ["angry"], "Shouting with a red face shows that the man was angry."),
      input("G4", "4. We want to climb a ___ called Everest.", ["mountain"], "Everest is a mountain.")
    ]
  },
  {
    key: "H", label: "H", title: "Listen and check the correct picture. Write the word.",
    note: "The letters a and b are the original picture labels. Listen, choose the picture, and type the word.", points: 4,
    audio: "assets/audio/Listening-H.mp3",
    questions: [
      { id: "H1", type: "pictureWord", points: 2, prompt: "1.", pictures: [
        { value: "a", image: A + "page3-img4-193x193.png" }, { value: "b", image: A + "page3-img5-193x193.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "The official answer marks picture b." },
        { key: "word", label: "Word from the audio", type: "input", answers: ["forward"], explanation: "The arrow and the moving car show forward." }
      ]},
      { id: "H2", type: "pictureWord", points: 2, prompt: "2.", pictures: [
        { value: "a", image: A + "page3-img6-193x193.png" }, { value: "b", image: A + "page3-img7-193x193.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "The official answer marks picture a." },
        { key: "word", label: "Word from the audio", type: "input", answers: ["horns"], explanation: "Picture a focuses on the animal's horns." }
      ]}
    ]
  },
  {
    key: "I", label: "I", title: "Look and circle the correct words.",
    note: "Choose the superlative adjective that matches each picture.", points: 4,
    questions: [
      choice("I1", "1. Jan is the ___.", ["shortest", "oldest"], "shortest", "Jan is the shortest person in the picture.", A + "page4-img1-477x255.png"),
      choice("I2", "2. This ball is the ___.", ["nicest", "biggest"], "biggest", "It is the biggest of the three balls.", A + "page4-img3-507x250.png"),
      choice("I3", "3. The black tower is the ___.", ["tallest", "shortest"], "tallest", "The black tower is taller than the other towers.", A + "page4-img2-440x220.png"),
      choice("I4", "4. The car is the ___.", ["fastest", "oldest"], "fastest", "Of the car, scooter, and skates, the car is the fastest.", A + "page4-img4-440x220.png")
    ]
  },
  {
    key: "J", label: "J", title: "Write the words in the correct order.",
    note: "Make one complete sentence from each group of words.", points: 6,
    questions: [
      input("J1", "1. train / slowest / The / the / is", ["The train is the slowest.", "The train is the slowest"], "The correct order is: The train is the slowest."),
      input("J2", "2. man / the / tallest / That / is", ["That man is the tallest.", "That man is the tallest"], "The correct order is: That man is the tallest."),
      input("J3", "3. the / juiciest / This / is / orange", ["This orange is the juiciest.", "This orange is the juiciest"], "The correct order is: This orange is the juiciest."),
      input("J4", "4. is / boy / youngest / the / The", ["The boy is the youngest.", "The boy is the youngest"], "The correct order is: The boy is the youngest."),
      input("J5", "5. fastest / car / is / the / My", ["My car is the fastest.", "My car is the fastest"], "The correct order is: My car is the fastest."),
      input("J6", "6. bike / the / His / nicest / is", ["His bike is the nicest.", "His bike is the nicest"], "The correct order is: His bike is the nicest.")
    ]
  },
  {
    key: "K", label: "K", title: "Write the questions. Then look and write the answers.",
    note: "Use Is + subject + the + superlative adjective.", points: 4,
    questions: [
      { id: "K1", type: "paired", points: 2, prompt: "1. girl / Is / the / the / shortest", image: A + "page4-img5-385x275.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["Is the girl the shortest?", "Is the girl the shortest"], explanation: "The complete question is: Is the girl the shortest?" },
        { key: "answer", label: "Answer", type: "input", answers: ["Yes, she is.", "Yes, she is", "Yes she is.", "Yes she is"], explanation: "The girl is shorter than both boys, so the answer is Yes, she is." }
      ]},
      { id: "K2", type: "paired", points: 2, prompt: "2. the / ball / Is / heaviest / the", image: A + "page4-img6-385x275.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["Is the ball the heaviest?", "Is the ball the heaviest"], explanation: "The complete question is: Is the ball the heaviest?" },
        { key: "answer", label: "Answer", type: "input", answers: ["No, it isn't.", "No, it isn't", "No it isn't.", "No it isn't", "No, it is not.", "No, it is not", "No it is not.", "No it is not"], explanation: "The book is heavier than the ball, so the answer is No, it isn't." }
      ]}
    ]
  }
];
