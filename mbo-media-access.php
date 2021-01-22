<?php
/*
Plugin Name: Mindbody Media Access Plugin
Plugin URI:  http://mzoo.org
Description: Add Mindbody media products to Divi pages.
Version:     1.0.0
Author:      Mike iLL Kilmer
Author URI:  http://mzoo.org
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: mboma-mbo-media-access
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
namespace MBO_Media_Access;
use MBO_Media_Access as NS;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Constants
 */

define( __NAMESPACE__ . '\NS', __NAMESPACE__ . '\\' );

define( NS . 'PLUGIN_NAME', 'on-demand-yoga' );

define( NS . 'PLUGIN_VERSION', '1.0.0' );

define( NS . 'PLUGIN_NAME_DIR', plugin_dir_path( __FILE__ ) );

define( NS . 'PLUGIN_NAME_URL', plugin_dir_url( __FILE__ ) );

define( NS . 'PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

define( NS . 'PLUGIN_TEXT_DOMAIN', 'on-demand-yoga' );

add_action( 'admin_init', __NAMESPACE__ . '\mbo_media_access_has_mindbody_api' );

/**
 * Insure that parent plugin, is active or deactivate plugin.
 */
function mbo_media_access_has_mindbody_api() {
	if ( is_admin() && current_user_can( 'activate_plugins' ) && !is_plugin_active( 'mz-mindbody-api/mz-mindbody.php' ) ) {
		add_action( 'admin_notices', __NAMESPACE__ . '\\mbo_media_access_child_plugin_notice' );

		deactivate_plugins( plugin_basename( __FILE__ ) ); 

		if ( isset( $_GET['activate'] ) ) {
			unset( $_GET['activate'] );
		}
	}
}

function buy_subscribe_links($price){
    $html = '';
    $html .= '          <div class="wp-audio-price-signup">';
	$html .= '			    <a href="#">Buy ($' . $price . ') </a> | <a href="#">Subscribe</a>';
	$html .= '          </div>';
	return $html;
}



/**
 * Child Plugin Notice
 */
function mbo_media_access_child_plugin_notice(){
		?><div class="error"><p><?php echo __("Sorry, but MZ MBO Media Access plugin requires the parent plugin, MZ Mindbody API, to be installed and active.", NS\PLUGIN_TEXT_DOMAIN); ?></p></div><?php
}


if ( ! function_exists( 'mboma_initialize_extension' ) ):
/**
 * Creates the extension's main class instance.
 *
 * @since 1.0.0
 */
function mboma_initialize_extension() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/MboMediaAccess.php';
}
add_action( 'divi_extensions_init', __NAMESPACE__ . '\\mboma_initialize_extension' );

endif;
