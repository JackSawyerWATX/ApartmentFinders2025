# Rod Morrison - Houston Apartment Finder

A professional parallax scrolling website for apartment finder services in Houston, Texas.

## Features

- Smooth parallax scrolling effects with Houston skyline imagery
- Responsive navigation with hamburger menu
- Modal contact form with data validation
- Toast notification system to prevent data loss
- EmailJS integration for form submissions
- Modern blue gradient color scheme
- Mobile-responsive design

## File Structure

```
project/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── HoustonSkylineDay.jpg
    ├── HoustonGalleria.jpg
    └── TexasMedicalCenter.jpg
```

## Setup Instructions

### 1. Clone or Download Files
Ensure all three main files (index.html, styles.css, script.js) are in the same directory.

### 2. Add Images
Create an `images` folder in your project directory and add your three Houston images:
- HoustonSkylineDay.jpg
- HoustonGalleria.jpg
- TexasMedicalCenter.jpg

### 3. Configure EmailJS

1. Sign up for a free account at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with the following variables:
   - firstName
   - lastName
   - email
   - mobile
   - moveInDate
   - location
   - priceRange
   - bedrooms
   - hasPets
   - petTypes
   - washerDryer
   - floorPreference
   - comments

4. Open `script.js` and replace the following placeholders:
   - Line 2: `YOUR_USER_ID` with your EmailJS User ID
   - Line 149: `YOUR_SERVICE_ID` with your EmailJS Service ID
   - Line 149: `YOUR_TEMPLATE_ID` with your EmailJS Template ID

### 4. Launch the Website
Open `index.html` in a web browser. For local development, you can use:
- Live Server extension in VS Code
- Python's built-in server: `python -m http.server`
- Node's http-server: `npx http-server`

## Customization

### Parallax Speed
Adjust the `data-speed` attribute in index.html:
- Lower values (0.1) = slower movement
- Higher values (0.5) = faster movement

### Color Scheme
Main colors are defined in styles.css:
- Primary blue: `#4facfe`
- Dark blue backgrounds: `#1a2332`, `#1e2a3a`
- Accent blue: `#00f2fe`

### Section Content
Edit text content directly in index.html within the appropriate section tags.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- EmailJS Browser SDK (loaded via CDN)
- No other external dependencies required

## License Information

Licensed by TREC - Broker License #: 401122

## Support

For questions or issues, contact Rod Morrison through the website contact form.

## Credits

Designed and developed for Rod Morrison's Houston apartment finder service.