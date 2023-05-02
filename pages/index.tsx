import { Inter } from "next/font/google";
import Form from "../components/Form";
import Result from "../components/Result";
import { useState } from "react";
import { getNumberPrime } from "../utils/primeNumbers";
import { getMultipleOfThree } from "../utils/multipleOfThree";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [result, setResult] = useState(0);
  const [type, setType] = useState("");
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const calculate = (event: any) => {
    event.preventDefault();
    if (type === "prime") {
      const result = getNumberPrime(number);
      setText("El número primo es:");
      setResult(result);
    } else {
      const result = getMultipleOfThree(number);
      setText("El múltiplo de 3 es:");
      setResult(result);
    }
  };

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-center mb-10">Práctica Ironbit</h1>
      <Form
        type={type}
        setType={setType}
        setNumber={setNumber}
        calculate={calculate}
      />
      <Result text={text} result={result} />
    </main>
  );
}
