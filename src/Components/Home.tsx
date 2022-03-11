import React, {useState} from 'react';
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import Modalo from './Modal/Modalo'
import Translator from "./languages/translator";
import {Link} from 'react-router-dom'
import { GrLogout } from 'react-icons/gr';
import { AiFillLike } from "react-icons/ai";
import { MdDeleteSweep } from 'react-icons/md';
import {useSelector, useDispatch} from "react-redux";
import {getCocktailAsync, showCocktail, showCocktailList, deleteCocktail, addCocktail} from "./features/cocktailsSlide";
import {selectLoading} from "./features/loadingSlice";
import {loadingTrue, loadingFalse} from './features/loadingSlice'
import Shaker from "./loader/Shaker";
// @ts-ignore
import audio from "./shakeEffect.mp3";
import lime from './lime.png'
import cocktail from './greenCocktail-removebg-preview.png'

const Maincontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 90vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`

export const ButtonContainer = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 5px 15px;
  border-radius: 5px;
  margin-left: 1605px;
  margin-top: -40px;
  z-index: 1;
`

const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: red;
  font-size: 25px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(24, 88, 18, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AudioController = styled.div`
  display: none;
`
const ContentContainer = styled.div`
  margin-top: 50px;
`
interface Icocktail {
    strDrinkThumb: string,
    strDrink: string,
    strGlass: string,
    strAlcoholic: string
    strIngredient1: string
    strIngredient3: string
    idDrink: string
}

const Home = () => {
    const [login, setLogin] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const closeModal = () => { setIsOpenModal(false) }

    const cocktailData = useSelector(showCocktail);
    const cocktailList = useSelector(showCocktailList);
    const isLoading = useSelector(selectLoading)
    const dispatch = useDispatch();

    const getAndOpen = () => {
            setIsOpenModal(true)
            dispatch(getCocktailAsync())
    }

    const handleClick = () => {
        setLogin(!login);
    }

    return (
        <div>
            <img src={lime} className="lime" alt="logo" />
            <img src={cocktail} className="cocktail" alt="" />

            {isLoading &&
                <LoadingContainer>
                        <Shaker/>
                        <AudioController>
                            <audio controls autoPlay>
                                <source src={audio} type="audio/mp3"/>
                            </audio>
                        </AudioController>
                </LoadingContainer>}
            <Translator/>
            <Link to='/'>
               <div onClick={handleClick}>
                    <ButtonContainer>
                        Logout <GrLogout className='out'/>
                    </ButtonContainer>
                </div>
            </Link>

            <Maincontainer>
                <button type="submit" className="myButton" onClick={getAndOpen}>
                    <FormattedMessage id="get" defaultMessage="Get Cocktail"/>
                </button>

                {isOpenModal &&
                <Modalo isOpen={isOpenModal} onClose={closeModal} >
                    <ContentContainer>
                        <img src={cocktailData.strDrinkThumb} width={370} height={280} alt=''/>
                        <div className='ContainerData'>
                            <p>{cocktailData.strDrink}</p>
                            <p>{cocktailData.strAlcoholic}</p>
                            <p>{cocktailData.strIngredient1}</p>
                            <p>{cocktailData.strIngredient3}</p>
                            <p>{cocktailData.strGlass}</p>
                        </div>
                    </ContentContainer>

                    <button type ='button' className='Like' onClick={()=> {
                        dispatch(loadingTrue())
                        setTimeout(()=> {
                            dispatch(addCocktail(cocktailData))
                            dispatch(loadingFalse())
                        }, 1300)
                        closeModal()
                    }} >
                    <AiFillLike />
                    </button>

                    <button type="submit" className='changeCocktail'  onClick={getAndOpen}>
                        <FormattedMessage id="get" defaultMessage="Get another cocktail"/>
                    </button>
                </Modalo>
                }

                {cocktailList.map((cocktail: Icocktail, index: number)=> {
                    const deletedId = cocktail.idDrink;
                        return (
                            <div className='constent' key={index}>
                            <img className='photo' width={60} height={60} src={cocktail.strDrinkThumb} alt='' />
                            <p className='addedDrink' >{cocktail.strDrink}</p>
                            <MdDeleteSweep type='button' className='trash' onClick={()=> {
                                dispatch(deleteCocktail(deletedId))
                            }}>
                            </MdDeleteSweep>
                        </div>)
                })}
            </Maincontainer>
        </div>
    );
};

export default Home;














