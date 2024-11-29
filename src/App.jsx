import banner from './assets/images/illustration-article.svg';
import avater from './assets/images/image-avatar.webp'
function App() {

  return (
    <main className="bg-primary w-full flex justify-center
     items-center min-h-screen font-sans">

      <div className=" w-[90%] max-w-[380px] rounded-2xl bg-white p-4 border border-1 border-gray-800 shadow-[8px_8px_black]">
        <div className='w-full rounded-xl overflow-hidden'>
          <img className='w-[100%]' src={banner} alt="banner" />
        </div>

        <div className='mt-5 flex flex-col space-y-4'>
          <div>
               <button className='bg-primary py-1 px-3 rounded-md text-gray-800 font-bold'>Learning</button>
                <p className='text-xs mt-2 font-medium'>Published 21 Dec 2023</p>
          </div>
         
          <article>
            <h2 className='font-bold text-2xl hover:text-primary cursor-pointer'>HTML & CSS foundations</h2>
            <p className=' text-gray-500 mt-3'>
              These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
          </article>
        

        <div>
          <div className='flex items-center space-x-3'>
            <img src={avater} className='size-9' alt="user avater" />
            <p className='font-bold'>Greg Hooper</p>
          </div>
          </div>
      </div>

    </div>
    </main>
  )
}

export default App
