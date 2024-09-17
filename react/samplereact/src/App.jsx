import Message from "./components/Message";
import Navbar from "./components/Navbar";
import Array from "./components/array";

function App(){
  const items = ["Vanakam", "da", "Mapla"];
  return (
  <>  
    <Navbar />
    <Message />
    <Array items={items} />
  </>
  )
}
export default App;