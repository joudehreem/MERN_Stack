
import Card from './PersonCard.jsx'
function App() {

  return (
    <>
      <Card firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
      <Card firstName="Smith" lastName="John" age={88} hairColor="Brown" />
      <Card firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
      <Card firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
    </>
  )
}

export default App
