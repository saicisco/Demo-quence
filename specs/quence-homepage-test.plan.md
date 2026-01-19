# TXT Quence Homepage Test Plan

## Application Overview

The TXT Quence homepage is a comprehensive marketing website for a Software Quality Engineering company. It features navigation menus, hero carousel, company information sections, service offerings, partner showcase, language switcher, social media links, and contact information. The site targets both Italian and international markets with bilingual support (English/Italian).

## Test Scenarios

### 1. Navigation and Accessibility

**Seed:** `tests/seed.spec.ts`

#### 1.1. Main Navigation Menu Functionality

**File:** `tests/navigation/main-navigation.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Click on 'Offering' menu item
  3. Verify dropdown menu appears with Services and Solutions sections
  4. Verify Services section contains 4 links: Software Quality Assurance & Testing, SW Application Lifecycle Management, Analytics & Reporting, Coaching & Training
  5. Verify Solutions section contains 5 links: Test Management & Test Automation, Project/Requirement & Bug Management, Performance Test, Data Quality, AI per la Software Quality
  6. Click on 'Resources' menu item
  7. Verify dropdown contains Video and News links
  8. Click away to close dropdown
  9. Test all other main navigation links: Who we are, Partners, Contact us, Join us, TXT Group

**Expected Results:**
  - Homepage loads successfully
  - Offering dropdown appears immediately
  - All dropdown sections are clearly visible and organized
  - All 4 service links are present and clickable
  - All 5 solution links are present and clickable
  - Resources dropdown appears with correct structure
  - Video and News links are present
  - Dropdown closes when clicking outside
  - All navigation links are functional and lead to appropriate pages

#### 1.2. Language Switcher Functionality

**File:** `tests/navigation/language-switcher.spec.ts`

**Steps:**
  1. Navigate to English homepage
  2. Verify current language indicator shows 'En'
  3. Click on 'It' (Italian) language link
  4. Verify page URL changes to include '/it/'
  5. Verify page content displays in Italian
  6. Verify navigation menu items are translated
  7. Click on 'En' to switch back to English
  8. Verify URL returns to English version
  9. Verify content returns to English

**Expected Results:**
  - English homepage loads with 'En' highlighted
  - Italian language link is clickable
  - URL correctly updates to Italian version
  - Content successfully translated to Italian
  - Menu items show Italian text
  - English switch works correctly
  - URL reverts to English path
  - All content returns to English language

#### 1.3. Social Media and Contact Links

**File:** `tests/navigation/social-contact-links.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Locate social media icons in header
  3. Verify Instagram link points to 'https://www.instagram.com/txt.group'
  4. Verify LinkedIn link points to 'https://www.linkedin.com/company/quence-srl'
  5. Verify Contact link in header
  6. Scroll to footer section
  7. Verify duplicate social media links in footer
  8. Test Contact Us link in footer
  9. Verify Whistleblowing link functionality
  10. Test phone number display '+39 02 257711'

**Expected Results:**
  - Homepage loads successfully
  - Three social media icons are visible in header
  - Instagram link has correct URL
  - LinkedIn link has correct URL
  - Header contact link is functional
  - Footer contains same social media links
  - Footer contact link matches header functionality
  - Whistleblowing link opens correctly
  - Phone number is clearly displayed and formatted correctly

### 2. Hero Section and Carousels

**Seed:** `tests/seed.spec.ts`

#### 2.1. Hero Banner Carousel Navigation

**File:** `tests/hero/hero-carousel.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Verify hero banner is visible with first slide active
  3. Verify 4 page dots are present below the banner
  4. Click on page dot 2
  5. Verify slide 2 becomes active (Welcome 2022 Award)
  6. Click on page dot 3
  7. Verify slide 3 becomes active (SW Quality Assurance e SW Testing)
  8. Click on page dot 4
  9. Verify slide 4 becomes active (IFIP-ICTSS Conference)
  10. Click on page dot 1
  11. Verify slide 1 returns (The Evolution of Software Quality)

**Expected Results:**
  - Homepage loads with hero banner visible
  - First slide shows 'The Evolution of Software Quality'
  - Four navigation dots are visible and clickable
  - Slide 2 displays Welcome Award content correctly
  - Slide 3 displays SW Quality Assurance content correctly
  - Slide 4 displays IFIP Conference content correctly
  - Navigation returns to first slide successfully
  - All slide transitions are smooth and content loads completely

#### 2.2. Partners Carousel Navigation

**File:** `tests/hero/partners-carousel.spec.ts`

**Steps:**
  1. Navigate to homepage and scroll to Partners section
  2. Verify partners carousel is visible with 7 slides
  3. Verify previous/next navigation buttons are present
  4. Click 'Next slide' button
  5. Verify carousel advances to next set of partners
  6. Click 'Previous slide' button
  7. Verify carousel returns to previous position
  8. Verify all partner logos are clickable links
  9. Test clicking on Tricentis logo
  10. Test clicking on Atlassian logo
  11. Test clicking on other visible partner logos

**Expected Results:**
  - Partners section loads with carousel visible
  - Seven partner logos are displayed: Tricentis, Atlassian, Inflectra, Brightest, PTC, Esplores, Browserstack
  - Navigation buttons are functional and visible
  - Next button advances carousel smoothly
  - Previous button works correctly
  - All partner logos function as clickable links
  - Tricentis link leads to correct partner page
  - Atlassian link leads to correct partner page
  - All partner links navigate to appropriate detail pages

### 3. Content Sections and Links

**Seed:** `tests/seed.spec.ts`

#### 3.1. Service Offerings Section

**File:** `tests/content/service-offerings.spec.ts`

**Steps:**
  1. Navigate to homepage and scroll to Offering section
  2. Verify 4 service cards are displayed
  3. Verify 'Software Quality Engineering' card with 'Discover more' link
  4. Verify 'SW Application Lifecycle Management' card with 'Discover more' link
  5. Verify 'Analytics & Reporting' card with 'Discover more' link
  6. Verify 'Coaching & Training' card with 'Discover more' link
  7. Click on each 'Discover more' link
  8. Verify links navigate to appropriate service detail pages
  9. Test back navigation to return to homepage

**Expected Results:**
  - Offering section loads with clear heading
  - Four service cards are evenly distributed and visible
  - Software Quality Engineering card displays correctly with functional link
  - SW Application Lifecycle Management card displays correctly with functional link
  - Analytics & Reporting card displays correctly with functional link
  - Coaching & Training card displays correctly with functional link
  - All 'Discover more' links are clickable and functional
  - Each link leads to the correct detailed service page
  - Browser back button successfully returns to homepage

#### 3.2. Company Information Content

**File:** `tests/content/company-info.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Scroll to 'Dynamism, innovation and professionalism' section
  3. Verify company description mentions Milan 2014 founding
  4. Verify mention of Software Quality Engineering focus
  5. Scroll to 'A reference for the Italian and international market' section
  6. Verify Quality Assurance positioning statement
  7. Scroll to 'Working alongside industry leaders' section
  8. Verify industry sectors mentioned: FinTech, Banking, Healthcare, Aerospace, GDO, TLC, Public Administration
  9. Scroll to 'From 2022 part of the TXT Group' section
  10. Verify TXT Group information and January 2024 details

**Expected Results:**
  - Homepage loads successfully with all content sections
  - Company founding information (Milan, 2014) is clearly displayed
  - Software Quality Engineering focus is prominently mentioned
  - International market positioning is clearly stated
  - Quality Assurance expertise is highlighted
  - All seven industry sectors are mentioned: FinTech, Banking, Healthcare, Aerospace, GDO, TLC, Public Administration
  - TXT Group acquisition information is accurate
  - January 2024 Competence Centre details are correctly displayed

#### 3.3. Join Us and Contact Section

**File:** `tests/content/join-contact.spec.ts`

**Steps:**
  1. Navigate to homepage and scroll to bottom
  2. Verify 'JOIN US' section with 'Visionaries. Bold. Achievers.' heading
  3. Verify company mission statement about overcoming limits
  4. Click on 'Join us' button
  5. Verify navigation to careers page
  6. Return to homepage and scroll to footer
  7. Verify company address: Via Milano 150 - 20093 Cologno Monzese (MI), Italy
  8. Verify phone number: +39 02 257711
  9. Test 'Contact Us' link in footer
  10. Verify footer links: Legal Notice, Privacy Policy, Whistleblowing, Contacts

**Expected Results:**
  - JOIN US section loads with engaging visual design
  - Vision statement 'Visionaries. Bold. Achievers.' is prominently displayed
  - Mission statement emphasizes innovation and excellence
  - Join us button successfully navigates to careers page
  - Footer contains complete company contact information
  - Address is correctly formatted and complete
  - Phone number is clearly displayed and properly formatted
  - Contact Us link in footer is functional
  - All footer legal links are present and functional

### 4. Cross-Browser and Responsive Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. Mobile Responsive Design

**File:** `tests/responsive/mobile-layout.spec.ts`

**Steps:**
  1. Set viewport to mobile size (375x667)
  2. Navigate to homepage
  3. Verify navigation collapses to hamburger menu
  4. Test hamburger menu functionality
  5. Verify hero carousel adapts to mobile layout
  6. Scroll through all content sections
  7. Verify text remains readable and images scale properly
  8. Test touch interactions on carousel elements
  9. Verify footer layout adapts to mobile

**Expected Results:**
  - Mobile viewport is set correctly
  - Homepage loads optimally for mobile
  - Navigation transforms to mobile-friendly hamburger menu
  - Hamburger menu opens and closes smoothly
  - Hero carousel maintains functionality on mobile
  - All content sections are accessible via scrolling
  - Text is readable and images scale without distortion
  - Touch gestures work correctly for carousel navigation
  - Footer content reorganizes appropriately for mobile

#### 4.2. Page Load Performance

**File:** `tests/performance/page-load.spec.ts`

**Steps:**
  1. Navigate to homepage with network throttling
  2. Measure initial page load time
  3. Verify above-the-fold content loads within 3 seconds
  4. Monitor image loading progression
  5. Test carousel image loading
  6. Verify lazy loading implementation for below-fold content
  7. Check for JavaScript errors in console
  8. Verify all interactive elements respond promptly

**Expected Results:**
  - Page loads successfully under network constraints
  - Initial load time meets acceptable performance standards
  - Critical above-the-fold content appears within 3 seconds
  - Images load progressively without breaking layout
  - Carousel images load smoothly when navigated
  - Below-fold content loads efficiently when scrolled into view
  - No critical JavaScript errors appear in console
  - All buttons, links, and interactive elements respond immediately to user input

### 5. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 5.1. Broken Link Detection

**File:** `tests/errors/broken-links.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Identify all links on the page
  3. Test main navigation links for valid responses
  4. Test dropdown menu links
  5. Test service offering 'Discover more' links
  6. Test partner logo links
  7. Test social media links
  8. Test footer links including Legal Notice and Privacy Policy
  9. Verify external links open in appropriate context

**Expected Results:**
  - Homepage loads successfully
  - All links are properly identified and catalogued
  - Main navigation links return valid HTTP responses
  - Dropdown links function without errors
  - Service detail links navigate successfully
  - Partner links lead to valid partner pages
  - Social media links open correct external profiles
  - Footer links function correctly (noting some may be placeholder)
  - External links behave appropriately (new tabs where expected)

#### 5.2. Form and Input Validation

**File:** `tests/errors/input-validation.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Identify any forms or input elements
  3. Test language switcher with rapid clicking
  4. Test carousel navigation with rapid clicking
  5. Attempt to access invalid URLs with language prefixes
  6. Test keyboard navigation through interactive elements
  7. Verify tab order is logical and complete
  8. Test escape key behavior on dropdown menus

**Expected Results:**
  - Homepage loads without form-related errors
  - All input elements are identified correctly
  - Language switcher handles rapid interaction gracefully
  - Carousel navigation remains stable under rapid clicking
  - Invalid URLs return appropriate error pages or redirects
  - Keyboard navigation works smoothly through all interactive elements
  - Tab order follows logical visual flow
  - Escape key properly closes open dropdown menus

#### 5.3. Content Integrity Verification

**File:** `tests/errors/content-integrity.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Verify all images load correctly without broken image icons
  3. Check for Lorem ipsum or placeholder text
  4. Verify all text content is properly translated in both languages
  5. Test video player functionality if present
  6. Verify PDF or document links if any
  7. Check for missing alt text on images
  8. Verify all headings follow proper hierarchy
  9. Test printing functionality

**Expected Results:**
  - Homepage displays without missing or broken images
  - All content is final production copy, no placeholder text
  - Language switching shows complete and accurate translations
  - Video content plays correctly when activated
  - Document links open properly formatted files
  - All images have appropriate alt text for accessibility
  - Heading structure follows semantic HTML best practices
  - Page prints correctly with proper formatting
