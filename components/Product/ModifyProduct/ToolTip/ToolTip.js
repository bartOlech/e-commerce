import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Tooltip = styled.div`
    width: 20px;
    height: 20px;
    font-family: ${FontStyle.family};
    color: #000;
    font-size: 1em;
    margin-bottom: -7px;
    background-image: url('../../../../static/question.svg');
    background-repeat: no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
    margin-left: ${props => props.marginLeft};
`
const TooltipText = styled.span`

  `

const ToolTipMessage = (props) => {
    return (
        <Tooltip marginLeft={props.marginLeft} className="tooltip">
            <TooltipText className="tooltiptext">{props.msg}</TooltipText>
        </Tooltip>
    )
}

export default ToolTipMessage;