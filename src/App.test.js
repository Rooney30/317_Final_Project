import { render, screen, fireEvent, waitFor, modal } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import UploadFormDialog from './UploadFormDialog';

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





