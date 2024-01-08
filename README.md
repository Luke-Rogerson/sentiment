# Sentiment

## What's this?

An example of natural language processing (sentiment analysis) using a pre-trained large language model (LLM) that runs entirely client-side, in your browser.

## Why is that cool?

We're getting closer to LLMs that can run on your average web server, your computer or even your phone, which would enable all sorts of interesting use cases.

Imagine real-time language translation or a personal assistant that runs entirely on your phone, without needing to send any of your data to external servers.

## How do I use it?

Visit [https://luke-rogerson.github.io/sentiment/](https://luke-rogerson.github.io/sentiment/) and enter a statement to see the sentiment (positive or negative) of the statement. It's about 67MB in size, so it may take a while to download, depending on your internet connection.

## How does it work?

The model is [the Xenova/distilbert-base-uncased-finetuned-sst-2-english](https://huggingface.co/Xenova/distilbert-base-uncased-finetuned-sst-2-english), a ~67 million parameter "quantized" (AKA reduced precission) model (for reference [ChatGPT4 is rumoured to have 1.76 trillion parameters](https://en.wikipedia.org/wiki/GPT-4#Background)). It's made possible to run in your browser using JavaScript thanks to [the Hugging Face Transformers.js library](https://huggingface.co/docs/transformers.js/index), which is a port of the Hugging Face Transformers Python library.

The model is downloaded from the [Hugging Face](https://huggingface.co/) model hub and stored in your browser's local cache. The model is then loaded the cache and used to make predictions on the sentiment (positive or negative) of the statement you enter.

## How do I run it locally?

Clone the repo, run `npm install` and then `npm run dev` to start the Vite development server. You can then visit [http://localhost:5173/sentiment/0](http://localhost:5173/sentiment/) to see the app running locally.

## Anything else?

I used Vercel's [v0.dev](https://v0.dev/) AI generative user interface system to scaffold out some of the UI.

My one sentence review: it has a lot of potential (it gave me decent React code), but it was unable to generate anything dynamic (eg. state to store the user's input or the loading bar), so it has a way to go before it's useful for anything other than completely static sites.

You can view my prompts and the generated code [here](https://v0.dev/t/UprhrZ6D8oM).

It's not my finest React or TypeScript code, don't judge me too harshly!
