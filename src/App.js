import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { messaging } from './firebase';
import { getToken, onMessage } from 'firebase/messaging'
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';


function App() {
  async function requestPermission() {
    console.log('Requesting permission...');
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: 'BKBpE8WWcXbz6veJVA2e8sCcR59HPsBLkqlZmOrzGFBup52TUXCGdPqVbXrYB1goTqcO7ef7a2rGoX3De5EESeM' })
      if (token) {
        console.log(token)
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }
    else {
      alert('you denied permission')
    }
  }
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    requestPermission()
    console.log("reload")
    // alert('new notification')
  }, [])

  onMessage(messaging, (payload) => {
    console.log("payload", payload)
    alert('new notification')
  })
  const [notification, setNotification] = useState({
    title: "Test",
    message: "This is notification"
  })
  async function handleClick(e) {
    e.preventDefault();
    const { title, message } = notification

    const res = await fetch(
      'https://fir-demo-193d7-default-rtdb.firebaseio.com/demo.json',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, message })
      }
    )
  }
  const [firstArray, setFirstArray] = useState(['red', 'pink', 'blue'])
  const [secondArray, setSecondArray] = useState(['orange', 'black', 'yellow'])
  const [startElement,setStartElement]= useState("")
  const handleDragEnd = (event) => {
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    if (elemBelow.id == 'secondelement' && elemBelow.id!=startElement) {
      setFirstArray((prevArray) => {
        console.log(prevArray, "before");
        let newArray = prevArray.filter((element, index) => element != event.target.outerText)
        console.log(newArray, "after");
        return (newArray)
      })
      setSecondArray((prevArray) => [...prevArray, event.target.outerText])
    }

  if (elemBelow.id == 'firstelement' && elemBelow.id!=startElement) {
    setSecondArray((prevArray) => {
      console.log(prevArray, "before");
      let newArray = prevArray.filter((element, index) => element != event.target.outerText)
      console.log(newArray, "after");
      return (newArray)
    })
    setFirstArray((prevArray) => [...prevArray, event.target.outerText])
  }
};
  const handleDrag = (event) => {
    // console.log(event)

  };
  const handleDragStart = (event) => {
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    setStartElement(elemBelow.id)
    console.log(elemBelow.id)
  };

  const handleDrop = (event) => {
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    setStartElement(elemBelow.id)
    console.log(elemBelow.id)
  };
  
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <form method='post'>
          <button onClick={handleClick}>Submit</button>
        </form> */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "80vw" }}>
          <FirstComponent handleDrop={handleDrop} handleDrag={handleDrag} firstArray={firstArray} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} x={x} y={y} />
          <SecondComponent handleDrop={handleDrop} handleDrag={handleDrag} secondArray={secondArray} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} x={x} y={y} />
        </div>
      </header>
    </div>
  );
}

export default App;
