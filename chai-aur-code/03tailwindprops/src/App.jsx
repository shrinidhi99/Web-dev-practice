import './App.css';
import Card from './components/Card';

function App() {
  let users = { username: 'Shrinidhi' };
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username='chai aur code' btnText="Click Me" />
      <Card username='coffee aur code' />
    </>
  )
}

export default App
