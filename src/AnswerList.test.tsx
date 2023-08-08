import React from 'react';
import { render } from '@testing-library/react';
import { AnswerList } from './AnswerList';
import { AnswerData } from './QuestionData';

const mockData: AnswerData[] = [
  {
    answerId: 1,
    content: 'Test answer 1',
    userName: 'Test user 1',
    created: new Date(),
  },
  {
    answerId: 2,
    content: 'Test answer 2',
    userName: 'Test user 2',
    created: new Date(),
  },
];

describe('AnswerList component', () => {
  it('renders without crashing', () => {
    const { container } = render(<AnswerList data={mockData} />);
    expect(container).toBeTruthy();
  });

  it('renders the correct content', () => {
    const { getByText } = render(<AnswerList data={mockData} />);
    expect(getByText('Test answer 1')).toBeInTheDocument();
    expect(getByText('Test user 1')).toBeInTheDocument();
    expect(getByText('Test answer 2')).toBeInTheDocument();
    expect(getByText('Test user 2')).toBeInTheDocument();
  });
});