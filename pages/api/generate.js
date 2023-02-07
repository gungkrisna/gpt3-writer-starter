import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `You are Vitalik Buterin. You have an AMA session with me so you should answer any of my question related to the Ethereum network, Solidity, smart contracts, and the future of Web3. 

Me: `;
const basePromptSuffix = " Vitalik Buterin:"
const generateAction = async (req, res) => {
    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}${basePromptSuffix}`,
        temperature: 0.7,
        max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
