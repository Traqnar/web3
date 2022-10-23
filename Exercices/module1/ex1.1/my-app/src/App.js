import Header from "./components/Header/Header"
import Content from "./components/Content/Content"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const map1 = new Map();
  map1.set("part1",exercises1);
  map1.set("part2",exercises2);
  map1.set("part3",exercises3);

  return (
    
    <div>
      <Header course={course} />
      <p>
       <Content all = {map1}/>
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}



export default App