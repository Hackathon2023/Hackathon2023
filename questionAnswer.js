/* TODO
Create class question(text: String, qa: list[String] = [text], upvotes, timestamp)
have questions in two parts: text on main, a 
upvote downvote aggregatte

new page of answer
*/


class Question {

  constructor(question, course, timestamp, answers = [], downvotes = 0, upvotes = 0)
  {
    //sets constants, then variables
    THRESHOLD = -5;
    this.answers = answers;
    this.text = question;
    this.timestamp = timestamp;
    this.course = course;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    
  }

  isAnswered(){
    if(this.answers == []){
      return false;
    } 
    return true;
  }
  
  onClick(click){
    //TODO
    return 

  }
  addAnswer(answer){
    this.answers.push(new Answer(answer));
  }
  getCourse(){
    return this.course;
  }
  aggregate(){
    return this.upvotes - this.downvotes;
  }
  tooLow(index){
    result = this.answer;
    if(result[index].aggregate() <= THRESHOLD){
      result.splice(index,1);
      this.answers = result;
    }
  }
}

class Answer{
  constructor(text, upvotes = 0, downvotes = 0)
  {
    this.text = text;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }
  aggregate(){
    return this.upvotes - this.downvotes;
  }
}

