import '../src/sass/index.scss';

const customViewports = {
  xss: {
    name: 'xxs',
    styles: {
      width: '320px',
      height: '100vh'
    }
  },
  xs: {
    name: 'xs',
    styles: {
      width: '600px',
      height: '100vh'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFF'
      },
      {
        name: 'forest',
        value: '#1e392a'
      }
    ]
  },
  viewport: { viewports: customViewports }
};
