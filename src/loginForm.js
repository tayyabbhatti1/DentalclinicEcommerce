import React, { Component } from 'react';
import Joi from 'joi-browser';

class LoginForm extends Component {
    state = {
        details: { username: "", password: "" }
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    handleChange = e => {
        const clone = { ...this.state.details };
        clone[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ details: clone });
    };

    hanleValidate = () => {
        const result = Joi.validate(this.state.details, this.schema, {});

        if (!result.error) return null;

        const errors = {};

        result.error.details.map(d => (
            errors[d.path[0]] = d.message
        ));
        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();
        const error = this.hanleValidate();
        this.setState({ errors: error || {} })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control"
                            value={this.state.details.username}
                            name="username"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" value={this.state.details.password}
                            name="password"
                            onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary form-control">LogIn</button>
                </form>

            </div>
        );
    }
}

export default LoginForm;