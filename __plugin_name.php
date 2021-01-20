<?php
/*
Plugin Name: Mbo Media Access
Plugin URI:  http://mzoo.org
Description: Add Mindbody media products to Divi pages.
Version:     1.0.0
Author:      Mike iLL Kilmer
Author URI:  http://mzoo.org
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: mbma-mbo-media-access
Domain Path: /languages

Mbo Media Access is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Mbo Media Access is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Mbo Media Access. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/


if ( ! function_exists( 'mbma_initialize_extension' ) ):
/**
 * Creates the extension's main class instance.
 *
 * @since 1.0.0
 */
function mbma_initialize_extension() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/MboMediaAccess.php';
}
add_action( 'divi_extensions_init', 'mbma_initialize_extension' );
endif;
