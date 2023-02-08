import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiKeyInput, setAPIKeyInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apiKeyInput, userInput }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };
  const onPromptChangedText = (e) => {
    setUserInput(e.target.value);
  };
  const onAPIKeyChangedText = (e) => {
    setAPIKeyInput(e.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>VB's Lounge | GPT-3 generated AMA on behave to the mastermind of ETH</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Talk to Vitalik Buterin, the mastermind behind Ethereum</h1>
          </div>
          <div className="header-subtitle">
            <h2>Ask VB anything about the Ethereum network, Solidity, smart contracts, and the future of Web3.</h2>
          </div>
        </div>
        <div className="container body-container">
          <div className="field-container">
            <input
              className="field-box api-key-box"
              placeholder="OPENAI_API_KEY"
              value={apiKeyInput}
              onChange={onAPIKeyChangedText}
            />;
          </div>
          <div className="field-container">
            <textarea
              className="field-box"
              placeholder="What would you like to ask VB?"
              value={userInput}
              onChange={onPromptChangedText}
            />;
          </div>
        </div>
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
      </div>
      {apiOutput && (
        <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Output</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
      )}
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
