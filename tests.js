import {
    modifyNumber,
    modifyColor,
    modifyInteger,
    modifyCount,
    kata1,
    kata2,
    kata3,
    kata4,
} from "./code.js";

function kenzieAssert(paramObject) {
    let actual = paramObject.actual;
    let expected = paramObject.expected;
    if (actual === expected) {
        console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
    } else {
        console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`,
            {
                test: paramObject.failureMessage,
                expected: expected,
                actual: actual,
            }
        );
    }
}

console.group("Unit Tests - kata1");
{
    {
        modifyNumber(20);
        kenzieAssert({
            actual: kata1(),
            expected: "It is bigger than 10!",
            testNumber: 1,
            testFunction: "kata1",
            failureMessage: `kata1 should return "It is bigger than 10!" if "number" is over 10`,
        });
    }
    {
        modifyNumber(2);
        kenzieAssert({
            actual: kata1(),
            expected: "",
            testNumber: 2,
            testFunction: "kata1",
            failureMessage: `kata1 should return "" if "number" is equal to or under 10`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - kata2");
{
    {
        modifyColor("blue");
        kenzieAssert({
            actual: kata2(),
            expected: "The sky is blue.",
            testNumber: 1,
            testFunction: "kata2",
            failureMessage: `kata2 should return "The sky is blue." if "color" is blue`,
        });
    }
    {
        modifyColor("red");
        kenzieAssert({
            actual: kata2(),
            expected: "The flower is red.",
            testNumber: 2,
            testFunction: "kata2",
            failureMessage: `kata2 should return "The flower is red." if "color" is red`,
        });
    }
    {
        modifyColor("green");
        kenzieAssert({
            actual: kata2(),
            expected: "The leaf is green.",
            testNumber: 3,
            testFunction: "kata2",
            failureMessage: `kata2 should return "The leaf is green." if "color" is green`,
        });
    }
    {
        modifyColor("orange");
        kenzieAssert({
            actual: kata2(),
            expected: "It is a different color.",
            testNumber: 4,
            testFunction: "kata2",
            failureMessage: `kata2 should return "It is a different color." if "color" is anything other than blue, red, or green`,
        });
    }
    {
        modifyColor(undefined);
        kenzieAssert({
            actual: kata2(),
            expected: "It is a different color.",
            testNumber: 5,
            testFunction: "kata2",
            failureMessage: `kata2 should return "It is a different color." if "color" is anything other than blue, red, or green`,
        });
    }
    {
        modifyColor(999999999);
        kenzieAssert({
            actual: kata2(),
            expected: "It is a different color.",
            testNumber: 6,
            testFunction: "kata2",
            failureMessage: `kata2 should return "It is a different color." if "color" is anything other than blue, red, or green`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - kata3");
{
    {
        modifyInteger(42);
        kenzieAssert({
            actual: kata3(),
            expected: "The number is even.",
            testNumber: 1,
            testFunction: "kata3",
            failureMessage: `kata3 should return "The number is even." if "integer" is even`,
        });
    }
    {
        modifyInteger(73);
        kenzieAssert({
            actual: kata3(),
            expected: "The number is odd.",
            testNumber: 2,
            testFunction: "kata3",
            failureMessage: `kata3 should return "The number is odd." if "integer" is odd`,
        });
    }
}
console.groupEnd();

console.group("Unit Tests - kata4");
{
    {
        modifyCount(13);
        kenzieAssert({
            actual: kata4(),
            expected: "Between 10 and 20!",
            testNumber: 1,
            testFunction: "kata4",
            failureMessage: `kata4 should return "Between 10 and 20!" if "count" is greater than 10 and less than 20`,
        });
    }
    {
        modifyCount(20);
        kenzieAssert({
            actual: kata4(),
            expected: "20 or greater!",
            testNumber: 2,
            testFunction: "kata4",
            failureMessage: `kata4 should return "20 or greater!" if "count" is greater than or equal to 20`,
        });
    }
    {
        modifyCount(333);
        kenzieAssert({
            actual: kata4(),
            expected: "20 or greater!",
            testNumber: 3,
            testFunction: "kata4",
            failureMessage: `kata4 should return "20 or greater!" if "count" is greater than or equal to 20`,
        });
    }
    {
        modifyCount(16);
        kenzieAssert({
            actual: kata4(),
            expected: "16!",
            testNumber: 4,
            testFunction: "kata4",
            failureMessage: `kata4 should return "16!" if "count" is 16`,
        });
    }
    {
        modifyCount(10);
        kenzieAssert({
            actual: kata4(),
            expected: "10 or less!",
            testNumber: 5,
            testFunction: "kata4",
            failureMessage: `kata4 should return "10 or less!" if "count" is less than or equal to 10`,
        });
    }
    {
        modifyCount(2);
        kenzieAssert({
            actual: kata4(),
            expected: "10 or less!",
            testNumber: 6,
            testFunction: "kata4",
            failureMessage: `kata4 should return "10 or less!" if "count" is less than or equal to 10`,
        });
    }
}
console.groupEnd();
