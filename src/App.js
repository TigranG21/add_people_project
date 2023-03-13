import React from "react";
import Table from "./Table";
import "./index.css"
import Form from "./Form";

class App extends React.Component{
    state = {
        characters: [],
    }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>Tigo tigo tgioaaaaaa</h1>
                <h1>React Task</h1>
                <h3>Add your info in table</h3>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App