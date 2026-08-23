# Splashes Website, Project 1

This README is prepared for two audiences: Dr. Wissam Ahmed (Web801, Front End Web Development) as a record of the work completed for Project 1, and the Splashes team as an update on the current state of their website.

Project: A responsive marketing website for Splashes, a children's swimming lesson business.
Course: Web801, Front End Web Development
Team: Group 1, Dieneba Diaby and Hamlet Grigoryan
Due: Week 8, Day 3

## 1. Project Overview

Project 1 asked our team to code and build a website for the client Splashes, using the page mockups and style guide the design team finalized, and following the front end direction set in the team meeting: HTML5, CSS3, JavaScript, jQuery, a CSS reset, a modal sign in and register form, responsive breakpoints, and testing across popular browsers and platforms. The required technology stack is HTML5, CSS3, JavaScript ES5, jQuery, Ajax, Bootstrap 4, Vue, and GitHub.

## 2. Findings

Before this update, the repository had 8 HTML pages and a Git history in place, but a review against the requirements document, the team meeting notes, and the actual page mockups found the following:

- The css/style.css file was linked from 7 of the 8 pages but did not exist anywhere in the repository, so those pages had no custom styling applied at all.
- contact.html was the only page actually built to match the approved mockups and style guide, with its own branded header, navigation, hamburger menu, and footer. The other 7 pages used a generic, unstyled Bootstrap layout instead.
- Navigation links in contact.html pointed to swimming-lessons.html and adult-programs.html, filenames that do not exist. The real files are named swim-lessons.html and adult-program.html.
- Several pages (about.html, locations.html, swim-lessons.html, swim-programs.html, and adult-program.html) referenced image files, such as about.jpg and location.jpg, that are not present in the images folder.
- Every page loaded jquery-3.5.1.slim.min.js, a build of jQuery that excludes the Ajax methods, which made the required jQuery plus Ajax component impossible to complete as written.
- The Sign In and Register form existed only as its own page. The team meeting notes and the signin mockups both call for this form to open in a modal from the navigation instead.

## 3. What Was Done

- Built css/style.css as the shared stylesheet for the entire site: a CSS reset, the brand colors and fonts from the Splashes UI Style Guide (Bodoni Moda, Henny Penny, and Open Sans, loaded from the local Fonts folder), consistent pill shaped buttons, a sticky branded header, a hamburger mobile menu, and a full footer with locations, social icons, and sponsor logos.
- Rebuilt the header and footer on all 7 remaining pages (index.html, about.html, swim-lessons.html, swim-programs.html, adult-program.html, locations.html, and signin.html) to match the branded pattern already used correctly in contact.html.
- Corrected the broken navigation links in contact.html and propagated the fixed links to every page.
- Corrected the broken image references across all 5 affected pages, pointing each one to a real file already in the images folder.
- Implemented Sign In and Register as a modal, triggered from the Register or Sign In control in the header and footer of every page, matching the layout in the signin mockup, while keeping the fuller registration form available on signin.html.
- Replaced jquery-3.5.1.slim.min.js with the full jquery-3.5.1.min.js build on every page so the Ajax methods are available.
- Added js/main.js as the shared site script. It contains the hamburger menu logic, the modal's submit handling, a jQuery driven back to top button that fades in and out on scroll, and a jQuery Ajax call using getJSON that loads additional class times from a new data/schedule.json file into the Swim Programs table.
- Trimmed css/contact.css down to only the styles still specific to the Contact page, since the header, footer, hamburger, and button styles it used to duplicate now live once, in style.css.

## 4. Tech Stack

HTML5, CSS3, JavaScript (ES5), jQuery 3.5.1 (full build), Bootstrap 4.5 (CSS and JS bundle), Vue.js 2.6 (one component, on the home page), Font Awesome 5 (footer social icons), Git and GitHub.

## 5. File Structure

```
index.html, about.html, contact.html, locations.html,
signin.html, swim-lessons.html, swim-programs.html,
adult-program.html    the 8 site pages

css/
  style.css            shared site wide styles (new)
  contact.css          Contact page only styles

js/
  main.js              shared site wide script (new)
  contact.js           superseded by main.js, kept for reference

data/
  schedule.json        extra class times, loaded via Ajax (new)

Graphics/               logo and wave art assets
images/                 page photography, icons, sponsor logos
Fonts/                  Bodoni Moda, Henny Penny, Open Sans
Page Mockups/           client approved design mockups (png and pdf)
Style Guide/            Splashes UI Style Guide
Screenshots/            reference screenshots of the finished site
```

## 6. Requirements Checklist

| Requirement | Status |
|---|---|
| Minimum 5 pages | Met. The site has 8 pages. |
| Headings, paragraphs, lists, links, and images | Met. |
| HTML markup with comments | Met. |
| Minimum 1 HTML table | Met. Program Schedule table on swim-programs.html. |
| Minimum 1 HTML form with a submit button | Met. Sign In modal and the full registration form on signin.html. |
| Page layout and content styled with CSS3 | Met. css/style.css. |
| JavaScript interactions and behaviors | Met. Hamburger menu, modal handling, back to top button. |
| Minimum 2 jQuery components, with Ajax in one | Met. Back to top button and the modal submit handler are jQuery components. The Swim Programs schedule loads additional rows via jQuery Ajax. |
| Bootstrap classes and components throughout | Met. Grid, cards, alerts, and the modal component. |
| One simple Vue component | Met. On index.html. |
| Pushed to GitHub | Outstanding. Files are ready to be committed and pushed. |

## 7. What This Means for Splashes

- A consistent, professional brand experience on every page, not just one.
- Visitors no longer encounter broken links or missing photos anywhere on the site.
- The Sign In and Register experience now matches the design the Splashes team reviewed and approved.
- The site is easier to use on phones and tablets.
- A foundation is in place to keep the class schedule current with less manual effort going forward.

## 8. Recommendations and Next Steps

- Review the body content of about.html, locations.html, swim-lessons.html, swim-programs.html, and adult-program.html against each page's individual mockup for closer visual alignment, since this update focused on shared branding, navigation, and the technical requirements rather than a full rebuild of every section.
- Test the site across Chrome, Safari, Firefox, and Edge, and on the standard responsive breakpoints, per the client's testing requirement.
- Do a final visual walkthrough of every page in a browser before the site goes live.
- Establish a simple process for updating data/schedule.json going forward so class times stay current without editing page code.
- Commit and push the updated files to the team GitHub repository, then submit the repository URL as required.

Prepared by Group 1 for Dr. Wissam Ahmed and the Splashes team.
