<?php
/**
 * Odonto Results Theme Functions
 */

// Suporte a recursos do tema
function odonto_results_setup() {
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'odonto-results'),
        'footer' => __('Menu Rodapé', 'odonto-results'),
    ));
}
add_action('after_setup_theme', 'odonto_results_setup');

// Enfileirar estilos e scripts
function odonto_results_scripts() {
    // Estilo principal
    wp_enqueue_style('odonto-results-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Lucide Icons (via CDN)
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null, true);
    
    // Script principal
    wp_enqueue_script('odonto-results-main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'odonto_results_scripts');

// Registrar áreas de widget
function odonto_results_widgets_init() {
    register_sidebar(array(
        'name'          => __('Barra Lateral', 'odonto-results'),
        'id'            => 'sidebar-1',
        'description'   => __('Adicione widgets aqui.', 'odonto-results'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'odonto_results_widgets_init');

// Customizar excerpt
function odonto_results_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'odonto_results_excerpt_length');

function odonto_results_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'odonto_results_excerpt_more');

// Adicionar classes personalizadas ao body
function odonto_results_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    return $classes;
}
add_filter('body_class', 'odonto_results_body_classes');

// Shortcode para botão CTA
function odonto_results_cta_button($atts) {
    $atts = shortcode_atts(array(
        'text' => 'Agende uma Apresentação',
        'url' => 'https://form.odontoresults.com.br/dLTRVKuI',
        'style' => 'primary',
    ), $atts);
    
    $class = 'btn btn-' . esc_attr($atts['style']);
    
    return '<a href="' . esc_url($atts['url']) . '" class="' . $class . '" target="_blank" rel="noopener noreferrer">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('cta_button', 'odonto_results_cta_button');

// Remover jQuery Migrate
function odonto_results_remove_jquery_migrate($scripts) {
    if (!is_admin() && isset($scripts->registered['jquery'])) {
        $script = $scripts->registered['jquery'];
        if ($script->deps) {
            $script->deps = array_diff($script->deps, array('jquery-migrate'));
        }
    }
}
add_action('wp_default_scripts', 'odonto_results_remove_jquery_migrate');
