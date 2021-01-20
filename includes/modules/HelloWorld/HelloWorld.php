<?php

class MBOMA_HelloWorld extends ET_Builder_Module {

	public $slug       = 'mboma_hello_world';
	public $vb_support = 'on';

	protected $module_credits = array(
		'module_uri' => 'http://mzoo.org',
		'author'     => 'Mike iLL Kilmer',
		'author_uri' => 'http://mzoo.org',
	);

	public function init() {
		$this->name = esc_html__( 'Hello World', 'mbma-mbo-media-access' );
	}

	public function get_fields() {
		return array(
			'content' => array(
				'label'           => esc_html__( 'Content', 'mbma-mbo-media-access' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Content entered here will appear inside the module.', 'mbma-mbo-media-access' ),
				'toggle_slug'     => 'main_content',
			),
		);
	}

	public function render( $attrs, $content = null, $render_slug ) {
		return sprintf( '<h1>%1$s</h1>', $this->props['content'] );
	}
}

new MBOMA_HelloWorld;
