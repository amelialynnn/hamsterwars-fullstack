
function fixUrl(url: string): string {
  // Use the same port as you do in the server file
  if( import.meta.env.MODE === "development" ) {
      return 'http://localhost:3001' + url
  } else {
      return url
  }
}

function fixImageUrl(imgName: string) {
  if (imgName.startsWith('hamster')) {
    return (fixUrl(`/img/${imgName}`))
  } else if (imgName.startsWith('http')) {
    return imgName
  } else {
    return (fixUrl('/img/default-image.png'))
  }
}

export { fixUrl }
export { fixImageUrl }
