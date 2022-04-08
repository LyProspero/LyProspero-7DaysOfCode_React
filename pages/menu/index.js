import styled from 'styled-components'
import Link from 'next/link'

const ContainerNavBar = styled('div')`
width: 1210px;
height: 48.84px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;

    .logo{
        width: 177px;
        height: 44.84px;

        Link{
            cursor: pointer;
        }
}`;


const _Menu = styled('div')`
width: 582px;
height: 30px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;

ul{
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
text-decoration: none;
padding-left: 10px;
list-style-type: none;
}

li{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #202020;
    padding-left: 30px;
}
`;

export default function Menu(props) {
    return (
        <div>
            <ContainerNavBar>
                <div className='logo'>
                    <Link href={''}><img src='/img/logo.png'></img></Link>
                </div>
                <_Menu>
                    <ul>
                        <li><Link href={''}>Como fazer</Link></li>
                        <li><Link href={''}>Ofertas</Link></li>
                        <li><Link href={''}>Depoimentos</Link></li>
                        <li><Link href={''}>Vídeos</Link></li>
                        <li><Link href={''}>Meu carrinho</Link></li>
                    </ul>
                </_Menu>
            </ContainerNavBar>
        </div>
    )
}