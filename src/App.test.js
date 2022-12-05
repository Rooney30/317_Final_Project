import { render, screen, fireEvent, waitFor, modal } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import UploadFormDialog from './UploadFormDialog';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

test('Renders our app', () => {
  render(<App />);
  const linkElement = screen.getByText('Photo Gallery');
  expect(linkElement).toBeInTheDocument();
});

test('See if upload button exists', async () => {
  render(<App />);
  const button = screen.getByText('Upload Photo');
  expect(button).toBeInTheDocument();
});

test('See if cancel button exists', async () => {
  render(<UploadFormDialog/>);
  const button = screen.getByRole("button")
  fireEvent.click(button)
  const button2 = screen.getByTestId('Cancel');
  expect(button2).toBeInTheDocument();
});

test('See if Upload button exists', async () => {
  render(<UploadFormDialog/>);
  const button = screen.getByRole("button")
  fireEvent.click(button)
  const button2 = screen.getByTestId('Upload');
  expect(button2).toBeInTheDocument();
});

test('See if title box exists', async () => {
  render(<UploadFormDialog/>);
  const button = screen.getByRole("button")
  fireEvent.click(button)
  const textbox = screen.getByText('Photo Title');
  expect(textbox).toBeInTheDocument();
});

test('See if description box exists', async () => {
  render(<UploadFormDialog/>);
  const button = screen.getByRole("button")
  fireEvent.click(button)
  const textbox = screen.getByText('Photo Description');
  expect(textbox).toBeInTheDocument();
});

test('pop up test', async () => {
  render(<UploadFormDialog/>);
  const button = screen.getByRole("button")
  fireEvent.click(button)
  const element = screen.getByTestId('description')
  expect(element).toBeInTheDocument()
});

test('See if search box exists', async () => {
  render(<App />);
  const searchBox = screen.getByTestId("SearchBox")
  expect(searchBox).toBeInTheDocument();
});

test('See if google sign in box exists', async () => {
  render(<App />);
  const signInBox = screen.getByTestId("GoogleSignIn")
  expect(signInBox).toBeInTheDocument();
});

test('test sign in process', () => {
  render(<App />);
  const signInBox = screen.getByTestId("GoogleSignIn")
  signInBox.click();
  fireEvent.click(signInBox);
  
  
  //expect().toHaveBeenCalledTimes(1);
});

test('Calls onSubmit with username and Password when submitted', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <MemoryRouter>
      <Login onSubmit={onSubmit} />
    </MemoryRouter>
  );

  const form = getByTestId("GoogleSignIn");

  expect(onSubmit).not.toHaveBeenCalled();

  fireEvent.submit(form, {
    target: {
      values: {
        email: "se317teamCPKK@gmail.com",
        password: "@bc12345",
      },
    },
  });
});

  expect(onSubmit).toHaveBeenCalledTimes(1);
// test('Click sign in', () => {
//   render(<App />);
//   fireEvent.click(screen.getByText('Upload Photo'));
  
//   expect(uploadPhoto).toHaveBeenCalledTimes(1);
// });


// test('pop up test', async () => {
//   render(<App />);
//   fireEvent.click(screen.getByText('Upload Photo'));
  
// });
// fireEvent.click(screen.getByText('Upload Photo'))

// await waitFor(() =>
//   // getByRole throws an error if it cannot find an element
//   screen.getByRole('heading'),
// )




// test('Tests google sign in popup', () => {
//   render(<App />);
//   const { container } = render(<googleauth />)
//   // container is just a DOM node
//   const button = container.querySelector('button')
// });





