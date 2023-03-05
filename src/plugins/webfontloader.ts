// eslint-disable-next-line import/prefer-default-export
export const loadFonts = async () => {
  const webFontLoader = await import('webfontloader');

  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  });
};
