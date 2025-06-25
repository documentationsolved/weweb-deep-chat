export default {
  type: 'section',
  editor: {
    label: { en: 'Deep Chat' },
    icon: 'chat'
  },
  properties: {
    connect: {
      label: { en: 'Connect JSON' },
      type: 'Json',
      defaultValue: {}
    },
    camera: {
      label: { en: 'Enable camera' },
      type: 'Switch',
      defaultValue: false
    },
    microphone: {
      label: { en: 'Enable microphone' },
      type: 'Switch',
      defaultValue: false
    },
    speechToText: {
      label: { en: 'Speech-to-Text' },
      type: 'Switch',
      defaultValue: false
    },
    textToSpeech: {
      label: { en: 'Text-to-Speech' },
      type: 'Switch',
      defaultValue: false
    },
    textColor: {
      label: { en: 'Text color' },
      type: 'Color',
      defaultValue: '#F23636'
    }
  }
}