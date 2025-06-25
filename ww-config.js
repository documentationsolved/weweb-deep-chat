module.exports = {
  name: 'weweb-deep-chat',
  type: 'section',
  props: [
    {
      name: 'connect',
      type: 'object',
      required: true,
      description: 'Deep Chat connection settings'
    },
    {
      name: 'camera',
      type: 'boolean',
      default: false,
      description: 'Enable camera access'
    },
    {
      name: 'microphone',
      type: 'boolean',
      default: false,
      description: 'Enable microphone access'
    },
    {
      name: 'speechToText',
      type: 'boolean',
      default: false,
      description: 'Enable speech-to-text'
    },
    {
      name: 'textToSpeech',
      type: 'boolean',
      default: false,
      description: 'Enable text-to-speech'
    }
  ]
};
