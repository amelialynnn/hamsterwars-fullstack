
function fixUrl(url: string): string {
  // Use the same port as you do in the server file
  if( import.meta.env.MODE === "development" ) {
      console.log('DEV MODE')
      return 'http://localhost:3001' + url
  } else {
      console.log('PRODUCTION MODE')
      return url
  }
}

export { fixUrl }