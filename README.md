# QuickCart Product Dashboard

## Problem Statement

A fictitious e-commerce startup, **QuickCart**, wants to build a Product Listing Dashboard for internal use. The dashboard must:

- Fetch products from an external API
- Display them in a clean, structured UI
- Allow filtering, searching, and basic interaction
- Prepare the foundation for a future React migration

## Features Implemented

- Product fetching from `https://fakestoreapi.com/products`
- Dynamic product card display using Bootstrap layout
- Product details shown with image, title, price, category, rating, and description
- Search bar for product lookup (UI present)
- Cart count interaction for adding products
- Responsive card layout and hover interaction

## Screenshots

<img width="1919" height="1035" alt="Day-3_Assignment-output" src="https://github.com/user-attachments/assets/c313c4ba-9083-490e-aac7-8145c9722bad" />

> Screenshot: Product dashboard layout and UI presentation.

## Challenges Faced

- Ensuring the dynamically generated Bootstrap cards rendered consistently across product data
- Managing text overflow for long titles and descriptions while preserving layout
- Keeping the implementation lightweight and simple while still preparing for future React migration

## Future Improvements

- Implement full search filtering and category filters
- Add product details modal or dedicated product page
- Persist cart state in local storage or backend
- Migrate UI logic to React for better component reuse and maintainability

## How to Run

1. Open `index.html` in a web browser
2. Ensure internet access so the app can fetch products from the external API
3. Click `Add to Cart` on any product card to increment the cart counter
