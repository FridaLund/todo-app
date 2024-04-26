import List from "../components/List";

const ToDo= () => {
    return (
      <header>
        <div className="container">
        <h1>Wanna add some tasks?</h1>
        <div>
          <List/>
        </div>
        </div>
      </header>
    );
  };
  
  
  export default ToDo;