//change 5 to the total number of questions
var total=7
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wahoo!"
compliments[1]="Super!"
compliments[2]="Amazing!"
compliments[3]="AWESOME."
compliments[4]="Perfect!"
compliments[5]="Yippee!"
compliments[6]="Yessss!"
compliments[7]="You're on FIRE!"
compliments[8]="FABULOUS!"
compliments[9]="You ROCK!"
compliments[10]="Yabadabadoo!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What does ADA stand for?"
choice1[1]="Accessible Design Association"
choice1[2]="Americans with Disabilities Act"
choice1[3]="American Digital Accessibility"
choice1[4]="Association for Disability Awareness"

question[2]="Who is responsible for making websites accessible?"
choice2[1]="Only web developers"
choice2[2]="Only people with disabilities"
choice2[3]="Only the website owner"
choice2[4]="Anyone involved in designing, developing, or maintaining websites"

question[3]="How do people with vision impairments navigate websites without seeing the screen?"
choice3[1]="Seeing eye dogs"
choice3[2]="Audio recorders"
choice3[3]="Screen readers"
choice3[4]="Voice amplifiers"

question[4]="What makes good alternative text?"
choice4[1]="A detailed list of everything in the image"
choice4[2]="The image's file name"
choice4[3]="A description that starts with 'Image of' every time"
choice4[4]="A clear, concise description of the image and its purpose"

question[5]="Which is NOT an important consideration when choosing accessible website colors?"
choice5[1]="Contrast between text and background"
choice5[2]="How colors appear to people with color blindness"
choice5[3]="Whether the colors look good together"
choice5[4]="Whether information relies on color alone"

question[6]="Which is NOT an important accessibility consideration when adding moving or flashing elements to a website?"
choice6[1]="Whether animations use the same style as other website elements"
choice6[2]="Whether users can pause, stop, or hide moving content"
choice6[3]="Whether flashing content could trigger seizures"
choice6[4]="Whether interactive elements can be operated using a keyboard"

question[7]="What is an important thing to remember about website accessibility?"
choice7[1]="Accessibility is primarily about meeting technical requirements rather than improving the user experience"
choice7[2]="Accessibility should be considered throughout a website’s design, development, and maintenance"
choice7[3]="Accessibility only needs to be addressed when a website first launches"
choice7[4]="Automated testing tools are enough to ensure a website is accessible"


solution[1]="b"
solution[2]="d"
solution[3]="c"
solution[4]="d"
solution[5]="c"
solution[6]="a"
solution[7]="b"
