<?php get_header(); ?>

<div class="hero-section">
    <div class="container">
        <h1>Bata recorde de faturamento com pacientes certos na sua agenda</h1>
        <p>Captação de Leads Qualificados, Vitrine de Autoridade, Google Top 1, Agendamento Profissional (CRC + IA) e CRM inteligente para transformar leads em pacientes.</p>
        
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="https://form.odontoresults.com.br/dLTRVKuI" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Agende uma Apresentação
            </a>
            <a href="#como-trabalhamos" class="btn btn-outline">
                Ver como funciona
            </a>
        </div>
        
        <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
            Sem compromisso • Apresentação personalizada • Plano claro para 90 dias
        </p>
    </div>
</div>

<section class="section" style="background: hsl(var(--secondary) / 0.3);">
    <div class="container">
        <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; text-align: center;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="font-size: 2.5rem; font-weight: 700; color: hsl(var(--accent));">1500+</div>
                <div style="text-align: left;">
                    <div style="font-weight: 600;">Clínicas</div>
                    <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">atendidas</div>
                </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="font-size: 2.5rem; font-weight: 700; color: hsl(var(--accent));">500 mil+</div>
                <div style="text-align: left;">
                    <div style="font-weight: 600;">Leads</div>
                    <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">gerados</div>
                </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="font-size: 2.5rem; font-weight: 700; color: hsl(var(--accent));">10 milhões+</div>
                <div style="text-align: left;">
                    <div style="font-weight: 600;">Gerenciados em</div>
                    <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">tráfego pago</div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <h2 class="section-title">Seu crescimento em 5 pilares</h2>
        <p class="section-subtitle">Estratégia ponta a ponta — do anúncio ao comparecimento — para transformar leads em pacientes.</p>
        
        <div class="grid grid-cols-3">
            <?php
            $pilares = array(
                array('titulo' => 'Captação de Leads Qualificados', 'descricao' => 'Anúncios segmentados por tratamento e localização no Facebook, Instagram e Google.'),
                array('titulo' => 'Vitrine de Autoridade', 'descricao' => 'Conteúdo estratégico que reduz o risco percebido e aumenta a confiança.'),
                array('titulo' => 'Google Top 1', 'descricao' => 'Otimização de Google Maps e SEO local para alcançar Top 3, em média, nas buscas da sua região.'),
                array('titulo' => 'Agendamento Profissional', 'descricao' => 'CRC treinada + IA 24h no WhatsApp para garantir velocidade e consistência no atendimento.'),
                array('titulo' => 'CRM Inteligente', 'descricao' => 'Funil claro com foco em Agendamento e Comparecimento, tarefas e automações que aumentam aproveitamento.'),
            );
            
            foreach ($pilares as $pilar) :
            ?>
                <div class="card">
                    <div class="card-icon">
                        <i data-lucide="target"></i>
                    </div>
                    <h3><?php echo $pilar['titulo']; ?></h3>
                    <p><?php echo $pilar['descricao']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <a href="https://form.odontoresults.com.br/dLTRVKuI" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Conhecer o Método
            </a>
        </div>
    </div>
</section>

<?php if (have_posts()) : ?>
    <section class="section" style="background: hsl(var(--secondary) / 0.3);">
        <div class="container">
            <h2 class="section-title">Blog da Odonto Results</h2>
            <p class="section-subtitle">Confira nossas dicas, estratégias e insights para clínicas odontológicas crescerem mais com marketing digital.</p>
            
            <div class="grid grid-cols-3">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 1.5rem; border-radius: 0.5rem; overflow: hidden;">
                                <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: auto;')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <h3>
                            <a href="<?php the_permalink(); ?>" style="text-decoration: none; color: hsl(var(--foreground));">
                                <?php the_title(); ?>
                            </a>
                        </h3>
                        <p><?php the_excerpt(); ?></p>
                        <a href="<?php the_permalink(); ?>" style="color: hsl(var(--accent)); font-weight: 600;">Ler mais →</a>
                    </article>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>
