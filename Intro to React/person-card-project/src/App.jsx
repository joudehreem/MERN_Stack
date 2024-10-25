
import Card from './PersonCard.jsx'
import UserForm from './userForm.jsx'
import MovieForm from './MovieForm.jsx'
import MessageForm from './MessageForm.jsx';
import MessageDisplay from './MessageDisplay.jsx';
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  return (
    <>
      <MessageForm onNewMessage={ youveGotMail } />
      <MessageDisplay message={ currentMsg } />
      <MovieForm/>
      <UserForm/>
      <Card  className="card" firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
      <Card firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <Card firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
      <Card firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
    
    </>
  )
}

export default App
