/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UprhrZ6D8oM
 */
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import { Thumbs } from "./components/thumbs";

import { pipeline, env } from "@xenova/transformers";
import { Sentiment } from "./types";

// Skip local model check
env.allowLocalModels = false;

const TASK = "text-classification";
const MODEL = "Xenova/distilbert-base-uncased-finetuned-sst-2-english";

type TextClassificationPipeline = (query: string) => Promise<Result[]>;

type Result = {
  label: Sentiment;
  score: string;
};

export default function App() {
  const [statement, setStatement] = useState("I love this app!");
  const classifier = useRef<TextClassificationPipeline | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  console.log("result :", result);
  const [loading, setLoading] = useState(true);

  const queryModel = useCallback((query: string) => {
    if (!classifier.current) return;
    classifier.current(query).then((res) => {
      setLoading(false);
      setResult(res[0]);
    });
  }, []);

  useEffect(() => {
    (async () => {
      classifier.current = await pipeline(TASK, MODEL);
      queryModel(statement);
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    queryModel(statement);
  }, [statement]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-4 dark:text-gray-200">
        Sentiment Analysis
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
        Enter your text below and receive feedback on the sentiment of your
        statement.
      </p>
      <div className="w-full max-w-md">
        <div className="grid gap-6">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button className="w-full" disabled={loading}>
            Analyze
          </Button>
        </div>

        {!loading && result && statement.length > 0 && (
          <div className="mt-8 bg-white shadow-md rounded-md dark:bg-gray-800">
            <div className="p-6">
              <h2 className="text-lg font-bold mb-2 dark:text-gray-200">
                Analysis Result
              </h2>
              <div className="flex items-center gap-4">
                <Thumbs sentiment={result.label} />
                <div className="ml-auto text-gray-600 dark:text-gray-400">
                  {`Confidence: ${(Number(result.score) * 100).toFixed(2)}%`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="mt-auto p-4 text-center text-gray-600 dark:text-gray-400">
        <p>
          Built by{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.github.com/Luke-Rogerson"
            target="_blank"
          >
            Luke Rogerson
          </a>
          . Check out{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.github.com/Luke-Rogerson"
            target="_blank"
          >
            the source code
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
