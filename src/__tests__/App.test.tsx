import { cleanup, render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/header/Header';

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

describe('Checking the routing of the header', () => {
	it('Should be on the home page', () => {
		expect(window.location.pathname).toEqual('/');
	});
	//Check that the correct component is showed.

	it('Re-routes to branches when branches-link is clicked', async () => {
		act(() => {
			const branchLink = screen.getByText('Branches');
			branchLink.click();
		});
		expect(window.location.pathname).toEqual('/branches');
	});
	//Check that the correct component is showed.

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
