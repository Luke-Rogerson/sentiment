/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UprhrZ6D8oM
 */
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function App() {
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
            <Textarea id="message" placeholder="Type your message here." />
          </div>
          <Button className="w-full">Analyze</Button>
        </div>
        <div className="mt-8 bg-white shadow-md rounded-md dark:bg-gray-800">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-2 dark:text-gray-200">
              Analysis Result
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ThumbsUpIcon className="w-6 h-6 fill-green-500" />
                <span className="text-green-500">Positive</span>
              </div>
              <div className="ml-auto text-gray-600 dark:text-gray-400">
                Confidence: 85%
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white shadow-md rounded-md dark:bg-gray-800">
          <div className="p-6 flex items-center justify-center">
            <div className="loader" />
            <span className="ml-4 text-gray-600 dark:text-gray-400">
              Analyzing...
            </span>
          </div>
        </div>
      </div>
      <footer className="mt-auto p-4 text-center text-gray-600 dark:text-gray-400">
        <p>
          Created by{" "}
          <a className="text-blue-500 hover:underline" href="#">
            Luke Rogerson
          </a>
        </p>
      </footer>
    </div>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
