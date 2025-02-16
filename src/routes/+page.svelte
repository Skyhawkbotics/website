<script lang="ts">
    import { base } from "$app/paths";
    import { isMenuOpen } from "$stores/menu";

    import logo from "$assets/Hawkbotics_clear.png";
    import robot from "$assets/robot.jpeg";
    import work from "$assets/IMG_8757.jpeg";
</script>

<svelte:head>
    <title>Hawkbot1cs</title>
</svelte:head>

<section id="main" class="section hero" class:open={$isMenuOpen}>
    <div class="hero--content">
        <br /><br />

        <p class="hero--content--title">Home | Hawkbot1cs</p>
        

        <br />

        <p class="hero--content--subtitle">
            Welcome to the official website of the Hawkbot1cs nonprofit and its community FIRST Tech Challenge robotics team, Hawkbot1cs 20790!
        </p>

        <br />

        <a href="{base}/learn" class="hero--content--button">Learn More About Us</a>

        <br /><br />
    </div>

    <img src={logo} alt="logo" class="hero--image" />
</section>

<p class="section-title" class:open={$isMenuOpen}>Our Mission</p>

<section id="mission" class="features section all" class:open={$isMenuOpen}>
    <br /><br />

    <div class="features--row">
        <div class="features--item">
            <i class="fa-solid fa-gem" />

            <div class="features--item--content">
                <p class="features--item--content--title">
                    Teach and Develop Lifelong STEM Skills!
                </p>

                <p class="features--item--content--description">
                    Each year, our society continues to develop and adapt to new technology and ideas. Our
                    primary mission is to prepare youth in the community by providing STEM education (specifically
                     through robotics) so that they can be the future of this technological development in order to be competitive in the 21st century.
                </p>
            </div>
        </div>

        <div class="features--item">
            <i class="fa-solid fa-paper-plane" />

            <div class="features--item--content">
                <p class="features--item--content--title">Compete in the First Tech Challenge!</p>

                <p class="features--item--content--description">
                    What better way to learn STEM skills than through the context of a game? The First Tech Challenge
                    is a competition that brings together robotics teams from all around the country to
                    compete in a theme-based game, usually based on current events! Most of what we do as a nonprofit is related to the Challenge as we spend about
                    1/2 of our year preparing for this, starting with Kickoff in September and the
                    league tournament in early February, but you can find us at league meets across Oregon around
                    November and December!
                </p>
            </div>
        </div>
    </div>

    <div class="features--row">
        <div class="features--item">
            <i class="fa-solid fa-rocket" />

            <div class="features--item--content">
                <p class="features--item--content--title">
                    Learn Teamwork Through Fun, Interactive Projects!
                </p>

                <p class="features--item--content--description">
                    As students, we acknowledge that we still have lots to learn, and strong teamwork and cooperation skills are critical to this.
                    Today, the biggest advancements in science and technology are made by large teams of brilliant and dedicated people, not isolated individuals. 
                    We hope to bring these valuable teamwork
                    skills to the competition and beyond!
                </p>
            </div>
        </div>

        <div class="features--item">
            <i class="fa-solid fa-signal" />

            <div class="features--item--content">
                <p class="features--item--content--title">Be Inclusive and Have Fun!</p>

                <p class="features--item--content--description">
                    What better way to learn, than to be surrounded by supportive, like-minded team
                    members in a casual and engaging environment? When it comes to STEM education and robotics specifically, this
                    team's motto is, "Just bring yourself. We'll fill you in on the rest later."
                </p>
            </div>
        </div>
    </div>

    <br /><br />
</section>

<br /><br />

<section id="bottom" class="bottom" class:open={$isMenuOpen}>
    <div class="bottom--section">
        <img src={robot} alt="robot" />

        <p class="bottom--section--title">About Us</p>

        <p class="bottom--section--description">
            Our main program, the FIRST Tech Challenge robotics team Hawkbot1cs 20790, currently meets at Southridge High School, in Beaverton, Oregon. As a team,
             we are dedicated to developing great skills and fostering great friendships. Founded
            in 2021 with the goal of competing in the First Tech Challenge, we overcame many
            challanges faced by many entrepeneurs, and eventually grew from a school club into a registered 501(c)(3) with a broadened mission. We can't wait to
            see you at this year's FIRST Tech Challenge, Into The Deep!
        </p>

        <a href="{base}/learn" class="bottom--section--button">More</a>
    </div>

    <div class="bottom--divider" />

    <div class="bottom--section">
        <p class="bottom--section--title">Donate</p>

        <p class="bottom--section--description">
            Your contributions are critical to the success of our mission! Between the costs of supporting our robotics team and 
            some of the other programs we offer, we wouldn't be able to have such an impact in our community without the support
            of our generous donors. All donations go directly to supporting our programs and are tax deductible, so please consider
            making a contribution. Thank you!
        </p>

        <a href="{base}/donate" class="bottom--section--button">More</a>

        <br />

        <img src={work} alt="work" />
    </div>
</section>

<br /><br />

<style lang="scss">
    @import "$styles/variables";

    .bottom {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        margin: 0 5rem;
        width: calc(100% - 10rem);

        transition: width 0.5s ease, margin-left 0.5s ease;

        &:not(.open) {
            width: calc(100% - 8rem);
            margin-left: 3rem;
        }

        &--divider {
            width: 2px;
            background-color: $pageBorder;
            height: 100%;
        }

        &--section {
            width: calc(50% - 1rem - 2px);

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            &--title {
                color: $pageText;
                font-family: "Roboto Slab", serif;
                font-size: 14pt;
                font-weight: bold;
                margin-bottom: 0;
            }

            &--description {
                color: $pageTextDark;
                font-family: "Open Sans", sans-serif;
                font-size: 12pt;
            }

            &--button {
                color: $buttonText;

                text-transform: uppercase;
                text-decoration: none;

                font-family: "Roboto Slab", serif;
                font-size: 10pt;
                font-weight: bold;

                padding: 0.5rem 1.25rem;
                border: 2px solid $buttonBorder;
                border-radius: 4px;

                transition: color 0.5s ease, background-color 0.5s ease;

                &:hover {
                    color: $buttonTextHover;
                    background-color: $buttonBackground;
                }
            }

            img {
                width: 100%;
                border-radius: 8px;
            }
        }
    }

    .section {
        border-bottom: 2px solid $pageBorder;

        &.all {
            border-top: 2px solid $pageBorder;
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

    .features {
        margin: 0 5rem;
        width: calc(100% - 10rem);

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        transition: width 0.5s ease, margin-left 0.5s ease;

        &:not(.open) {
            width: calc(100% - 8rem);
            margin-left: 3rem;
        }

        &--row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            width: 100%;
        }

        &--item {
            width: calc(50% - 1rem);

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            i {
                color: $pageTextHighlight;
                font-size: 40pt;
                margin-right: 2rem;
            }

            &--content {
                &--title {
                    color: $pageText;
                    font-family: "Roboto Slab", serif;
                    font-weight: bold;
                    font-size: 14pt;
                    line-height: 1.75rem;
                }

                &--description {
                    color: $pageTextDark;
                    font-family: "Open Sans", sans-serif;
                    font-size: 12pt;
                    line-height: 1.75rem;
                }
            }
        }
    }

    .hero {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        height: 30rem;
        margin: 0.5rem 5rem;
        width: calc(100% - 10rem);

        transition: width 0.5s ease, margin-left 0.5s ease;

        &:not(.open) {
            width: calc(100% - 8rem);
            margin-left: 3rem;
        }

        &--content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            height: 100%;
            width: calc(50% - 1rem);
            margin-right: 0.5rem;

            &--title {
                color: $headerLogoTextStrong;
                font-family: "Press Start 2P", serif;
                font-weight: 400;
                font-style: normal;
                font-size: 40pt;
                margin: 0;
            }

            &--subtitle {
                color: $pageTextDark;
                font-family: "Open Sans", sans-serif;
                font-size: 12pt;
            }

            &--button {
                color: $buttonText;

                text-transform: uppercase;
                text-decoration: none;

                font-family: "Roboto Slab", serif;
                font-size: 10pt;
                font-weight: bold;

                padding: 0.75rem 1.5rem;
                border: 2px solid $buttonBorder;
                border-radius: 4px;

                transition: color 0.5s ease, background-color 0.5s ease;

                &:hover {
                    color: $buttonTextHover;
                    background-color: $buttonBackground;
                }
            }
        }

        &--image {
            width: calc(50% - 1rem);
            margin-left: 0.5rem;
        }
    }

    @media screen and (max-width: 850px) {
        .features {
            &--row {
                flex-direction: column;
            }

            &--item {
                width: 100%;
            }
        }

        .hero {
            flex-direction: column-reverse;
            height: auto;
            padding-top: 2rem;

            &--content {
                width: 100%;
                margin-right: 0;
            }

            &--image {
                width: 100%;
                margin-left: 0;
            }
        }

        .bottom {
            flex-direction: column;

            &--section {
                width: 100%;
            }

            &--divider {
                width: 100%;
                height: 2px;

                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
            }
        }
    }
</style>
