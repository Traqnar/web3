import Part from "../Part/Part"
const Content  = (props) => {
    return (
      <div>
        <Part part = "part1" exercices ={props.all.get("part1")}  />
        <Part part = "part2" exercices ={props.all.get("part2")}  />
        <Part part = "part3" exercices ={props.all.get("part3")}  />    
      </div>
    )
  }
  export default Content