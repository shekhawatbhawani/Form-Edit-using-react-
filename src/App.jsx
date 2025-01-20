
import './App.css'
import Cards from './components/Cards'
import data from './mockData/mockData'

function App() {
  
  
  return (
   <>
   <div className='flex gap-5 flex-wrap p-6 justify-center'>
    {
      data.map((element,index)=>{
        return <Cards key={index} name={element.name} email={element.email} phone = {element.phone} web = {element.website}/>
       })
    }
   </div>
   </>
  )
}

export default App
