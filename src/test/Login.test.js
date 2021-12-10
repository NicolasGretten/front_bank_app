import {fireEvent, getByLabelText, render, screen, waitFor} from '@testing-library/react';
import Login from "../pages/Login";
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
    // capture "GET /greeting" requests
    rest.post('http://localhost:8081/client/login', (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(ctx.json({id: 1}))
    }),
)

beforeAll(() => {
    // Enable the mocking in tests.
    server.listen()
})

afterEach(() => {
    // Reset any runtime handlers tests may use.
    server.resetHandlers()
})

afterAll(() => {
    // Clean up once the tests are done.
    server.close()
})

const submitForm = ({ email, password }) => {
    fireEvent.change(screen.getByLabelText('email'), { target: { value: email } });
    fireEvent.change(screen.getByLabelText('Mot de passe'), { target: { value: password } });
    fireEvent.click(screen.getByText(/Connexion/i));
};

test('renders learn react email input', () => {
    render(<Login />);
    const linkElement = screen.getByText(/email/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders learn react password input', () => {
    render(<Login />);
    const linkElement = screen.getByText(/mot de passe/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn connexion email', () => {
    render(<Login />);
    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, {target: {value: 'ngretten@gmail.com'}})
});

test('renders learn connexion password', () => {
    render(<Login />);
    const input = screen.getByLabelText(/mot de passe/i);
    fireEvent.change(input, {target: {value: 'test'}})
});

test('click button', () => {
    render(<Login />);
    const btn = screen.getByText(/connexion/i);
    fireEvent(
        btn,
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),
    )
});

    test('updates LocalStorage cache', () => {
        render(<Login />)
        submitForm({ email: 'test@test.com', password: 'test'});
        const id = localStorage.getItem('id');
        expect(id).toBe('1');
    });



