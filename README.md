# AMA GPT-3 
This repository is a fork of the [build your own AI writing assistant w/ GPT-3](https://buildspace.so/builds/ai-writer) project. This particular repository has been built to simulate AMA with VB.

## Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/gungkrisna/vb-gpt.git
```

2. Navigate to the root directory of the project:
```
cd gpt-3-ama
```

3. Install the dependency
```
yarn install
```

4. Set up the environment variables. You will need to sign up for an OpenAI API key and add it to a .env file in the root directory of the project:
```
echo "OPENAI_API_KEY=<your_openai_api_key>" >> .env
```

5. Start the development server:
```
yarn dev
```