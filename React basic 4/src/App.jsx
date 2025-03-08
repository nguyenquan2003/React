import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button (css theo module)/Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
    <Header/>
    <Food/>
    <Button/><br/>
    <Card/>
    <Footer/>
    <Student name="Nguyen Van A" age={30} isStudent={true}/>
    <Student name="Nguyen Thi B " age={40} isStudent={false}/>
    <Student/>
    </>
  );
}

export default App