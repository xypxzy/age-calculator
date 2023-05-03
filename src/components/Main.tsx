import {ChangeEvent, useEffect, useState} from "react";
import {FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {Input} from "./Input.tsx";
import {IThemeState, setTheme} from "../store/theme/themeSlice.ts";

import arrowDownIcon from '../assets/icon-arrow.svg'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'
import {allDate, IDateState} from "../store/date/dateSlice.ts";
import Results from "./Results.tsx";

export const Container = styled.div`
  background: var(--bg-main);
  color: var(--color-primary);
  border-radius: 1rem 1rem 8rem 1rem;
  padding: 30px 40px;
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Wrapper = styled.div`
  display: flex;
  width: 30rem;

`

const StyledLabel = styled.label`
  margin-right: 0.5rem;
  font-size: 12px;
  color: var(--smokey-grey);
  letter-spacing: 2px;
  text-transform: uppercase;
`;


const Submit = styled.button`
  padding: 15px;
  background: var(--primary-purple);
  border: none;
  border-radius: 50rem;

  cursor: pointer;
  border-bottom: 1px solid var(--off-black);


  img {
    width: 32px;
  }
`

const DateInput = styled.span`
  display: flex;
  flex-direction: column;
`


const ThemeChange = styled.button`
  border: none;
  border-radius: 50rem;

  width: 65px;

  cursor: pointer;
  background: var(--bg-main);


  img {
    width: 35px;
  }
`

function Main() {
    //Selector and Dispatch - Theme
    const dispatch = useDispatch();
    const theme = useSelector((state: Record<string, IThemeState>) => state.theme.theme);


    const [date, setDate] = useState<IDateState>({year: '', month: '', day: ''});
    const [isValidDate, setIsValidDate] = useState(true);

    //Change Theme
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const validateDate = (dateString: string) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateString)) {
            return false;
        }
        const date = new Date(dateString);
        console.log(date)
        return !isNaN(date.getTime());
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setDate((prevState) => {
            const updatedDate = { ...prevState, [name]: value };
            setIsValidDate(validateDate(`${updatedDate.year}-${updatedDate.month}-${updatedDate.day}`));
            return updatedDate;
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValidDate) {
            console.log(`${date.year}-${date.month}-${date.day}`)
            dispatch(allDate(date))
        }
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <ThemeChange onClick={() => dispatch(setTheme(theme == "light" ? 'dark' : "light"))}>
                    <img src={theme == 'dark' ? sunIcon : moonIcon} alt="theme"/>
                </ThemeChange>
                <Wrapper>
                    <DateInput>
                        <StyledLabel htmlFor="day-input">Day:</StyledLabel>
                        <Input placeholder='DD'
                               type="text"
                               id="day-input"
                               name="day"
                               value={date.day}
                               onChange={handleDateChange}
                               className={isValidDate ? '' : 'invalid'}/>
                    </DateInput>
                    <DateInput>
                        <StyledLabel htmlFor="month-input">Month:</StyledLabel>
                        <Input type='text'
                               placeholder='MM'
                               id="month-input"
                               name="month"
                               value={date.month}
                               onChange={handleDateChange}
                               className={isValidDate ? '' : 'invalid'}/>
                    </DateInput>
                    <DateInput>
                        <StyledLabel htmlFor="year-input">Year:</StyledLabel>
                        <Input type='text'
                               placeholder='YYYY'
                               id="year-input"
                               name="year"
                               value={date.year}
                               onChange={handleDateChange}
                               className={isValidDate ? '' : 'invalid'}/>
                    </DateInput>
                </Wrapper>

                <Submit type='submit'>
                    <img src={arrowDownIcon} alt="arrow"/>
                </Submit>
            </Form>
            <Results/>
        </Container>
    );
}

export default Main;