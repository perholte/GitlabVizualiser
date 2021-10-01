import { FC } from 'react-router/node_modules/@types/react';

const Greeting: FC = () => {
	return <p>Hello {sessionStorage.getItem('name')}</p>;
};

export default Greeting;
