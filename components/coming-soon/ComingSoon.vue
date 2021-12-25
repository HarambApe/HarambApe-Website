<template>
    <div>
        <!-- Start Coming Soon Area -->
        <section class="coming-soon-area">
            <div class="container">
                <div class="coming-soon-content">
                    <img src="~/assets/img/harambape-logo.png" alt="HarambApe Logo" style="max-width: 240px;">
                    <h1 class="mb-1">Coming Soon</h1>
                    <p>The protector of the blockchain is soon to be launched. Stay tuned!</p>
                    <form action="https://harambape.us20.list-manage.com/subscribe/post?u=b84a1388835b236352979dee2&amp;id=af824cf2dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <input type="email" value="" name="EMAIL" id="mce-EMAIL" class="email-input email" placeholder="Enter your email">
                        <button type="submit" class="submit-btn" id="mc-embedded-subscribe">Get notified!</button>
                    </form>

                    <div id="timer" class="mt-4">
                        <div id="days">{{days}} <span>Days</span></div>
                        <div id="hours">{{hours}} <span>Hours</span></div>
                        <div id="minutes">{{minutes}} <span>Minutes</span></div>
                        <div id="seconds">{{seconds}} <span>Seconds</span></div>
                    </div>
                </div>
            </div>
            <hr/>
            <ul class="social-list">
                <li class="list-heading">Join our community:</li>
                <li><a href="https://twitter.com/harambapetoken" target="_new" class="twitter"><font-awesome-icon :icon="['fab', 'twitter']"/></a></li>
                <li><a href="https://discord.gg/ZUFNAfKa9F" target="_new" class="discord"><font-awesome-icon :icon="['fab', 'discord']"/></a></li>
                <li><a href="https://t.me/harambape" target="_new" class="telegram"><font-awesome-icon :icon="['fab', 'telegram']"/></a></li>
                <li><a href="https://github.com/HarambApe" target="_new" class="github"><font-awesome-icon :icon="['fab', 'github']"/></a></li>
            </ul>
        </section>
        <!-- End Coming Soon Area -->
    </div>
</template>

<script>
export default {
    name: 'ComingSoon',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    created() { // Turn data into viewable values
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
    },
    methods: {
        commingSoonTime() {
            let endTime = new Date("January 05, 2022 17:00:00 EST");			
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400); 
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>