import BlogTile from "./Components/BlogTile";
import Button from "./Components/Button"


function App() {
  return (
  
    <div>
    <Button
    onClick={() => console.log("Button Clicked")}
    color="blue" 
    text="Submit"
   
    />

    <Button
    onClick={() => console.log("2nd Button")}
    color="red"
    text="hii"
    
    />

    <BlogTile 
  
    date={new Date().toISOString}
    title="New Blog"
    intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae excepturi id accusamus. Explicabo excepturi voluptate beatae repellendus, totam quod dicta eveniet? Possimus, voluptates reiciendis! Ab corporis dicta corrupti est ut!"
    />
    </div>

  );
}

export default App
