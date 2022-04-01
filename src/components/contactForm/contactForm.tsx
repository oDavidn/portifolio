import React, {useRef, useState} from "react";

const ContactForm = () => {
    const [formSent, setFormSent] = useState(false)
    const [formContent, setFormContent] = useState({
        email:"",
        name:"",
        message:"",
    })
    const [errorMsg, setErrorMsg] = useState(false)

    const resetForm = () =>{
        setFormContent({email:'', message: '', name: ''})
    }

    const inputChange = (e:any) => {
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e :any) =>{


        fetch('https://formsubmit.co/ajax/0d4a65b9d8079e2eef27da8b90e1bb79',
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formContent)})
            .then(response => {
                response.json()
                setFormSent(true)
                resetForm()
            })
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
                setErrorMsg(true)
            });


    }

    return <div className="content">
        <div className="section contact-form-section">
            <div className="form-title">
                <h1 className="has-text-centered">Obrigado por retirar um tempo para me contactar. <br/>
                    Como posso te ajudar hoje?
                </h1>
            </div>
            <form id="contact-form">
                <div className="columns is-centered">
                    <div className="column">
                        <div className="field">
                            <label className="label">Nome</label>
                            <div className="control">
                                <input className="input" type="text" name="name"
                                       value={formContent.name} onChange={inputChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" name="email"
                                       value={formContent.email} onChange={inputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">Mensagem</label>
                            <div className="control">
                                <textarea className="textarea" name="message" value={formContent.message} onChange={inputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-response" >
                    {formSent && <p className="success-msg has-text-centered">Mensagem enviada com sucesso! Muito obrigado por entrar em contato. <br/> Estarei respondendo assim que possível!</p> }
                    {errorMsg && <p className="error-msg has-text-centered">Ocorreu um erro ao enviar o formulário. Entre em contato diretamente através do seguinte Email: OliveiraDavidNunes@gmail.com</p>}
                </div>
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <div className="field">
                            <div className="control">
                                <div className="button is-outlined is-medium is-fullwidth is-rounded" onClick={handleSubmit}>
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default ContactForm