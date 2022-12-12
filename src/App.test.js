import { render, screen, fireEvent, waitFor, modal } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
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
