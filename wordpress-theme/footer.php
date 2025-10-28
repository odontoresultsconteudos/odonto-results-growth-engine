</main>

<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-column">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.svg" alt="<?php bloginfo('name'); ?>" style="height: 40px; margin-bottom: 1rem;">
                <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    Transformando clínicas odontológicas através do Método Paciente Previsível.
                </p>
            </div>
            
            <div class="footer-column">
                <h4 style="font-weight: 700; margin-bottom: 1rem;">Navegação</h4>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'menu_class' => 'footer-menu',
                    'fallback_cb' => false,
                ));
                ?>
            </div>
            
            <div class="footer-column">
                <h4 style="font-weight: 700; margin-bottom: 1rem;">Contato</h4>
                <ul style="list-style: none; font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                    <li>faleconosco@odontoresults.com.br</li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
