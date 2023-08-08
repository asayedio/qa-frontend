import React from 'react';
import { render } from '@testing-library/react';
import { Answer } from './Answer';
import { AnswerData } from './QuestionData';

const mockData: AnswerData = {
  answerId: 1,
  content: 'Test answer',
  userName: 'Test user',
  created: new Date(),
};

describe('Answer component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Answer data={mockData} />);
    expect(container).toBeTruthy();
  });

  it('renders the correct content', () => {
    const { getByText } = render(<Answer data={mockData} />);
    expect(getByText('Test answer')).toBeInTheDocument();
    expect(getByText('Test user')).toBeInTheDocument();
  });
});