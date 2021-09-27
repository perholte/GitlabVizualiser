import { Flex, Button} from "@chakra-ui/react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {

    return <>
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["black", "black", "black", "black"]}>
        <Button>
        <Link to="/branches">
            Branches
        </Link>
        </Button>
        <Button>
        <Link to="/issues">
            Issues
        </Link>
        </Button>
        <Button>
        <Link to="/contributors">
            Contributors
        </Link>
        </Button>
        <Button>
        <Link to="/messages">
            Commit messages
        </Link>
        </Button>
        </Flex>
    </>
    }
      
export default Header;