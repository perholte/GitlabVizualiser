import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/header/Header';
import userEvent from '@testing-library/user-event';

// Prosjektet skal vise oppsett av og eksempel på testing med Jest - minimum er å ha en snapshottest og noen enkle tester på komponentenes oppførsel.

beforeEach(() => {
	return render(
		<QueryClientProvider client={new QueryClient()}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	);
});
afterEach(cleanup);

it('renders the App correctly', () => {
	expect(<App></App>).toMatchSnapshot();
});

it('Renders the header correctly', () => {
	expect(
		<Header
			handleToggleTheme={function () {
				throw new Error('Function not implemented.');
			}}
		></Header>
	).toMatchSnapshot();
});

describe('testing implementation and representation of sessionstorage', () => {
	it('Writes a string in the input field and submits it', () => {
		window.location.pathname = '/';
		const inputLabel = screen.getByRole('textbox');
		const button = screen.getByText('Submit name');
		userEvent.type(inputLabel, 'test');
		button.click();
		expect(sessionStorage.getItem('name')).toEqual('test');
	});
});

describe('Checking the routing of the header', () => {
	it('Should be on the home page', () => {
		const homeLink = screen.getByText('Home');
		homeLink.click();
		expect(window.location.pathname).toEqual('/');

		const input = screen.getByRole('checkbox')
		expect(input).toBeInTheDocument()
	});

	it('Re-routes to branches when branches-link is clicked', async () => {
		act(() => {
			const branchLink = screen.getByText('Branches');
			branchLink.click();
		});
		expect(window.location.pathname).toEqual('/branches');

		const svg = document.getElementById('graph-container');
		expect(svg).toBeInTheDocument();
	});

	it('Re-routes to commit-messages when commit-link is clicked', async () => {
		act(() => {
			const commitLink = screen.getByText('Commits');
			commitLink.click();
		});
		expect(window.location.pathname).toEqual('/messages');
	});
	//Check that the correct component is showed.

	it('Re-routes to contributors when contributor-link is clicked', async () => {
		act(() => {
			const contributorLink = screen.getByText('Contributors');
			contributorLink.click();
		});
		expect(window.location.pathname).toEqual('/contributors');
	});
	//Check that the correct component is showed.
});
