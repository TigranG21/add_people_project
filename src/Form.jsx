import React from "react";
import "./form.css"

class Form extends React.Component{
    initialState = {
        name: "",
        job: ""
    }
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name] : value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){   
        const {name, job} = this.state;
        return(
            <>
            <h2>Add new</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">job</label>
                <input 
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type={"button"} value={"submit"} onClick={this.submitForm} className={"button"} />

            </form>
            </>
        )
    }
}

export default Form