import React from 'react'
import styled from 'styled-components'

const ItemStyled = styled.div`
    padding: 12px 5px;
    margin: 10px 4px 10px 8px;
    cursor: pointer;

    a {
        font-size: 1em;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.colorNavbar};
    }

    img{
        width: 40px;
        height: 40px;
    }
`;

interface Iprops {
    text?: string;
    img?: string;
}

const Item: React.FC<Iprops> = ({text, img}) => {
    return (
        <ItemStyled>

            {
                img ? (
                    <img src={img} alt=""/>
                ) : (
                    <a>{text}</a>
                )
            }
        </ItemStyled>
    )
}

export default Item
