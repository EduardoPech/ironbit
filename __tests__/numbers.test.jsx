import { getNumberPrime } from "../utils/primeNumbers";
import { getMultipleOfThree } from "../utils/multipleOfThree";

describe("primeNumbers", () => {
  it("should return an prime number", () => {
    const primeNumbersArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    for (let i = 1; i <= 10; i++) {
      expect(getNumberPrime(i)).toEqual(primeNumbersArray[i - 1]);
    }
  });
});

describe("multipleOfThree", () => {
  it("should return the number multiple of three in that term", () => {
    for (let i = 1; i <= 10; i++) {
      expect(getMultipleOfThree(i) % 3).toEqual(0);
    }
  });
});
