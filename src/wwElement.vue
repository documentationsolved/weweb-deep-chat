<template>
  <deep-chat
    :connect="connect"
    :camera="camera"
    :microphone="microphone"
    :speech-to-text="speechToText"
    :text-to-speech="textToSpeech"
  />
</template>

<script>
import 'deep-chat';

export default {
  name: 'WewebDeepChatSection',
  props: {
    connect: {
      type: Object,
      required: true
    },
    camera: {
      type: Boolean,
      default: false
    },
    microphone: {
      type: Boolean,
      default: false
    },
    speechToText: {
      type: Boolean,
      default: false
    },
    textToSpeech: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
