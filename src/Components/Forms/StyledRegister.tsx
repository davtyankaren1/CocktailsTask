import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Input from "../Input";
import {FormattedMessage} from 'react-intl';
import Translator from "../languages/translator";
import {useNavigate} from 'react-router-dom'
import './StyledRegister.css';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 60px;
`;

const Labels = styled.h3`
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function StyledRegister () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        if (!name || !email || !password ) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));
            setLogin(!login);
        }
    }

    const handleClick = () => {
        setLogin(!login);
    }

    useEffect(() => {
        if (!login) {
            navigate('/login')
        }
    },[login, navigate])

    return (<>
        <form onSubmit={handleFormSubmit}>
        <Translator/>
            <MainContainer>
                <WelcomeText>
                    <FormattedMessage id="register" defaultMessage="Register"/>
                </WelcomeText>
                <InputContainer>
                    <Labels>
                        <FormattedMessage id="name" defaultMessage="Name"/>
                    </Labels>

                    <Input
                        type="text"
                        placeholder="Enter Full Name"
                        name="name"
                        onChange={(event: any) => setName(event.target.value)}/>
                    <Labels>
                        <FormattedMessage id="email" defaultMessage="Email"/>
                    </Labels>
                    <Input
                        type="email"
                        placeholder="Enter email"
                        onChange={(event: any) => setEmail(event.target.value)} name={undefined}/>

                    <Labels>
                        <FormattedMessage id="password" defaultMessage="password"/>
                    </Labels>
                    <Input
                        type="password"
                        placeholder="Enter password"
                        onChange={(event: any) => setPassword(event.target.value)} name={undefined}/>
                </InputContainer>

                <ButtonContainer>
                    <button type="submit" className="myButton">
                        <FormattedMessage id="register" defaultMessage="Register"/>
                    </button>
                </ButtonContainer>

                    <p onClick={handleClick} >
                            <FormattedMessage id="logged" defaultMessage="logged"/>
                    </p>
                    {flag && ( <p>
                        <FormattedMessage id="warning" defaultMessage="Needs to fill all the fields"/>
                    </p> )}
            </MainContainer>
        </form>
        </>
    );
}




export default StyledRegister;