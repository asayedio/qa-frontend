import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AskPage } from './AskPage';
import { postQuestion } from './QuestionData';
import { useForm } from 'react-hook-form';

jest.mock('./QuestionData');
jest.mock('react-hook-form');

describe('AskPage component', () => {
  it('renders without crashing', () => {
    const { container } = render(<AskPage />);
    expect(container).toBeTruthy();
  });

  it('renders the form fields and button', () => {
    const { getByLabelText, getByText } = render(<AskPage />);
    expect(getByLabelText('Title')).toBeInTheDocument();
    expect(getByLabelText('Content')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('submits the form correctly', async () => {
    (useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: (fn: any) => fn,
      formState: { isSubmitting: false },
    });
    (postQuestion as jest.Mock).mockResolvedValue(true);
    const { getByLabelText, getByText } = render(<AskPage />);
    const titleInput = getByLabelText('Title');
    const contentInput = getByLabelText('Content');
    const submitButton = getByText('Submit');

    fireEvent.change(titleInput, { target: { value: 'Test title' } });
    fireEvent.change(contentInput, { target: { value: 'Test content' } });
    fireEvent.click(submitButton);

    expect(postQuestion).toHaveBeenCalledWith({
      title: 'Test title',
      content: 'Test content',
      userName: 'Fred',
      created: new Date(),
    });
  });
});