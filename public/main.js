window.addEventListener('DOMContentLoaded', main)

async function main() {
  if ('navigator' in window) {
    const registration = await navigator.serviceWorker.register('./worker.js', { scope: '/' })

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        'BAML37sYnvvLwUATGpPpOPhh1CP4wy7yvsyBfy3JGsFFqsQr1KwXy7ujXeWO6C9BdXOgRbi9rWfm3S76CsnjpeM'
    })

    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
