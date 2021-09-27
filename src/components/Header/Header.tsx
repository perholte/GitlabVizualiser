import { NavLink, HashRouter, useHistory } from "react-router-dom"
import { HStack, Button } from '@chakra-ui/react'

const Header = () => {

    const history = useHistory();
    const routeChange = () => {
        let path = "/mainPage";
        history.push(path);
    }

    return <>
    <HashRouter>
            <Button colorScheme="blue"> 
                <NavLink to="/issues">Issues</NavLink>
            </Button>
            <Button colorScheme="green"> 
                <NavLink to="/test">Test</NavLink>
            </Button>
            <Button colorScheme="red">
                <NavLink to="/Branches">Branches</NavLink>
            </Button>
    </HashRouter>
    
    </>
}
export default Header;