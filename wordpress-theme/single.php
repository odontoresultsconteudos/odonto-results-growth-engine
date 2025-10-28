<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="section">
            <div class="container" style="max-width: 800px;">
                <header class="entry-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">
                        <?php the_title(); ?>
                    </h1>
                    
                    <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                        <time datetime="<?php echo get_the_date('c'); ?>">
                            <?php echo get_the_date(); ?>
                        </time>
                        <?php if (has_category()) : ?>
                            <span> • </span>
                            <?php the_category(', '); ?>
                        <?php endif; ?>
                    </div>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div style="margin-bottom: 2rem; border-radius: 0.75rem; overflow: hidden;">
                        <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto;')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content" style="line-height: 1.8; color: hsl(var(--foreground));">
                    <?php the_content(); ?>
                </div>
                
                <?php if (has_tag()) : ?>
                    <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">Tags:</div>
                        <?php the_tags('<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">', '', '</div>'); ?>
                    </footer>
                <?php endif; ?>
            </div>
        </div>
    </article>
    
    <div class="section" style="background: hsl(var(--secondary) / 0.3);">
        <div class="container" style="max-width: 800px; text-align: center;">
            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">
                Pronto para transformar sua clínica?
            </h2>
            <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem;">
                Agende uma apresentação e receba um plano claro para os próximos 90 dias.
            </p>
            <a href="https://form.odontoresults.com.br/dLTRVKuI" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Agende uma Apresentação
            </a>
        </div>
    </div>
<?php endwhile; ?>

<?php get_footer(); ?>
