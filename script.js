< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Personal Portfolio</title>
                    <link rel="stylesheet" href="styles.css">
                    </head>
                    <body>
                        <header>
                            <nav>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </header>

                        <section id="home">
                            <h1>Welcome to My Portfolio</h1>
                            <p>A brief introduction about yourself.</p>
                        </section>

                        <section id="about">
                            <h2>About Me</h2>
                            <p>Details about your background, skills, and experience.</p>
                        </section>

                        <section id="portfolio">
                            <h2>My Work</h2>
                            <div class="portfolio-items">
                                <div class="item">Project 1</div>
                                <div class="item">Project 2</div>
                                <div class="item">Project 3</div>
                            </div>
                        </section>

                        <section id="contact">
                            <h2>Contact Me</h2>
                            <form>
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required>

                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required>

                                        <label for="message">Message:</label>
                                        <textarea id="message" name="message" required></textarea>

                                        <button type="submit">Send</button>
                                    </form>
                                </section>

                                <button id="back-to-top" onclick="scrollToTop()">⬆ Back to Top</button>

                                <footer>
                                    <p>&copy; 2025 Your Name. All rights reserved.</p>
                                </footer>

                                <script>
                                    window.onscroll = function() {
            var button = document.getElementById("back-to-top");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                                        button.style.display = "block";
            } else {
                                        button.style.display = "none";
            }
        };

                                    function scrollToTop() {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
                                </script>

                                <style>
                                    #back-to-top {
                                        display: none;
                                    position: fixed;
                                    bottom: 20px;
                                    right: 20px;
                                    background: #333;
                                    color: #fff;
                                    border: none;
                                    padding: 10px 15px;
                                    cursor: pointer;
                                    border-radius: 5px;
        }
                                    #back-to-top:hover {
                                        background: #555;
        }
                                </style>
                            </body>
                        </html>
