import styled from "styled-components";
import background from '../../../images/background.jpg'

export const StyledDay = styled.div`

    .hidden {
        display: none;
        border: 0px;
    }

    .raceDay {
        border: 1px solid black;
        height: 80px;
        height: 100px;
        border-radius: 10px;
        background-image: url(${background});
        background-size: contain;
        color: white;
        font-weight: 700;
    }

    .raceCount {
        font-weight: 800;
        color: #494949;
    }

    .pog {
        width: 300px;
        height: 300px;
        border: 3px solid red;
    }
`;