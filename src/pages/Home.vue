<!-- ./src/pages/Home.vue -->


<script setup lang="ts">

    import { ref } from 'vue'
    import TheFooter from '../components/TheFooter.vue'
    // import VvFa from '../components/vv/elements/VvFa.vue'
    // import { onMounted, ref } from 'vue'
    // import VvEl from '../components/vv/elements/VvEl.vue'

    // const swap1 = ref(false)

    const heartsWorkspaceDiv = ref<null|HTMLDivElement>(null)

    /*
    onMounted( () => {

        setInterval(function() {

            var r_num = Math.floor(Math.random() * 40) + 1
            var r_size = Math.floor(Math.random() * 65) + 10
            var r_left = Math.floor(Math.random() * 100) + 1
            var r_bg = Math.floor(Math.random() * 25) + 100
            var r_time = Math.floor(Math.random() * 5) + 5

            var heartDiv = document.createElement('div')

            heartDiv.classList.add('heart')
            heartDiv.setAttribute('width', r_size + 'px')
            heartDiv.setAttribute('height', r_size + 'px')
            heartDiv.setAttribute('left', r_left + '%')
            heartDiv.setAttribute('background', 'rgba(255,' + (r_bg - 25) + ',' + r_bg + ',1)')
            // heartDiv.setAttribute('-webkit-animation', 'love ' + r_time + 's ease')
            // heartDiv.setAttribute('-moz-animation', 'love ' + r_time + 's ease')
            // heartDiv.setAttribute('-ms-animation', 'love ' + r_time + 's ease')
            heartDiv.setAttribute('animation', 'love ' + r_time + 's ease')

            heartsWorkspaceDiv.value?.appendChild(heartDiv)

            var heartDiv2 = document.createElement('div')

            heartDiv2.classList.add('heart')
            heartDiv2.setAttribute('width', (r_size - 10) + 'px')
            heartDiv2.setAttribute('height', (r_size - 10) + 'px')
            heartDiv2.setAttribute('left', (r_left + r_num) + '%')
            heartDiv2.setAttribute('background', 'rgba(255,' + (r_bg - 25) + ',' + (r_bg + 25) + ',1)')
            // heartDiv2.setAttribute('-webkit-animation', 'love ' + (r_time + 5) + 's ease')
            // heartDiv2.setAttribute('-moz-animation', 'love ' + (r_time + 5) + 's ease')
            // heartDiv2.setAttribute('-ms-animation', 'love ' + (r_time + 5) + 's ease')
            heartDiv2.setAttribute('animation', 'love ' + (r_time + 5) + 's ease')

            heartsWorkspaceDiv.value?.appendChild(heartDiv2)

            // width:" + (r_size - 10) + "px;
            // height:" + (r_size - 10) + "px;
            // left:" + (r_left + r_num) + "%;
            // background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);
            // -webkit-animation:love " + (r_time + 5) + "s ease;
            // -moz-animation:love " + (r_time + 5) + "s ease;
            // -ms-animation:love " + (r_time + 5) + "s ease;
            // animation:love " + (r_time + 5) + "s ease

            // $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

            // $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

            // $('.heart').each(function() {
            //     var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            //     var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            //     if (top <= -100 || width >= 150) {
            //         $(this).detach();
            //     }
            // });

        }, 500)

    })
    */

</script>


<template>

    <div class="relative w-full h-full top-0 left-0 overflow-hidden px-4" ref="heartsWorkspaceDiv">

        <div class="max-w-xl bg-pink-100 dark:bg-pink-700 bg-opacity-90 dark:bg-opacity-85 text-pink-800 dark:text-pink-100 rounded-xl shadow-lg mx-auto mb-24 px-6">

            <div class="max-w-2xl mx-auto text-center text-3xl pt-12">
                Happy Mother's Day!
            </div>

            <ul class="text-lg py-6">
                <!--<li>
                    Do mother's make the 
                    <button @click="swap1 = !swap1">
                        <span v-if="!swap1">
                            world
                        </span>
                        <VvFa v-else family="fas" icon="house"/>
                    </button> 
                    go 'round?
                </li>-->
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
