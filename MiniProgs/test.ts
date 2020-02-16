/// <import ="../OpenComputers.d.ts" />
// import * as robot from "robot";

// function test() {
//     return 42;
// }
// function next() {
//     robot.move(2);
//     return {abc: 42};
// }


// function test2(a: number, b: number) {
//     return a + b;
// }
// const m = test2(4, 7);
// robot.forward();

// console.log("hello world", test(), test2(2, 3), m, next());
import * as computer from "computer";
const o = {
    n: 4,
    a: "test4"
};

function testfn(){
    const test = "test";
    console.log(test, o.n, o.a);
    console.log(computer.address());
}

console.log("hello from the lua compiler");
testfn()