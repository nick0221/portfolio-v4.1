# NickDevs Portfolio Website

A modern personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 3**.  
Showcases projects, technical skills, experience, and includes interactive features like **animated sections**, **floating navigation**, and **portfolio gallery with swipe support**.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contribution](#contribution)
- [License](#license)
- [Demo](#demo)

---

## Features

- Fully responsive design for mobile, tablet, and desktop
- Floating menu with **scrollspy navigation**
- Animated content sections on page load using **Framer Motion**
- Portfolio section with:
  - Project previews with image thumbnails
  - Tech stack badges
  - View more/less description
  - Gallery modal with **swipe support** and keyboard navigation
- Light/Dark logo variations
- Smooth hover and fade-in animations

---

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/research-website-template.git
cd research-website-template
```

2. **install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

###### Open http://localhost:3000 in your browser to view the website.

## Usage

- Navigate through sections using the floating menu
- Click on portfolio items to see demo links or code links
- Click View More to expand long project descriptions
- Click on project images to open the gallery modal with left/right swipe and keyboard arrow support
- Press ESC to close the modal

## Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

The website is production-ready and can be deployed to Vercel or any hosting that supports Next.js.

## File Structure

```bash
/components      # React components (PortfolioEntry, FloatingMenu, GalleryModal, etc.)
/data            # JSON/TypeScript data files (portfolioData, aboutMe, sectionOrder, etc.)
/pages           # Next.js pages
/public          # Public assets like images and logos
/styles          # Global CSS and Tailwind imports
/README.md       # Project README
```

## Contribution

Contributions are welcome!
Please open an issue or pull request for improvements, bug fixes, or new features.

## License

This project is open-source and available under the MIT License.

## Demo

Visit the live site: https://nickdevs.vercel.app/
