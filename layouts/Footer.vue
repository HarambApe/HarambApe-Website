<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <NuxtLink to="/">
                                HarambApe
                            </NuxtLink>
                        </div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Company</h3>
                        <ul class="list">
                            <li><NuxtLink to="/about-style-one">About Us</NuxtLink></li>
                            <li><NuxtLink to="/service-style-one">Services</NuxtLink></li>
                            <li><NuxtLink to="/features">Features</NuxtLink></li>
                            <li><NuxtLink to="/pricing">Our Pricing</NuxtLink></li>
                            <li><NuxtLink to="/blog-grid">Latest News</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><NuxtLink to="/faq">FAQ's</NuxtLink></li>
                            <li><NuxtLink to="/project-style-one">Project</NuxtLink></li>
                            <li><NuxtLink to="/feedback">Feedback</NuxtLink></li>
                            <li><NuxtLink to="/team">Team</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Address</h3>
                        
                        <ul class="footer-contact-info">
                            <li>27 Division St, New York, NY 10002, USA</li>
                            <li>Email: <a href="mailto:pasona@gmail.com">pasona@gmail.com</a></li>
                            <li>Phone: <a href="tel:321984754">+ (321) 984 754</a></li>
                        </ul>
                        <ul class="social-links">
                        </ul>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2020 Pasona. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>

        <back-to-top bottom="50px" right="50px">
            <div class="go-top">Top</div>
        </back-to-top>
    </footer>
    <!-- End Footer Area -->
</template>

<script>
export default {
    name: 'Footer',
}
</script>