const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Blog App', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('Login')).toBeVisible()
    await expect(page.getByText('Users')).toBeVisible()
  })
})
