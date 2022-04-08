import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from './menu'
import styled from 'styled-components'

const ContainerFull = styled('div')`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: row;
`;

const PageBackground = styled('div')`
background-image: url('/img/background.png');
width: 100vw;
height: 100vh;
position: fixed;
left: 0;
top: 0;
z-index: -1;
::before{
  content: "";
  background-image: url('/img/Vector.png');
  width: 955px;
  height: 637px;
  position: absolute;
  z-index: -1;
  right: 0; 
  top: 0;
}
/* ::after{
  content: "";
  background-image: url('/img/planta.png');
  position: absolute;
width: 787px;
height: 1183px;
left: 718px;
top: -208px;  
} */
`;

export default function HomePage() {
  return (
    <div>
      <ContainerFull>
        <Menu></Menu>
      </ContainerFull>
      <PageBackground></PageBackground>
    </div>
  )
}
