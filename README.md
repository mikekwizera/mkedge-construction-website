# Construction Website

This is a starter project for a **construction website** built with **Laravel** for the backend and **Vite + React** for the frontend.

## Project Structure

```
construction/
├── backend/   # Laravel backend
├── frontend/  # Vite + React frontend
```

## Features

- Modern construction website template
- Laravel-powered backend
- React (Vite) frontend
- API-based architecture
- Scalable and easy to extend

## Installation

### Prerequisites

Make sure you have the following installed:

- PHP (>= 8.1)
- Composer
- Node.js & npm
- MySQL or any supported database

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. Navigate to the backend directory and install dependencies:

   ```sh
   cd backend
   composer install
   ```

3. Create a `.env` file:

   ```sh
   cp .env.example .env
   ```

   Configure database and other settings inside `.env`.

4. Generate application key:

   ```sh
   php artisan key:generate
   ```

5. Run migrations:

   ```sh
   php artisan migrate
   ```

6. Navigate to the frontend directory and install dependencies:

   ```sh
   cd ../frontend
   npm install
   ```

## Running the Project

### Backend (Laravel)

```sh
cd backend
php artisan serve
```

### Frontend (Vite + React)

```sh
cd frontend
npm run dev
```

## License

This project is open-source and available under the [MIT License](LICENSE).

MIT License
-----------

Copyright (c) 2025 Mike Kwizera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,
OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
