import {useSelector} from "react-redux";
import { IDateState} from "../store/date/dateSlice.ts";
import styled from "styled-components";

const StyledDate = styled.div`
  font-size: 64px;
  font-family: var(--font-family);
  font-weight: var(--fw-bold-i);
  font-style: italic;
  color: var(--color-primary);
  
`

const StyledDateNum = styled.span`
  color: var(--primary-purple);
`

function Results() {
    const date = useSelector((state: Record<string, IDateState>) => state.date)
    console.log(date)
    return (
        <div>
            <StyledDate><StyledDateNum>{date.year ? date.year : '--'}</StyledDateNum> years</StyledDate>
            <StyledDate><StyledDateNum>{date.month ? date.month : '--'}</StyledDateNum> months</StyledDate>
            <StyledDate><StyledDateNum>{date.day ? date.day : '--'}</StyledDateNum> days</StyledDate>
        </div>
    );
}

export default Results;