class Footer {
  render() {
    const rootFooter = document.querySelector("#footer");
    const html = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-logo">
                        <img src="/assets/logos/logo.svg" alt="Dublin Scapes Logo" class="logo" />
                        <img src="/assets/logos/name.svg" alt="Dublin Scapes Logo" class="logo" />
                    </div>

                    <div class="footer-main">
                        <div class="footer-links">
                            <a href="#">Our Mission</a>
                            <a href="./pages/contact/contact.html">Contact</a>
                            <a href="#">Testimonials</a>
                            <a href="#">About Us</a>
                            <a href="./pages/services/services.html">Our Services</a>
                            <a href="./pages/gallery/gallery.html">Galleries</a>
                        </div>
                        <div class="footer-divider"></div>
                        <div class="footer-social">
                            <div class="footer-icons"><img src="/assets/icons/facebook.svg" alt="Facebook"></div>
                            <div class="footer-icons"><img src="/assets/icons/tiktok.svg" alt="TikTok"></div>
                            <div class="footer-icons"><img src="/assets/icons/instagram.svg" alt="Instagram"></div>
                            <div class="footer-icons"><img src="/assets/icons/twitter.svg" alt="Twitter"></div>
                            <div class="footer-icons"><img src="/assets/icons/whatsup.svg" alt="WhatsApp"></div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    rootFooter.innerHTML = html;
  }
}

const footer = new Footer();
footer.render();
