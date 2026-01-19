// spec: specs/quence-homepage-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation and Accessibility', () => {
  test('Main Navigation Menu Functionality', async ({ page }) => {
    // 1. Navigate to homepage
    await page.goto('https://quence.txtgroup.com/home');

    // 2. Click on 'Offering' menu item
    await page.getByRole('link', { name: 'Offering' }).click();

    // 3. Verify dropdown menu appears with Services and Solutions sections
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Services').first()).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Solutions')).toBeVisible();

    // 4. Verify Services section contains 4 links: Software Quality Assurance & Testing, SW Application Lifecycle Management, Analytics & Reporting, Coaching & Training
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Software Quality Assurance & Testing')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('SW Application Lifecycle Management')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Analytics & Reporting')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Coaching & Training')).toBeVisible();

    // 5. Verify Solutions section contains 5 links: Test Management & Test Automation, Project/Requirement & Bug Management, Performance Test, Data Quality, AI per la Software Quality
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Test Management & Test Automation')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Project, Requirement & Bug Management')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Performance Test')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Data Quality')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('AI per la Software Quality')).toBeVisible();

    // 6. Click on 'Resources' menu item
    await page.getByRole('link', { name: 'Resources' }).click();

    // 7. Verify dropdown contains Video and News links
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('Video')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByText('News')).toBeVisible();

    // 8. Click away to close dropdown
    await page.getByRole('main').click();

    // 9. Test all other main navigation links: Who we are, Partners, Contact us, Join us, TXT Group
    await page.getByRole('link', { name: 'Who we are' }).click();
    await page.goto('https://quence.txtgroup.com/home');
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByRole('link', { name: 'Partners' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByRole('link', { name: 'Contact us' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByRole('link', { name: 'Join us' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main menu' }).getByRole('link', { name: 'TXT Group' })).toBeVisible();
  });
});