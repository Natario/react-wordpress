<?php

/**
 * Plugin Name: Custom API Route WP Plugin
 * Description: Add a custom route to Wordpress' REST API
 * 
 */



/**
 * Register custom API route at /wp-json/custom-api/v1/reviews
 */
add_action( 'rest_api_init', 'custom_api_register_route' );
function custom_api_register_route() {
     register_rest_route(
        'custom-api/v1',
        '/reviews/',
        array(
            'methods'  => 'GET',
            'callback' => 'custom_api_get_reviews',
            'permission_callback' => '__return_true'
        )
    );
}


/**
 * Read JSON file and send it as-is to the user
 */
function custom_api_get_reviews() {
    return json_decode(file_get_contents(__DIR__ . '/data.json'));
}