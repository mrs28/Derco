
import './App.css';
import CarPlateEntry from './Components/CarPlateEntry/CarPlateEntry';
import ServiceWorkflow from './Components/ServiceWorkflow/ServiceWorkflow';
import Background from './Components/Background/Background';



function App() {

  return (
<div>

    <CarPlateEntry/>


    <Background>
      <ServiceWorkflow/>
    </Background>

   
    

</div>
   
   
  
  );
}

export default App;
