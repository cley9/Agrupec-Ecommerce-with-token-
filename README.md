## REQUISITOS PARA DEPLOYAR EL ECOMMERCE
- PHP >8.0  <8.2
- .env
```env 
this is aplic if is version the that used webpack for change to vite.js 
- modificar el punto .env en los mix por vite
- MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
- MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
- VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
- VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```
- composer install
- elimina la ruta storage, para que no presente error 

## Configuración para gmail en laravel forma 2

- 1 paso configurar el .env los mail
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=clyutp@gmail.com
MAIL_PASSWORD=*****
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="cleyutp@gmail.com"
MAIL_FROM_NAME="${APP_NAME}"
```

- 2 paso  crear el archivo email
```php
php artisan make:mail EnvioInformacionNewProducto
```