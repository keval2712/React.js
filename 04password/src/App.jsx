import './App.css';
import { useState, useCallback, useEffect ,useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //userff
  const passwodref=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()-_=+\\|[]{};:/?.>";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow,setPassword]);

  const copyPasstoclipbord=useCallback(()=>
    {
      passwodref.current?.select();
      passwodref.current?.setSelectionRange(0,3);
      window.navigator.clipboard.writeText(password)

    },[password])
 
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700 flex flex-col items-center'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 py-5 w-full'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded' placeholder='Password will appear here' readOnly ref={passwodref}/>
          <button  onClick={copyPasstoclipbord}className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 w-full'>
          <div className='flex items-center gap-x-1 w-full'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer w-full' onChange={(e) => setLength(Number(e.target.value))} />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={numAllow} id="numberInput" onChange={() => setNumAllow(prev => !prev)} />
            <label htmlFor="numberInput" className='text-white'>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={charAllow} id="charInput" onChange={() => setCharAllow(prev => !prev)} />
            <label htmlFor="charInput" className='text-white'>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
