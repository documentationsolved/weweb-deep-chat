<template>
  <section class="deep-chat-section" :style="cssVars">
    <deep-chat
      :connect="content.connect"
      :camera="content.camera"
      :microphone="content.microphone"
      :speech-to-text="content.speechToText"
      :text-to-speech="content.textToSpeech"
    />
  </section>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true }
  },
  computed: {
    cssVars() {
      return { '--deep-chat-text-color': this.content.textColor };
    }
  },
  async mounted() {
    if (typeof window !== 'undefined') {
      await import('deep-chat');
    }
  },
  compilerOptions: {
    isCustomElement: tag => tag === 'deep-chat'
  }
};
</script>

<style scoped>
.deep-chat-section {
  width: 100%;
}

deep-chat {
  color: var(--deep-chat-text-color);
}
</style>