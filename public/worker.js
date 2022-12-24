console.log('worker registered')

self.addEventListener('push', (e) => {
  const data = e.data.json()
  console.log('Push Recieved')

  self.registration.showNotification(data.title, {
    body: 'Notified by Marzuk Zarir',
    icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
  })
})
