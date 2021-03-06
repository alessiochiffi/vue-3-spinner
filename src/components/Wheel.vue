<template>
  <section class="vue-winwheel">
    <div class="mobile-container">
      <div class="wheel-wrapper">
        <div class="canvas-wrapper">
          <img id="prizePointer" src="../assets/logo.png" alt="V" />
          <canvas id="canvas" width="310" height="310"> </canvas>
        </div>
        <div
          class="button-wrapper"
          v-if="!state.loadingPrize && !state.wheelSpinning"
        >
          <a class="ui button" href="#" @click.prevent="startSpin()">SPIN!</a>
        </div>
      </div>
    </div>
    <div
      v-if="state.modalPrize"
      class="custom-modal modal-mask"
      id="modalSpinwheel"
    >
      <div v-if="!state.wheelSpinning" class="winner">
        <h2>{{ state.question }}</h2>
        <h1>🎉 {{ state.prizeName }}!</h1>
        <span @click="[(state.modalPrize = false)]">X close</span>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, watch } from 'vue';
import * as Winwheel from '../assets/winwheel.min.js';
import { useWheel, loadSlices, getQuestion } from '../composable/useWheel';

export default {
  name: 'Wheel',
  props: {
    segments: Array,
  },
  setup(props) {
    const state = reactive({
      theWheel: null,
      modalPrize: false,
      wheelPower: 2,
      wheelSpinning: false,
      added: false,
      question: '',
      WinWheelOptions: {
        textFontSize: 14,
        outterRadius: 310,
        innerRadius: 20,
        lineWidth: 2,
        segments: loadSlices(),
        animation: {
          type: 'spinOngoing',
          duration: 1,
        },
      },
    });

    function showPrize() {
      state.modalPrize = true;
    }

    function startSpin() {
      if (state.wheelSpinning === false) {
        state.theWheel.startAnimation();
        state.wheelSpinning = true;
        state.theWheel = new Winwheel.Winwheel({
          ...this.WinWheelOptions,
          numSegments: useWheel.state.segments.length,
          segments: useWheel.state.segments,
          animation: {
            type: 'spinToStop',
            duration: 5,
            spins: 5,
            callbackFinished: onFinishSpin,
          },
        });
        // random prize number
        state.theWheel.startAnimation();
        state.wheelSpinning = false;
      }
    }

    function regenerateWheel() {
      console.log(useWheel.state.segments);
      state.theWheel = new Winwheel.Winwheel({
        ...state.WinWheelOptions,
        numSegments: useWheel.state.segments.length,
        segments: useWheel.state.segments,
      });
      if (state.wheelSpinning) {
        state.theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
      }
      state.theWheel.startAnimation();
      state.theWheel.pauseAnimation();
      state.theWheel.draw(); // Call draw to render changes to the wheel.
      state.wheelSpinning = false;
    }

    function initSpin() {
      regenerateWheel();
    }

    function onFinishSpin(indicatedSegment) {
      state.prizeName = indicatedSegment.text;
      showPrize();
    }

    watch(useWheel.state, (newSlice) => {
      regenerateWheel(newSlice);
      state.question = getQuestion();
      state.modalPrize = false;
    });

    onMounted(() => {
      regenerateWheel();
    });

    return {
      state,
      props,
      initSpin,
      startSpin,
      showPrize,
      onFinishSpin,
      regenerateWheel,
    };
  },
};
</script>

<style>
.winner {
  margin-top: 40px;
}
</style>
