import {useDispatch, useSelector} from "react-redux";
import {IThemeState, setTheme} from "./store/theme/themeSlice.ts";
import {useEffect} from "react";
import {Input} from "./components/Input.tsx";
import {Wrapper} from "./components/Main.tsx";

function App() {
    //Selector and Dispatch - Theme
    const dispatch = useDispatch();
    const theme  = useSelector((state: Record<string, IThemeState>) => state.theme.theme);
    //Change Theme
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    },[theme])

  return (
    <>
        <button onClick={() => dispatch(setTheme(theme == "light" ? 'dark' : "light"))}>Pop up</button>

        <Wrapper>
            <Input type='text' placeholder='DD'/>
            <Input type='text' placeholder='MM'/>
            <Input type='text' placeholder='YYYY'/>
        </Wrapper>
    </>
  )
}

export default App
