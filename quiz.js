document.addEventListener('DOMContentLoaded', function () {
    // Array that holdss the questions and answers 
    const quizData = [
        {
            question: "Which of this a part of a computer?",
            options: ["Calculator", "Pen Drive", "Phone", "Moniter"],
            correct: "Moniter"
        },
        {
            question: "What is the primary use of the computer Keyboard?",
            options:["Typing", "Clicking", "Storing data", "Pointing"],
            correct: "Typing"
        }, 
        {
            question: "What is the use of a mouse",
            options: ["Clicking", "typing", "Eating", "cooking"],
            correct: "Clicking"
        }, 
        {
            question: "What is the brain of the computer?",
            options: ["Motherboard", "Keyboard", "CPU", "RAM"],
            correct: "CPU"
        }
        // Add more questions here
    ];

    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result');

    // Display the questions on the page
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionLabel = document.createElement('label');
        questionLabel.innerText = `${index + 1}. ${item.question}`;
        questionDiv.appendChild(questionLabel);

        item.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'form-check';

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionInput.className = 'form-check-input';

            const optionLabel = document.createElement('label');
            optionLabel.innerText = option;
            optionLabel.className = 'form-check-label';

            optionDiv.appendChild(optionInput);
            optionDiv.appendChild(optionLabel);

            questionDiv.appendChild(optionDiv);
        });

        quizQuestionsContainer.appendChild(questionDiv);
    });

     
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let score = 0;
        let totalQuestions = quizData.length;
   
        // Loop throug the questions and check answers
        quizData.forEach((item, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === item.correct) {
                score++;
            }
        });
        childName = document.getElementById('name').value;
        if (score > 2) {
            Swal.fire({
                icon:"success",
                title:`🙏 ${score} out of ${totalQuestions}`,
                html: ` ${childName} Nice job keep it up.`
           })  
        }
        else {
            Swal.fire({
                icon: "error",
                title: `🤣 ${score} out of ${totalQuestions}`,
                html: `${childName} not bad keep trying.`
            })
             
        }
        
    });
});
