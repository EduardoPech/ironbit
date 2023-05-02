interface Props {
  text: string;
  result: number;
}

export default function Result({ text, result }: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {result !== 0 && (
        <h2 className="text-3xl">
          {text} {result}
        </h2>
      )}
    </div>
  );
}
