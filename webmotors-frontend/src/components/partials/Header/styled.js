import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color: #FFFFFF;
height: 60px;
border-bottom: 1px #CCC;

.container{
    max-width: 1300px;
    margin: auto;
    display: flex;
}

.logo{
    flex: 1;
    display: flex;
    align-itens: center;
    margin-top: 15px;
}

nav{
    padding-top: 10px;
    padding-bottom: 10px;

    ul, li {
        margin: 0;
        padding: 0;
        list-style:none;
    }

    ul{
        display:flex;
        align-items:center;
        height:40px;
    }

    li{
        margin-left:20px;
        margin-right:20px;

        a{
            color: #4d4c59;
            font-size: 12px;
            text-decoration:none;

            &:hover{
                color: #F3123C;
            }
            
            &.button:hover{
                background-color: #
            }
        }
    }
}
`;
