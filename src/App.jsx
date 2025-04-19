import './App.css'

function App() {
  return (
    <>
    <div className='space-y-5 mt-4'>
    <div className='grid grid-cols-12'>
      <div className="bg-blue-400 col-span-4">Hello Moto</div>
      <div className="bg-red-400 col-span-6">Hello Moto</div>
      <div className="bg-green-400 col-span-2">Hello Moto</div>
    </div>
    <div className='bg-amber-500'>
      Hi
    </div>
    <div className="grid grid-cols-12">
      <div className="col-span-5 bg-amber-200">Hi</div>
      <div className="col-span-5 bg-amber-300">Hi</div>
      <div className="col-span-2 bg-amber-400">Hi</div>
    </div>
    </div>
    </>
  )
}


export default App
