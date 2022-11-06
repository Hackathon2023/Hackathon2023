var currentPage = "login";
var username;
var password;

function changePage(nextPage)
{
    window.location.href = nextPage + ".html";
    currentPage = nextPage;
}

function checkUsername()
{
    let username = getCookie("username");

    if (username == "")
    {
        changePage("login");
    }
}

function checkQuestion()
{
    let question = getCookie("question");
    
    if (question == "")
    {
        changePage("login");
    }
}

checkUsername()

function generateQuestions()
{
    // called when the class is inputted into the questions page
}

function generateAnswers()
{
    // called when a question with answers is clicked on questions page
}

function sendQuestion()
{
    // called when a question is submitted on the questions page
}

function sendAnswer()
{
    // called when an answer is submitted on the answers page
}