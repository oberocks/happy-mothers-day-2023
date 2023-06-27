<!-- ./src/pages/Home.vue -->


<script setup lang="ts">

    import TheFooter from '../components/TheFooter.vue'

</script>


<template>

    <div class="relative w-full h-full top-0 left-0 overflow-hidden px-4">

        <div class="max-w-xl bg-pink-100 dark:bg-pink-700 bg-opacity-90 dark:bg-opacity-85 text-pink-800 dark:text-pink-100 rounded-xl shadow-lg mx-auto mb-24 px-6">

            <div class="max-w-2xl mx-auto text-center text-3xl pt-12">
                Happy Mother's Day!
            </div>

            <ul class="text-lg leading-tight py-6">

                <li>Do mother's make</li>
                <li>The world go around?</li>
                <li>When one picks you up,</li>
                <li class="pb-3">After you've fallen down?</li>

                <li>Or maybe when one</li>
                <li>Sees a terrible day,</li>
                <li>And then makes some food</li>
                <li class="pb-3">That can wash it away?</li>

                <li>And what about sick times,</li>
                <li>With snot gobs and goop?</li>
                <li>It's mother's that always</li>
                <li class="pb-3">Know just what to do!</li>

                <li>From bedtime stories</li>
                <li>To moments of truth,</li>
                <li>Mom's persevere,</li>
                <li class="pb-3">And they do it for you.</li>

                <li>So once every year,</li>
                <li>We all take a day,</li>
                <li>To tell our mom's thank you</li>
                <li class="pb-3">In meaningful ways.</li>

                <li>Because mom's are precious.</li>
                <li>And special. And rare.</li>
                <li>They deserve our respect,</li>
                <li class="pb-3">And our love and our care.</li>

                <li>So thank you dear mamas,</li>
                <li>For all that you do,</li>
                <li>You brought us all here,</li>
                <li class="pb-3">And you teach us stuff, too!</li>

                <li>So no matter what happens,</li>
                <li>Remember this truth:</li>
                <li>There is no hero like</li>
                <li>The mom inside of you.</li>

            </ul>

            <TheFooter/>

        </div>

    </div>

</template>

<style>

.heart {
    position: absolute;
    top: -50%;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -m-transform: rotate(-45deg);
    transform: rotate(-45deg)
 }

.heart:before {
    position: absolute;
    top: -50%;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 100%;
}

.heart:after {
    position: absolute;
    top: 0;
    right: -50%;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 100%;
}

@-webkit-keyframes love {
  0%{top:110%}
}
@-moz-keyframes love {
  0%{top:110%}
}
@-ms-keyframes love {
  0%{top:110%}
}
@keyframes love {
  0%{top:110%}
}

</style>
