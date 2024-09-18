<script lang="ts">
    import { isMenuOpen } from "$stores/menu";

    import robot from "$assets/robot.jpeg";
</script>

<svelte:head>
    <title>Our Work</title>
</svelte:head>

<p class="section-title" class:open={$isMenuOpen}>Our Work</p>

<section id="about" class="about" class:open={$isMenuOpen}>
    <img src={robot} alt="robot" />
    
    <p class="section-header">Our Vision:</p>
    <p class="about--text">
      This organization was born out of a vision that every single youth deserves easy and free access to quality STEM education that is fun and engaging.  
    </p>
    
    <p class="section-header">Our Values:</p>
    <p class="about--text">
        Occupations in the STEM world will dominate our economy and its effects will be felt in our lives, whether we are directly involved or not. That’s why it’s critical to provide youth with free, quality STEM education to meet them where they are at, inspire them, and support them in their growth. The best way to learn is in an environment where cooperation and competition are balanced, where all youth are included, and where everyone grows, succeeds, and has fun! 
    </p>
    
    <p class="section-header">Our Mission:</p>
    <p class="about--text">
        Our mission is to provide access to STEM (science, technology, education, and mathematics) education for youth in our community. Through youth participation in preparing, designing, building, testing, promoting, and competing with robots, Hawkbot1cs provides learning experiences related to STEM education, but also character development, encouraging leadership, communication, teamwork, and more.
    </p>


    <p class="section-header">Our Work:</p>
    <p class="about--text">
        We currently offer STEM opportunities to youth in our community directly through our robotics team, in which students from grades 7-12 are invited to participate and anyone else is welcome to mentor and support us! We also often attend elementary and middle school science fairs in an effort to inspire youth and have displays at feeder school club fairs. For more information about current upcoming events, head over to our Events page for live updates on our events!
    </p>
      
      
    
</section>

<br /><br />

<style lang="scss">
    @import "$styles/variables";

    .about {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        margin: 0 5rem;
        width: calc(100% - 10rem);

        transition: width 0.5s ease, margin-left 0.5s ease;

        &:not(.open) {
            width: calc(100% - 8rem);
            margin-left: 3rem;
        }

        &--text {
            color: $pageTextDark;
            font-family: "Open Sans", sans-serif;
            font-size: 11pt;
        }

        img {
            width: 100%;
            border-radius: 8px;
        }
    }

    .section-title {
        font-family: "Roboto Slab", serif;
        font-size: 40pt;
        font-weight: bold;
        color: $pageText;
        margin-left: 5rem;

        &:not(.open) {
            margin-left: 3rem;
        }
    }
 
    .section-header {
        font-family: "Open Sans", sans-serif;
        font-size: 20pt;
        font-weight: bold;
        color: $pageText;
        margin-left: 5rem;

        &:not(.open) {
            margin-left: 3rem;
        }
    }
</style>
