import React, { useState } from "react";
import { getNumberPrime } from "../utils/primeNumbers";

interface Props {
  type: string;
  setType: (type: string) => void;
  setNumber: (number: number) => void;
  calculate: (event: any) => void;
}

export default function Form({ type, setType, setNumber, calculate }: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNumber(parseInt(value));
  };

  return (
    <form className="flex flex-col items-center justify-center">
      <label className="text-2xl font-bold text-center">
        ¿Qué serie quieres calcular?
      </label>
      <div className="flex my-5">
        <div className="flex items-center pl-4 border border-gray-200 rounded mr-5">
          <input
            id="bordered-radio-1"
            type="radio"
            value="prime"
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            onChange={() => setType("prime")}
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full py-4 px-2 ml-2 text-sm font-medium text-gray-900"
          >
            Números primos
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded ">
          <input
            id="bordered-radio-2"
            type="radio"
            value="multiple"
            name="bordered-radio"
            onChange={() => setType("multiple")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 px-2 ml-2 text-sm font-medium text-gray-900 "
          >
            Múltiplos de 3
          </label>
        </div>
      </div>
      <label className="text-2xl font-bold text-center">
        Calcula el n-esimo número de las sucesiones.
      </label>
      <input
        onChange={onChange}
        className="w-1/2 p-2 m-2 text-center border-2 border-gray-400 rounded-md"
        type="number"
        placeholder="Ingresa un número"
      />
      <button
        disabled={type === ""}
        className="w-1/2 p-2 m-2 text-center border-2 border-gray-400 bg-yellow-300 rounded-md disabled:opacity-25"
        onClick={calculate}
      >
        Calcular
      </button>
    </form>
  );
}
