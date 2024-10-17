### https://user-generator-front.onrender.com/

# Fake User Data Generator

This React-based web application generates fake (random) user data with customizable settings. It's designed to provide a flexible and interactive way to create sample data for testing or development purposes.

## Features

- **Region Selection**: Choose from at least 3 different regions (e.g., Poland, USA, Georgia).
- **Error Rate Control**: 
  - Specify the number of errors per record using a slider (0-10) and a linked number field.
  - Maximum error value can be set up to at least 1000.
- **Seed Management**:
  - Define a seed value for consistent random generation.
  - [Random] button to generate a new random seed.
- **Dynamic Data Generation**: Table updates automatically when settings are changed.
- **Infinite Scrolling**: 
  - Initially displays 20 records.
  - Loads 10 more records when scrolling to the bottom.

## Table Fields

1. Index (1, 2, 3, ...) - No errors applied
2. Random Identifier - No errors applied
3. Name + Middle Name + Last Name (formatted according to region)
4. Address (multiple formats supported)
5. Phone Number (multiple formats supported, including international and local)




