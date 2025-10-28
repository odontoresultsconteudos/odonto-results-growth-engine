<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="section">
            <div class="container" style="max-width: 800px;">
                <header class="entry-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem;">
                        <?php the_title(); ?>
                    </h1>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div style="margin-bottom: 2rem; border-radius: 0.75rem; overflow: hidden;">
                        <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto;')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content" style="line-height: 1.8; color: hsl(var(--foreground));">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>
