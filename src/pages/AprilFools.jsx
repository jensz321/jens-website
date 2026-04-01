import { useEffect, useState } from 'react'
import '../styles/AprilFools.css'

export default function AprilFools() {
  const [countdown, setCountdown] = useState(10)
  const [threatLevel, setThreatLevel] = useState(15)
  const [showApril, setShowApril] = useState(false)

  useEffect(() => {
    // Request notification permission
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          triggerNotification()
        }
      })
    }

    // Threat level counter
    const threatInterval = setInterval(() => {
      setThreatLevel(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 800)

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          clearInterval(threatInterval)
          setShowApril(true)
          createConfetti()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(threatInterval)
      clearInterval(countdownInterval)
    }
  }, [])

  function triggerNotification() {
    if (Notification.permission === 'granted') {
      new Notification('⚠️ Beveiligingswaarschuwing', {
        body: 'Je apparaat is gehackt! Tap om te herstellen.',
        tag: 'security-alert'
      })
    }
  }

  function createConfetti() {
    const emojis = ['🎉', '🎊', '🎈', '🎁', '😄', '🤪']
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)]
      confetti.style.left = Math.random() * 100 + 'vw'
      confetti.style.fontSize = Math.random() * 40 + 20 + 'px'
      confetti.style.opacity = '1'
      confetti.style.animation = `fall ${Math.random() * 4 + 2}s linear`
      document.body.appendChild(confetti)

      setTimeout(() => confetti.remove(), 4000)
    }
  }

  if (showApril) {
    return (
      <div className="april-container">
        <div className="april-message">🎉 1 APRIL 🎉</div>
        <div className="april-subtitle">Gotcha! 😄</div>
        <div className="april-signature">Groetjes Jens 🤪</div>
      </div>
    )
  }

  return (
    <>
      <div className="background-blur"></div>
      <div className="warning-wrapper">
        <div className="warning-container">
          <div className="warning-header">
            <div className="warning-icon">⚠️</div>
            <div className="warning-title">Je apparaat is gehackt</div>
            <div className="warning-subtitle">Beveiligingswaarschuwing</div>
          </div>

          <div className="warning-content">
            <div className="threat-level">🔴 BEDREIGING NIVEAU: KRITIEK</div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500, marginBottom: '8px', fontSize: '12px' }}>
                BEDREIGINGEN GEDETECTEERD:
              </div>
              <div className="threat-count">{threatLevel}</div>
            </div>

            <div className="warning-details">
              <div>Malware.Trojan.Win32.Generic</div>
              <div>BotNet.Credential.Stealer</div>
              <div>Ransomware.CryptoLocker.Variant</div>
              <div>Processen: explorer.exe, svchost.exe, system.exe</div>
              <div>Externe verbinding: 192.168.1.105 → 45.142.86.253:8080</div>
              <div>Geïnfecteerde bestanden: 247</div>
              <div>Wachtwoorden blootgesteld: JA</div>
              <div>Gegevenslek: Bankgegevens, contacten, bestanden</div>
            </div>

            <div className="scan-container">
              <div className="scan-text">⚙️ Herstelscan in uitvoering...</div>
              <div className="scan-bar">
                <div className="scan-progress"></div>
              </div>
            </div>

            <div className="timer">
              Waarschuwing verdwijnt over: <strong>{countdown}</strong> seconden
            </div>
          </div>

          <div className="warning-buttons">
            <button className="warning-button">Quarantaine & Herstellen</button>
          </div>
        </div>
      </div>
    </>
  )
}
