import styled from "styled-components";

export const StyledHeader = styled.div`
    font-family: "Lucida Console";
    
    .monthYear {
        font-size: 20px;
        padding: 10px;
        color: white;
        
    } 

    .monthYearLabel {
        font-weight: 800;
        font-size: 40px;
    }

    .dayLabel {
        display: flex;
        color: white;
    }
    
    .buttons {
        text-align: right;
        color: white;
    }

    .dayName {
        width: 300px;
        margin: 5px;
        text-align: center;
        font-weight: 800;
    }
`;