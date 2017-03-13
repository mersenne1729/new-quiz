 /********************************************
                       Step 1 define global variables and objects
                       *********************************************/
 var questionsArray = [
    //Question 1
     {
         questionText: 'Who was the father of Romulus and Remus?',
         questionChoices: ['King Numitor', 'Mars', 'Jupiter', "A wolf"],
         questionCorrectChoice: 1,
         correctDetails: 'Mars. Romulus and Remus were the sons of Mars and Rhea Silva, a daughter of King Numitor. Numitor had been deposed by his younger brother, who made the daughter a Vestal Virgin to prevent the generation of any avengers. But Mars intervened and the resulting twins, having been cast into the Tiber and suckled by a she wolf on the way, eventually restored their grandfather, before going on to found the first walled city of Rome on the Capitoline. Jupiter was the sovereign god of the Romans, and chief dedicatee of the later temple on the peak of the Capitol – some of whose remains can still be seen in the Capitoline Museum – but Roman myth did not make him father to Romulus and Remus.'
    },

    //Question 2
     {
         questionText: 'Which was the first Roman road – and where did it run?',
         questionChoices: ['Via Flaminia', 'Via Egnatia', 'Via Appia', "Via Valeria"],
         questionCorrectChoice: 2,
         correctDetails: 'Via Appia. The Via Appia – Appian Way – was constructed in 312 BC and ran originally from Rome to Capua in Campania, one of the most loyal of Rome’s allies in the Samnite Wars [fought over half a century between the early Roman Republic, vying for control of Italy, and the tribes of Samnium]. The Via Valeria was built in 307 BC, between Tibur and Corfinium, while the Via Flaminia followed in 220 BC, connecting Rome to Rimini on the north Adriatic coast. The Via Egnatia was built in c130 BC across the northern Balkans from the Adriatic to Byzantium (later Constantinople).'
    },

    //Question 3
     {
         questionText: 'Which enemy city did the Romans plough with salt?',
         questionChoices: ['Corinth', 'Carthage', 'Syracuse', "None"],
         questionCorrectChoice: 3,
         correctDetails: 'The answer is none. Thanks to 19th-century tale-telling, the myth became widespread (unconsciously fostered too by me in my book The Fall of Rome) that Scipio Africanus ploughed the territory of Carthage with salt after its final destruction in 146 BC. The story was based on Judges 9:45 recording Abimelech’s treatment of Shechem, but no ancient source records that this was done even in the case of Rome’s arch-enemy. Corinth was also utterly destroyed in 146 BC in the culmination of the Macedonian wars, which saw Rome take control of Greece and the southern Balkans. Syracuse, meanwhile, was sacked by Rome in 211 BC after a two-year siege.'
    },

    //Question 4
     {
         questionText: 'Which of the following did not defeat Mithridates VI of Pontus?',
         questionChoices: ['Marius', 'Sulla', 'Lucullus', "Pompey"],
         questionCorrectChoice: 0,
         correctDetails: 'Marius. King Mithridates VI Eupator Dionysius of Pontus (120–63 BC) was the greatest Roman bogeyman of his generation. Deploying an astute mixture of diplomacy and violence, he swept out of the Pontus [located in modern-day northeastern Anatolia, Turkey] to take control of Asia Minor and Greece during the First Mithridatic War, which also saw the Asian Vespers: his massacre of resident Roman merchants and citizens. Marius’s famous meeting with Mithridates in 99/98 BC made it clear that war was inevitable, but Marius never led a Roman army against the king. Sulla won victories over Mithridates’s forces in Greece from 87 BC, Lucullus pushed his forces out of Pontus into Armenia in 73 BC, while Pompey drove him north of the Black Sea into his final Crimean redoubt after 68 BC, where he would eventually meet his death.'
    },

    //Question 5
     {
         questionText: "How many times was Rome sacked in antiquity?",
         questionChoices: ['Once', 'Twice', 'Three or four', "Six"],
         questionCorrectChoice: 2,
         correctDetails: 'Three or four. Rome was sacked three times: by the Gauls in 390 BC, by Alaric’s Goths in AD 410, and by the Vandal-Alan forces of Geiseric in AD 455. But there was still an (eastern) Roman emperor on the throne in AD 546 when Totila’s Goths sacked the city again. Arab raiders got as far as the outskirts of the city in AD 846, and the city would also be sacked by the Normans of Robert Guiscard in 1084, and by the troops of the Emperor Charles V in 1527.'
    },

    //Question 6
     {
         questionText: 'Why was Julius called ‘Caesar’?',
         questionChoices: ['He was born by Caesarean section', 'He liked fried bread in his salad', 'Because an ancestor had killed a Carthaginian elephant in the Punic Wars', "Because an ancestor had hair issues"],
         questionCorrectChoice: 3,
         correctDetails: 'You deserve some credit if you went for the third option, because Julius Caesar himself seems to have propagated a derivation from the Punic word caesai for elephant to add grandeur to his ancestry. The correct answer is, however, hair issues: most scholars think that it simply derives from the Latin expression Caesar meaning hairy, but it is unclear whether the epithet originally had straightforward or ironic connotations. Pliny the Elder originated the idea that Caesar was born by Caesarean section, but this had no basis in reality.'
    },

    //Question 7
     {
         questionText: 'How many heirs did Augustus lose before his death on 19 August AD 14?',
         questionChoices: ['Three', 'Four', 'Five', "Six"],
         questionCorrectChoice: 2,
         correctDetails: 'The answer is five. Augustus had no son, so his sole daughter, Julia, was the initial key to succession. Her first husband, Augustus’s nephew, Marcellus, died in 23 BC; her second, Augustus’s great ally, Agrippa, in 12 BC. This second marriage produced five children, but of the three boys, Lucius and Gaius in AD 2 and 4 respectively, while Postumus Agrippa fell into exile and disgrace in AD 6 or 7. At that point, Augustus recalled his only surviving stepson, Tiberius, from exile, and formally adopted him as his heir. Tiberius eventually succeeded in AD 14. You deserve some credit if you answered six, because Tiberius had a brother, Drusus, to whom Augustus had also shown great favour before his death in 9 BC, a month after falling from his horse.'
    },

    //Question 8
     {
         questionText: 'Which of the following did NOT die in battle in Mesopotamia?',
         questionChoices: ['Crassus', 'Gordian III', 'Valerian', "Julian"],
         questionCorrectChoice: 2,
         correctDetails: 'Valerian. The emperor Valerian was captured by Shapur I of Persia in the summer of AD 260 after the battle of Edessa, died in captivity (there are varying stories as to how this happened), and was then flayed, pickled and possibly stuffed. Marcus Licinius Crassus was killed by the Persians at the battle of Carrhae in 53 BC; Gordian III died in AD 244 (according to Persian sources at the battle of Misiche near modern Fallujah); and Julian was fatally wounded in a skirmish in June AD 363 near Maranga.'
    },

    //Question 9
     {
         questionText: 'What did Constantine see in the sky?',
         questionChoices: ['A cross', 'Apollo', 'The words ‘in this sign conquer’', "All or none"],
         questionCorrectChoice: 3,
         correctDetails: 'All or none! The panegyrist of AD 310 records that Constantine was granted a vision of the sun god Apollo on visiting “the most beautiful temple in the world” in Gaul the previous year. Eusebius recorded in his Life of Constantine that the emperor saw a cross and an inscription en route to the Milvian Bridge in 312. Some modern scholars have attempted to rationalise these obvious references to divine support by supposing that Constantine had an encounter with a solar halo, which he subsequently explained in a variety of ways.'
    },

    //Question 10
     {
         questionText: 'Which of the following emperors did not win a victory against the Goths?',
         questionChoices: ['Julian', 'Valens', 'Theodosius I', "Justinian"],
         questionCorrectChoice: 0,
         correctDetails: 'Julian. The emperor Valens (364–78) was famously killed in battle against the Goths at Hadrianople in August AD 378, but he had earlier waged a separate campaign against them north of the Danube between AD 369 and 372, which he claimed as a victory. Theodosius I claimed victory over the Goths as a result of his campaigns in the years 379–82, even though they ended a negotiated peace, and Justinian’s armies extinguished the Ostrogothic kingdom in Italy in nearly 20 years of warfare from AD 536. Julian the Apostate (Augustus 360–63) contemplated a Gothic campaign, we are told, but put it aside to invade Persia.'
    }
];

 var currentQuestionNumber = 0;
 var totalNumberOfQuestion = questionsArray.length;
 var totalNumberOfCorrectAnswers = 0;


 /********************************************
 Step 2 define functions
 *********************************************/


 //functiona to display questions
 function questionDisplay() {

     //1 - update the each question text
     $('.question-text').text(questionsArray[currentQuestionNumber].questionText);

     //2 - display the what are the choices for the current question
     //2.1 - first delete all the existing choices before populating it with new ones
     $('#choices').empty();
     //2.2 - the get the total number of choices for the current question
     var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
     //2.3 - loop through all the choices and append them to the choices container
     for (var i = 0; i < totalNumberOfChoices; i++) {
         //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
         var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
         //2.3.2 append that row to the choices container in html
         $('#choices').append(buildEachChoiceHTML);
     }



     //3 - displays the number of the current question
     $('.question-count').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
 }



 /********************************************
 Step 3 use functions and objects
 *********************************************/

 $(document).ready(function () {
     /*--- Hide quiz and result section on load ---*/
     $('.question-page').hide();
     $('.feedback-page').hide();

     //start the quiz and show the first question
     $('#startQuizButton').click(function () {
         $('.start-page').hide();
         $('.feedback-page').hide();
         $('.question-page').show();
         questionDisplay();
     });

     //show question page and hide everyting else
     $('.question-page').on('click', '.option', function () {

         //get the question answer from the user
         var userAnswer = $("input[class='option']:checked").val();
         //get the correct answer from the questionsArray above
         var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
         //compare the user answer with the correct answer
         if (userAnswer == correctAnswer) {
             //if the answer was correct increment the total number of correct answers
             totalNumberOfCorrectAnswers++;
             console.log(totalNumberOfCorrectAnswers);
         }
         $('.results-text').append("<h5>Q: " + questionsArray[currentQuestionNumber].questionText + "</h5>");
         $('.results-text').append("<h6>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h6>");

         //if quiz is finished, show result-section
         if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

             $('#finalScore').text("Your score is " + totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);
             $('.start-page').hide();
             $('.feedback-page').show();
             $('.question-page').hide();
         }
         //else continue to next question
         else {
             //increment the current question number
             currentQuestionNumber++;
             //display the following question
             questionDisplay();
         }


     });

     //show feedback page and hide everyting else
     $('.restart-game').click(function () {
         $('.start-page').show();
         $('.feedback-page').hide();
         $('.question-page').hide();
         //reset variables to start quiz again
         currentQuestionNumber = 0;
         totalNumberOfCorrectAnswers = 0;

     });



 });
