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
const Header  = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  )
}
const Content  = (props) => {
  return (
    <div>
      <Part part = "part1" exercices ={props.all.get("part1")}  />
      <Part part = "part2" exercices ={props.all.get("part2")}  />
      <Part part = "part3" exercices ={props.all.get("part3")}  />    
    </div>
  )
}
const Part  = (props) => {
  return (
    <div>
      <p> {props.part}   || exercices : {props.exercices}</p>
    </div>
  )
}
export default App