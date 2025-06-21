/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function leftToRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function RightToLeft(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}
function main(){
   leftToRight();
   RightToLeft();
   leftToRight();
   RightToLeft();
   leftToRight();
}
   