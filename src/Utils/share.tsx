export const navigatorShare = async ({ text, url }: any) => {
  const shareData = {
    title: "321movies",
    text: text,
    url: url,
  };

  try {
    await navigator.share(shareData);
  } catch (e) {
    console.error(e);
  }
};
