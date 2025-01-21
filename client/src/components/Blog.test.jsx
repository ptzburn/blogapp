import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import helper from './testHelper'
import Blog from './Blog'
import { expect } from 'vitest'

test('renders the blog object', () => {
  render(
    <MemoryRouter>
      <Blog blog={helper.blog} />
    </MemoryRouter>
  )

  const titleAndAuthor = screen.getByText('Testing with Vite by Matti Tester')

  expect(titleAndAuthor).toBeDefined()
})
