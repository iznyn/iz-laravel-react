# Izn Laravel React

Modern web development boilerplate with laravel, react and inertia

## Technology
1. Laravel (http://laravel.com)
2. React (http://react.com)
3. Inertia (http://inertiajs.com)

## Instalation
1. Clone project  
```sh
git clone project_url project_folder
```
2. Install Laravel
```sh
composer install
cp .env.example .env
php artisan key:generate
```
3. Prepare the database

3.1. Create new database

3.2. Change database settings in .env

3.3. Importing database with run:
```sh
php artisan migrate
php artisan db:seed
```
4. Install frontend
```sh
npm install
```

## Developing
```sh
npm run dev
```

With watch files
```sh
npm run watch
```

## Production
```sh
npm run production
```
