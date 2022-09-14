import '../scss/styles.scss';

function Navbar() {
  return (
    <div id="nav">
        <h1>Random Response Generator</h1>
        <p className="quote"><a href="https://openai.com/api/">OpenAI’s API</a> provides access to <a href="https://openai.com/blog/gpt-3-apps/">GPT-3</a>, which performs a wide variety of natural language tasks, and Codex, which translates natural language to code.</p>
    </div>
  )
}

export default Navbar;