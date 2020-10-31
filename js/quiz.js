window.onload = function() {
  show(0);

};

let questions = [
  { id: 1,
    question: "What was Tandem previous name?",
    options: ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
    answer: "Devmynd"
  },
  { id: 2,
    question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    options: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana", "Et tu, Brute?"],
    answer: "Et tu, Brute?"
  },
  { id: 3,
    question: "A group of tigers are referred to as:",
    options: ["Chowder", "Pride", "Destruction", "Ambush"],
    answer: "Ambush"
  },
  { id: 4,
    question: "What is the top speed an average cat can travel?",
    options: ["42 mph", "13 mph", "9 mph", "31 mph"],
    answer: "31 mph"
  },
  { id: 5,
    question: "A cat can jump to _____ times its own height:",
    options: ["3", "9", "7", "5"],
    answer: "5"
  },
  { id: 6,
    question: "What is the only letter that doesn't appear in a US state name?",
    options: ["M", "Z", "X", "Q"],
    answer: "Q"
  },
  { id: 7,
    question: "What is the name for a cow-bison hybrid?",
    options: ["Cowson", "Bicow", "Mooson", "Beefalo"],
    answer: "Beefalo"
  },
  { id: 8,
    question: "What is the largest freshwater lake in the world?",
    options: ["Lake Baikal", "Lake Michigan", "Lake Victoria", "Lake Superior"],
    answer: "Lake Superior"
  },

  { id: 9,
    question: "In a website address bar, what does WWW stand for?",
    options: ["Wild Wild West", "War World Web", "World Wide Web", "web world wide"],
    answer: "World Wide Web"
  },
  { id: 10,
    question: "In a game of bingo, what number is represented by the name two little ducks?",
    options: ["20", "55", "77", "22"],
    answer: "22"
  },
  { id: 11,
    question: "According to Greek mythology, who was the first woman on Earth?",
    options: ["Lilith", "Eve", "Hera", "Pandora"],
    answer: "Pandora"
  },
  { id: 12,
    question: "In which European city would you find Orly airport?",
    options: ["London", "Belgium", "Munich", "Paris"],
    answer: "Paris"
  },
  { id: 13,
    question: "Where would you find the Sea of Tranquility?",
    options: ["California", "Siberia", "China", "The Moon"],
    answer: "The Moon"
  },
  { id: 14,
    question: "Which artist painted 'Girl with a Pearl Earrin'?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Vermeer"],
    answer: "Vermeer"
  },
  { id: 15,
    question: "What is the official name for the 'hashtag' symbol?",
    options: ["Number sign", "Hash Sign", "Pound", "Octothorpe"],
    answer: "Octothorpe"
  },
  { id: 16,
    question: "Not American at all, where is apple pie from?",
    options: ["Japan", "Ethiopia", "Canada", "England"],
    answer: "England"
  },
  { id: 17,
    question: "What is the national animal of Scotland?",
    options:["Bear", "Rabbit", "Seal", "Unicorn"],
    answer: "Unicorn"
  },
  { id: 18,
    question: "Where in the world is the only place where Canada is *due south*",
    options: ["Alaska", "Russia", "Washington", "Detroit"],
    answer: "Detroit"
  },
  { id: 19,
    question: "Approximately how many grapes go into a bottle of wine?",
    options: ["500", "200", "1000","700"],
    answer: "700"
  },
  { id: 20,
    question: "How much does a US One Dollar Bill cost to make?",
    options: ["$0.25", "$1", "$5", "$0.05"],
    answer: "$0.05"
  },
  { id: 21,
    question: "The Vatican bank has the only ATM in the world that allows users to do what?",
    options: [
      "Receive withdrawls in rosary beads",
      "Vote for the Pope",
      "Purchase indulgences",
      "Perform transactions in Latin"
    ],
    answer: "Perform transactions in Latin"
  }
]


function submitForm(e){
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  // store player name
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";
}
 let question_count = 0;
 let point = 0;

function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    point += 10;
    sessionStorage.setItem("points", point);
  }

  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "end.html";
    return;
   }
  // console.log(question_count);
  console.log(point);
  question_count++;
  show(question_count);
}

 function show(count) {
  let question = document.getElementById("questions");
  // let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${question_count+1} ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${questions[count].options[0]}</li>
  <li class="option">${questions[count].options[1]}</li>
  <li class="option">${questions[count].options[2]}</li>
  <li class="option">${questions[count].options[3]}</li>
</ul> 
  `;
  toggleActive();
}

// when we click on li so make the li active
function toggleActive() {
  // select all options
  let option = document.querySelectorAll("li.option");
  // we loop through the options and put onclick on any of them that is selected
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        // if there is an active option so remove it
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
