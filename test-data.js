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
    "key": "A",
    "label": "A",
    "title": "Look and circle the correct words.",
    "note": "Choose the word that matches each original picture.",
    "points": 3,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "computer mouse",
          "stapler"
        ],
        "answers": [
          "computer mouse"
        ],
        "explanation": "The picture shows a computer mouse beside a keyboard.",
        "image": "assets/images/page1-img2-385x275.png",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "broom",
          "door"
        ],
        "answers": [
          "door"
        ],
        "explanation": "The picture shows a door opening into a room.",
        "image": "assets/images/page1-img3-385x275.png",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "desk drawer",
          "suitcase"
        ],
        "answers": [
          "desk drawer"
        ],
        "explanation": "The picture shows an open desk drawer.",
        "image": "assets/images/page1-img5-385x275.png",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Listen and write the opposite of the words.",
    "note": "Play the audio and type the opposite word you hear.",
    "points": 4,
    "audio": "assets/audio/Listening-B.mp3",
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1.",
        "answers": [
          "sad",
          "angry"
        ],
        "explanation": "The official key accepts sad or angry for this item.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2.",
        "answers": [
          "dangerous"
        ],
        "explanation": "Dangerous is the opposite word required by the audio.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3.",
        "answers": [
          "quiet"
        ],
        "explanation": "Quiet is the opposite of noisy or loud.",
        "image": "",
        "points": 1
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4.",
        "answers": [
          "light"
        ],
        "explanation": "Light is the opposite of heavy.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Write the words. Then match.",
    "note": "The letters a, b, and c are the original picture labels. Complete each word, then choose its picture.",
    "points": 6,
    "questions": [
      {
        "id": "C1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1. _ _ _ _ the suitcase",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-525x301.png"
          },
          {
            "value": "b",
            "image": "assets/images/page1-img7-525x301.png"
          },
          {
            "value": "c",
            "image": "assets/images/page1-img8-525x356.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "c"
            ],
            "explanation": "Picture c shows a woman pulling a suitcase."
          },
          {
            "key": "word",
            "label": "Complete the word",
            "type": "input",
            "answers": [
              "pull"
            ],
            "explanation": "Pull means to move something toward or behind you."
          }
        ]
      },
      {
        "id": "C2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2. _ _ _ _ the box",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-525x301.png"
          },
          {
            "value": "b",
            "image": "assets/images/page1-img7-525x301.png"
          },
          {
            "value": "c",
            "image": "assets/images/page1-img8-525x356.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows a worker pushing a box."
          },
          {
            "key": "word",
            "label": "Complete the word",
            "type": "input",
            "answers": [
              "push"
            ],
            "explanation": "Push means to move something away from you."
          }
        ]
      },
      {
        "id": "C3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3. _ _ _ _ _ the ball",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-525x301.png"
          },
          {
            "value": "b",
            "image": "assets/images/page1-img7-525x301.png"
          },
          {
            "value": "c",
            "image": "assets/images/page1-img8-525x356.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows a boy throwing a ball."
          },
          {
            "key": "word",
            "label": "Complete the word",
            "type": "input",
            "answers": [
              "throw"
            ],
            "explanation": "Throw means to send something through the air with your hand."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Look and write the words.",
    "note": "Complete each comparison with the correct adjective form.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. Tom is ___ than Bill. (fast)",
        "answers": [
          "faster"
        ],
        "explanation": "For a short adjective, add -er: fast becomes faster.",
        "image": "assets/images/page2-img7-210x128.png",
        "points": 1
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. Meg is ___ than Sue. (slow)",
        "answers": [
          "slower"
        ],
        "explanation": "Theo thứ tự đề gốc, câu 2 so sánh Meg với Sue: slower.",
        "image": "assets/images/page2-img1-385x240.png",
        "points": 1
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. Lee is ___ than Ron. (short)",
        "answers": [
          "shorter"
        ],
        "explanation": "Theo thứ tự đề gốc, câu 3 so sánh Lee với Ron: shorter.",
        "image": "assets/images/page2-img8-207x132.png",
        "points": 1
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "4. Jan is ___ than Ana. (tall)",
        "answers": [
          "taller"
        ],
        "explanation": "Add -er to tall: Jan is taller than Ana.",
        "image": "assets/images/page2-img6-386x240.png",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Look and write the questions and answers.",
    "note": "Write a complete question and a complete short answer for each picture.",
    "points": 8,
    "questions": [
      {
        "id": "E1",
        "type": "paired",
        "points": 2,
        "prompt": "1. the box / heavier / the ball",
        "image": "assets/images/page2-img2-440x220.png",
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Is the box heavier than the ball?",
              "Is the box heavier than the ball"
            ],
            "explanation": "Use Is + subject + comparative + than: Is the box heavier than the ball?"
          },
          {
            "key": "answer",
            "label": "Answer",
            "type": "input",
            "answers": [
              "Yes, it is.",
              "Yes, it is",
              "Yes it is.",
              "Yes it is"
            ],
            "explanation": "The box is heavier, so the answer is Yes, it is."
          }
        ]
      },
      {
        "id": "E2",
        "type": "paired",
        "points": 2,
        "prompt": "2. the car / smaller / the bicycle",
        "image": "assets/images/page2-img3-600x300.png",
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Is the car smaller than the bicycle?",
              "Is the car smaller than the bicycle"
            ],
            "explanation": "The complete question is: Is the car smaller than the bicycle?"
          },
          {
            "key": "answer",
            "label": "Answer",
            "type": "input",
            "answers": [
              "No, it isn't.",
              "No, it isn't",
              "No it isn't.",
              "No it isn't",
              "No, it is not.",
              "No, it is not",
              "No it is not.",
              "No it is not"
            ],
            "explanation": "The car is not smaller, so the answer is No, it isn't."
          }
        ]
      },
      {
        "id": "E3",
        "type": "paired",
        "points": 2,
        "prompt": "3. the bus / longer / the train",
        "image": "assets/images/page2-img4-600x300.png",
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Is the bus longer than the train?",
              "Is the bus longer than the train"
            ],
            "explanation": "The complete question is: Is the bus longer than the train?"
          },
          {
            "key": "answer",
            "label": "Answer",
            "type": "input",
            "answers": [
              "No, it isn't.",
              "No, it isn't",
              "No it isn't.",
              "No it isn't",
              "No, it is not.",
              "No, it is not",
              "No it is not.",
              "No it is not"
            ],
            "explanation": "The train is longer, so the answer is No, it isn't."
          }
        ]
      },
      {
        "id": "E4",
        "type": "paired",
        "points": 2,
        "prompt": "4. the dog / bigger / the cat",
        "image": "assets/images/page2-img5-440x220.png",
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Is the dog bigger than the cat?",
              "Is the dog bigger than the cat"
            ],
            "explanation": "The complete question is: Is the dog bigger than the cat?"
          },
          {
            "key": "answer",
            "label": "Answer",
            "type": "input",
            "answers": [
              "Yes, it is.",
              "Yes, it is",
              "Yes it is.",
              "Yes it is"
            ],
            "explanation": "The dog is bigger, so the answer is Yes, it is."
          }
        ]
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Look and circle the correct words.",
    "note": "Choose the sport shown in each original picture.",
    "points": 3,
    "questions": [
      {
        "id": "F1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "hockey",
          "soccer"
        ],
        "answers": [
          "soccer"
        ],
        "explanation": "The picture shows a soccer ball going into a goal.",
        "image": "assets/images/page3-img1-337x241.png",
        "points": 1
      },
      {
        "id": "F2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "tennis",
          "golf"
        ],
        "answers": [
          "tennis"
        ],
        "explanation": "The picture shows a tennis racket and ball.",
        "image": "assets/images/page3-img8-338x241.png",
        "points": 1
      },
      {
        "id": "F3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "baseball",
          "basketball"
        ],
        "answers": [
          "basketball"
        ],
        "explanation": "The picture shows a basketball and hoop.",
        "image": "assets/images/page3-img3-337x241.png",
        "points": 1
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Complete the sentences.",
    "note": "Use the word box. One word is extra.",
    "points": 4,
    "wordBank": [
      "angry",
      "mountain",
      "stubborn",
      "west",
      "wet"
    ],
    "questions": [
      {
        "id": "G1",
        "type": "input",
        "prompt": "1. She spilled water out of the glass. The floor is ___.",
        "answers": [
          "wet"
        ],
        "explanation": "Water on the floor makes it wet.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "input",
        "prompt": "2. Her mother asked her to sit down about six times. The girl did not sit down. She was very ___.",
        "answers": [
          "stubborn"
        ],
        "explanation": "A stubborn person refuses to change or do what is requested.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "input",
        "prompt": "3. The man shouted and his face was red. He was very ___.",
        "answers": [
          "angry"
        ],
        "explanation": "Shouting with a red face shows that the man was angry.",
        "image": "",
        "points": 1
      },
      {
        "id": "G4",
        "type": "input",
        "prompt": "4. We want to climb a ___ called Everest.",
        "answers": [
          "mountain"
        ],
        "explanation": "Everest is a mountain.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Listen and check the correct picture. Write the word.",
    "note": "The letters a and b are the original picture labels. Listen, choose the picture, and type the word.",
    "points": 4,
    "audio": "assets/audio/Listening-H.mp3",
    "questions": [
      {
        "id": "H1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img4-193x193.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img5-193x193.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "The official answer marks picture b."
          },
          {
            "key": "word",
            "label": "Word from the audio",
            "type": "input",
            "answers": [
              "forward"
            ],
            "explanation": "The arrow and the moving car show forward."
          }
        ]
      },
      {
        "id": "H2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img6-193x193.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img7-193x193.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture label",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "The official answer marks picture a."
          },
          {
            "key": "word",
            "label": "Word from the audio",
            "type": "input",
            "answers": [
              "horns"
            ],
            "explanation": "Picture a focuses on the animal's horns."
          }
        ]
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Look and circle the correct words.",
    "note": "Choose the superlative adjective that matches each picture.",
    "points": 4,
    "questions": [
      {
        "id": "I1",
        "type": "choice",
        "prompt": "1. Jan is the ___.",
        "options": [
          "shortest",
          "oldest"
        ],
        "answers": [
          "shortest"
        ],
        "explanation": "Jan is the shortest person in the picture.",
        "image": "assets/images/page4-img1-477x255.png",
        "points": 1
      },
      {
        "id": "I2",
        "type": "choice",
        "prompt": "2. This ball is the ___.",
        "options": [
          "nicest",
          "biggest"
        ],
        "answers": [
          "biggest"
        ],
        "explanation": "It is the biggest of the three balls.",
        "image": "assets/images/page4-img3-507x250.png",
        "points": 1
      },
      {
        "id": "I3",
        "type": "choice",
        "prompt": "3. The black tower is the ___.",
        "options": [
          "tallest",
          "shortest"
        ],
        "answers": [
          "tallest"
        ],
        "explanation": "The black tower is taller than the other towers.",
        "image": "assets/images/page4-img2-440x220.png",
        "points": 1
      },
      {
        "id": "I4",
        "type": "choice",
        "prompt": "4. The car is the ___.",
        "options": [
          "fastest",
          "oldest"
        ],
        "answers": [
          "fastest"
        ],
        "explanation": "Of the car, scooter, and skates, the car is the fastest.",
        "image": "assets/images/page4-img4-440x220.png",
        "points": 1
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Write the words in the correct order.",
    "note": "Make one complete sentence from each group of words.",
    "points": 6,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. train / slowest / The / the / is",
        "answers": [
          "The train is the slowest.",
          "The train is the slowest"
        ],
        "explanation": "The correct order is: The train is the slowest.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. man / the / tallest / That / is",
        "answers": [
          "That man is the tallest.",
          "That man is the tallest"
        ],
        "explanation": "The correct order is: That man is the tallest.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. the / juiciest / This / is / orange",
        "answers": [
          "This orange is the juiciest.",
          "This orange is the juiciest"
        ],
        "explanation": "The correct order is: This orange is the juiciest.",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "4. is / boy / youngest / the / The",
        "answers": [
          "The boy is the youngest.",
          "The boy is the youngest"
        ],
        "explanation": "The correct order is: The boy is the youngest.",
        "image": "",
        "points": 1
      },
      {
        "id": "J5",
        "type": "input",
        "prompt": "5. fastest / car / is / the / My",
        "answers": [
          "My car is the fastest.",
          "My car is the fastest"
        ],
        "explanation": "The correct order is: My car is the fastest.",
        "image": "",
        "points": 1
      },
      {
        "id": "J6",
        "type": "input",
        "prompt": "6. bike / the / His / nicest / is",
        "answers": [
          "His bike is the nicest.",
          "His bike is the nicest"
        ],
        "explanation": "The correct order is: His bike is the nicest.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Write the questions. Then look and write the answers.",
    "note": "Use Is + subject + the + superlative adjective.",
    "points": 4,
    "questions": [
      {
        "id": "K1",
        "type": "paired",
        "points": 2,
        "prompt": "1. girl / Is / the / the / shortest",
        "image": "assets/images/page4-img5-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Is the girl the shortest?",
              "Is the girl the shortest"
            ],
            "explanation": "The complete question is: Is the girl the shortest?"
          },
          {
            "key": "answer",
            "label": "Answer",
            "type": "input",
            "answers": [
              "Yes, she is.",
              "Yes, she is",
              "Yes she is.",
              "Yes she is"
            ],
            "explanation": "The girl is shorter than both boys, so the answer is Yes, she is."
          }
        ]
      },
      {
        "id": "K2",
        "type": "paired",
        "points": 2,
        "prompt": "2. the / ball / Is / heaviest / the",
        "image": "assets/images/page4-img6-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Is the ball the heaviest?",
              "Is the ball the heaviest"
            ],
            "explanation": "The complete question is: Is the ball the heaviest?"
          },
          {
            "key": "answer",
            "label": "Answer",
            "type": "input",
            "answers": [
              "No, it isn't.",
              "No, it isn't",
              "No it isn't.",
              "No it isn't",
              "No, it is not.",
              "No, it is not",
              "No it is not.",
              "No it is not"
            ],
            "explanation": "The book is heavier than the ball, so the answer is No, it isn't."
          }
        ]
      }
    ]
  }
];
