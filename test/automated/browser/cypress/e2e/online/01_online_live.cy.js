import { setup } from '../../support/setup.js';

setup();

describe(`Live tests`, () => {
	it('Can visit the page', () => {
		cy.visit('http://localhost:8080');
	});

	it('Should have a play button', () => {
		cy.get('.vjs-big-play-button').should('be.visible');
	});

	// it('Chat should be visible', () => {
	// 	cy.get('#chat-container').should('be.visible');
	// });

	it('User menu should be visible', () => {
		cy.get('#user-menu').should('be.visible');
	});

	// it('Chat join message should exist', () => {
	// 	cy.contains('joined the chat').should('be.visible');
	// });

	it('User menu should be visible', () => {
		cy.get('#user-menu').should('be.visible');
	});

	it('Click on user menu', () => {
		cy.get('#user-menu').click();
	});

	it('Can toggle chat off', () => {
		cy.contains('Toggle chat').click();
	});

	it('Chat should not be visible', () => {
		cy.get('#chat-container').should('not.exist');
	});

	it('Click on user menu', () => {
		cy.get('#user-menu').click();
	});

	it('Can toggle chat on', () => {
		cy.contains('Toggle chat').click();
	});

	// it('Chat should be re-visible', () => {
	// 	cy.get('#chat-container').should('be.visible');
	// });

	it('Click on user menu', () => {
		cy.get('#user-menu').click();
	});

	it('Show change name modal', () => {
		cy.contains('Change name').click();
	});

	it('Should change name', () => {
		cy.get('#name-change-field').focus();
		cy.get('#name-change-field').type('{ctrl+a}');
		cy.get('#name-change-field').type('my-new-name');
		cy.get('#name-change-submit').click();
		cy.get('.ant-modal-close-x').click();
		cy.wait(1500);
		// cy.contains('is now known as').should('be.visible');
	});

	it('Should change to custom websocket host', () => {
		fetchData('http://localhost:8080/api/admin/config/sockethostoverride', {
			method: 'POST',
			data: { value: 'ws://localhost:8080' },
		});
		cy.wait(1500);
	});

	it('Refresh page with new socket host', () => {
		cy.visit('http://localhost:8080');
	});
});

async function fetchData(url, options) {
	const ADMIN_USERNAME = 'admin';
	const ADMIN_STREAMKEY = 'abc123';

	const { data, method = 'GET', auth = true } = options || {};

	// eslint-disable-next-line no-undef
	const requestOptions = {
		method,
	};

	if (data) {
		requestOptions.body = JSON.stringify(data);
	}

	if (auth && ADMIN_USERNAME && ADMIN_STREAMKEY) {
		const encoded = btoa(`${ADMIN_USERNAME}:${ADMIN_STREAMKEY}`);
		requestOptions.headers = {
			Authorization: `Basic ${encoded}`,
		};
		requestOptions.mode = 'cors';
		requestOptions.credentials = 'include';
	}

	try {
		const response = await fetch(url, requestOptions);
		const json = await response.json();

		if (!response.ok) {
			const message =
				json.message || `An error has occurred: ${response.status}`;
			throw new Error(message);
		}
		return json;
	} catch (error) {
		console.error(error);
		return error;
		// console.log(error)
		// throw new Error(error)
	}
}