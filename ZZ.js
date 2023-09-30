// Do not remove nor make any changes in  main() function
function main() {
    var scores = readLine().split(" ").map(x => parseInt(x));
    console.log(distributeGrades(scores));
}
function distributeGrades(scores) {
  // Your code goes here
  const gradecount = {
      A:0,
      B:0,
      C:0,
      D:0,
      F:0
  }
    for(let score of scores){
        if(score>=90){
            gradecount.A++
        }
        else if (score>=80) {
            gradecount.B++
}
        else if(score>=70){
             gradecount.C++
       }
        else if(score>=60){
            gradecount.D++

        }
        else{
            gradecount.F++
        }

    }
 return gradecount;
}