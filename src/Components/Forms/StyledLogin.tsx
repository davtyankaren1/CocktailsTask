import styled from "styled-components";
import Input from "../Input";
import './StyledLogin.css';
import React, {useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import Translator from "../languages/translator";
import {Link, useNavigate} from 'react-router-dom'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiFillLock } from 'react-icons/ai';


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
  margin-top: 20px;  
  margin-bottom: 50px;
`;

const Labels = styled.h3`
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`
function StyledLogin () {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    const [passwordShow, setPasswordShow] = useState(false);

    const toggle = () => {
        setPasswordShow(!passwordShow)
    }

    const navigate = useNavigate()

    function handleLogin(e: any) {
        e.preventDefault();
        // @ts-ignore
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        // @ts-ignore
        let mail = localStorage.getItem("Email").replace(/"/g, "");

        if (!emaillog || !passwordlog) {
            setFlag(true);
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    useEffect(() => {
        if (!home) {
            navigate('/home')
        }
    },[home, navigate])

    return (
        <>
        <form onSubmit={handleLogin}>
            <Translator/>

        <MainContainer>
            <Link to='/'>
                <BsFillArrowLeftSquareFill className='arrowBack'/>
            </Link>
            <WelcomeText>
                <FormattedMessage id="login" defaultMessage="login"/>
            </WelcomeText>

            <InputContainer>
                <Labels>
                    <FormattedMessage id="email" defaultMessage="Email"/>
                </Labels>
                <Input
                    type="email"
                    placeholder="Enter email"
                    name={''}
                    onChange={(event: any) => setEmaillog(event.target.value)}
                />

                <Labels>
                    <FormattedMessage id="password" defaultMessage="password"/>
                </Labels>
                <Input
                    type={passwordShow ? 'text' : 'password'}
                    placeholder="Enter password"
                    name={''}
                    onChange={(event:any) => setPasswordlog(event.target.value)}
                />
                <span>
                  <AiFillLock onClick={toggle}/>
                </span>
            </InputContainer>

            <button type="submit" className="myButton">
                <FormattedMessage id="login" defaultMessage="Login"/>
            </button>

            {flag && (<p>
                <FormattedMessage id="wrong" defaultMessage="Something is wrong"/>
                 </p>  )}

        </MainContainer>
        </form>
        </>
    );
}


export default StyledLogin;