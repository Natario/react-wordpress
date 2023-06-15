<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'react_wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress_admin' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress_admi' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'UqU}-nvF}:})WSc3yc8e,oozlsW55[lp,qajx(z^*t^vX]q$(hPnc}X6Fq0`@s;Z' );
define( 'SECURE_AUTH_KEY',  'jfd8TeZp))=8jkLXL|nqN]+.).[___?4Wg#4<I8m%g(0yGGX*kkPT.P(q[Nsy?Uf' );
define( 'LOGGED_IN_KEY',    '%d4!/^KJWulHXcJJN8;0#MW$bfQlA# 0GFz0[]^h}ZB=iHop#),|*N>FFzI6U0qP' );
define( 'NONCE_KEY',        'u!!7x%olE2>yF}bI[|>a^ ]W$2K|+^EuNW:*x H|3@D*tCpJ7(29SO`sB#-E#:nr' );
define( 'AUTH_SALT',        'JT`;#<T*`j#9>?cgsG#-BMGO0CBGY32%_T8|/7|CYc.L@F2pm`G[9]o~8Hdp-%j>' );
define( 'SECURE_AUTH_SALT', '9}f%(Z;]c4TO&0MW9dBo!bAI5nKx/Yo|.VC?gQDdfA}N%~6bQP)7?sIaX 5<3K r' );
define( 'LOGGED_IN_SALT',   '[2%=~NQbDp}kgEhW1&dG*|nktO%epUUn_>;Upx>wE4B,pHD3EE?E%5e23HR.3$5*' );
define( 'NONCE_SALT',       '3QS&B#$VlA+Op.taIhp*2])ZsM|gZ~[d3MNGC:Ds:gLP=>i.m}Srs|& .;L[vjl7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
